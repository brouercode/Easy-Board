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

StoryDB.insertTask = function(storyId, taskName, taskAssigned, taskState) {

    this.update({
        _id: storyId
    }, {
        $push: {
            listTask: {
                name: taskName,
                taskId: SequenceDB.next("taskId"),
                state: taskState,
                assigned: taskAssigned
            }
        }
    });
};

StoryDB.updateTask = function(storyId, taskId, taskName, taskAssigned) {
    console.log(storyId + " - " + taskId + " - " + taskName + " - " + taskAssigned + " - ");
    this.update({
        _id: storyId,
        "listTask.taskId": taskId
    }, {
        $set: {
            "listTask.$.name": taskName,
            "listTask.$.taskId": taskId,
            "listTask.$.assigned": taskAssigned

        }
    });
};


StoryDB.deleteTask = function(storyId, taskId) {
    this.update({
        _id: storyId
    }, {
        $pull: {
            listTask: {
                taskId: taskId
            }
        }
    });
};

StoryDB.updateTaskState = function(state, storyId, listTaskId) {
    var reg = this.findOne({
        _id: storyId
    });

    var listTask = reg.listTask;
    var newList = [];

    for (var i = 0; i < listTaskId.length; i++) {
        var taskId = listTaskId[i];
        for (var j = 0; j < listTask.length; j++) {
            var task = listTask[j];
            if (task.taskId == taskId) {
                listTask.splice(j, 1);
                task.state = state;
                newList.push(task);
            }
        }
    }

    listTask = listTask.concat(newList);

    this.update({
        _id: storyId
    }, {
        $set: {
            "listTask": listTask
        }
    });
};