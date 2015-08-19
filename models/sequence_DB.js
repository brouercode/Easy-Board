SequenceDB = new Mongo.Collection('sequence');

SequenceDB.next = function(name) {
    var ret = this.findOne({
        query: {
            _id: name
        }
    });

    if (ret) {
        ret.seq += 1;

        this.update({
            _id: name
        }, {
            $inc: {
                seq: 1
            }
        });
    }
    else {
        ret = {
            _id: name,
            seq: 1
        };
        this.insert(ret);
    }
    return "" + ret.seq;
}