UserDB = Meteor.users;

UserDB.findByEmail = function(userEmail) {
    return this.findOne({
        emails: {
            $elemMatch: {
                address: userEmail
            }
        }
    });
};