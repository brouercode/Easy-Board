BoardDB = new Mongo.Collection('board');

BoardDB.allow({
    insert: function(userId, doc) {
        return (userId);
    },
    update: function(userId, doc, fields, modifier) {
        return (userId);
    },
    remove: function(userId, doc) {
        return (userId);
    }
});

BoardDB.insertBoard = function(name, type, userName) {
    var reg = {
        name: name,
        type: type,
        userId: Meteor.userId(),
        userName: Meteor.user().emails[0].address,
        listShare: []
    };
    this.insert(reg);
};

BoardDB.deleteBoard = function(boardId) {
    this.remove(boardId);
};

BoardDB.findByUser = function(userId) {
    this.find({
        $or: [{
            "listShare": this.userId
        }, {
            "userId": this.userId
        }]
    }, {
        fields: {
            '_id': 1,
            'name': 1,
            'type': 1,
            'userName': 1
        }
    });
};