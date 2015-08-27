UserDB = Meteor.users;

UserDB.findByEmail = function(userEmail) {
    return this.findOneFaster({
        emails: {
            $elemMatch: {
                address: userEmail
            }
        }
    });
};