Router.configure({
    layoutTemplate: "main"
});

Router.onBeforeAction(function() {
    if (!Meteor.userId()) {
        Router.go('home');
    }
    else {
        this.next();
    }
}, {
    except: ['home']
});