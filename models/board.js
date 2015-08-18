Board = new Mongo.Collection('board');

Board.insertBoard = function(name, type, userName) {
    var reg = {
        name: name,
        type: type,
        userId: Meteor.userId(),
        userName: Meteor.user().emails[0].address,
        listStory: []
    };
    this.insert(reg);
};

Board.deleteBoard = function(id) {
    this.remove(id);
};

Board.insertStory = function(_id, nameStory) {
    this.update({
        _id: _id
    }, {
        $push: {
            listStory: {
                name: nameStory,
                _id: Sequence.next("storyId")
            }
        }
    });
};

Board.deleteStory = function(_id, storyId) {
    var reg = this.findOne({
        query: {
            _id: _id
        }
    });

    if (reg.listStory) {
        for (var i = 0; i < reg.listStory.length; i++) {
            var story = reg.listStory[i];
            if (story._id == storyId) {
                reg.listStory.splice(i, 1);
                break;
            }
        }
        this.update({
            _id: _id
        }, {
          listStory: reg.listStory
        });
    }

};