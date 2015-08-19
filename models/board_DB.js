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
        listStory: []
    };
    this.insert(reg);
};

BoardDB.deleteBoard = function(id) {
    this.remove(id);
};

BoardDB.insertStory = function(_id, storyName) {
    this.update({
        _id: _id
    }, {
        $push: {
            listStory: {
                name: storyName,
                storyId: SequenceDB.next("storyId"),
                listTask: []
            }
        }
    });
};

BoardDB.deleteStory = function(_id, storyId) {
    this.update({
        _id: _id
    }, {
        $pull: {
            listStory: {
                storyId: storyId
            }
        }
    });
};

BoardDB.insertTask = function(_id, storyId, taskName, taskState) {
    this.update({
        _id: _id,
        "listStory.storyId": storyId
    }, {
        $push: {
            "listStory.$.listTask": {
                name: taskName,
                taskId: SequenceDB.next("taskId"),
                state: taskState
            }
        }
    });
};

BoardDB.deleteTask = function(_id, storyId, taskId) {
    this.update({
        _id: _id,
        "listStory.storyId": storyId
    }, {
        $pull: {
            "listStory.$.listTask": {
                taskId: taskId
            }
        }
    });
};

BoardDB.updateTask = function(_id, state, storyId, listTaskId) {
    var reg =   this.findOne({
        _id: _id
    }, {
        "listStory": {
            $elemMatch: {
                storyId: storyId,
            }
        }
    });
    
    var listTask = reg.listStory[0].listTask;
    var newList = [];
    for (var i = listTask.length - 1; i >= 0; i--) {
        var task = listTask[i];
        if(listTaskId.contains(task.taskId)){
            listTask.splice(i, 1);
            task.state = state;
            newList.push(task);
        }
    }
    
    listTask.concat(newList);
     
    this.update({
        _id: _id,
        "listStory.storyId": storyId
    }, {
        $set: {
            "listTask": listTask
        }
    });
};

