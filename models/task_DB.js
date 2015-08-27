TaskDB = new Mongo.Collection('task');

TaskDB.allow({
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

TaskDB.insertTask = function(boardId, storyId, taskName, taskAssigned, taskState) {
    var reg = {
        name: taskName,
        state: taskState,
        assigned: taskAssigned,
        rank: SequenceDB.next("taskRank"),
        boardId: boardId,
        storyId: storyId
    };
    this.insert(reg);
};

TaskDB.updateTask = function(taskId, taskName, taskAssigned) {
    this.update({
        _id: taskId
    }, {
        $set: {
            "name": taskName,
            "assigned": taskAssigned
        }
    });
};


TaskDB.deleteTask = function(taskId) {
    this.remove(taskId);
};

TaskDB.updateTaskState = function(taskId, state, taskRank) {
    this.update({
        _id: taskId
    }, {
        $set: {
            "state": state,
            "rank": taskRank
        }
    });
};
