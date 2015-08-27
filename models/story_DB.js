StoryDB = new Mongo.Collection('story');

StoryDB.allow({
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

StoryDB.insertStory = function(boardId, storyName) {
    var reg = {
        name: storyName,
        boardId: boardId,
        listTask: []
    };
    this.insert(reg);
};

StoryDB.updateStory = function(storyId, storyName) {
    this.update({
        _id: storyId
    }, {
        $set: {
            "name": storyName
        }
    });
};

StoryDB.deleteStory = function(storyId) {
    this.remove(storyId);
};
