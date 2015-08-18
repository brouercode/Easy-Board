Sequence = new Mongo.Collection('sequence');

Sequence.next = function(name) {
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
                seq: ret.seq
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
    console.log(ret);
    return ret.seq;
}