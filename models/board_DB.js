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
    return this.findFaster({
        $or: [{
            "listShare._id": userId
        }, {
            "userId": userId
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

BoardDB.shareBoard = function(boardId, user) {

    this.update({
        _id: boardId
    }, {
        $push: {
            listShare: user
        }
    });
};

BoardDB.unshareBoard = function(boardId, userId) {
    this.update({
        _id: boardId
    }, {
        $pull: {
            listShare: {
                _id: userId
            }
        }
    });
};


BoardDB.verifyShare = function(boardId, userId) {
    var reg = this.findOneFaster({
        _id: boardId,
        "listShare._id": userId
    });

    return (reg ? true : false);
};
