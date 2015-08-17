Board = new Mongo.Collection('board');

Board.insertBoard = function(name, type) {
    var reg = {
        name: name,
        type: type,
        userId: Meteor.userId()
    };
    this.insert(reg);

};
