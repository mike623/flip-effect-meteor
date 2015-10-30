if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  Template.body.helpers({
    pages: function () {
      return ["2","1"];
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.body.events({
    'click .page': function (event) {
      // alert("asd");
      console.log(event);
      console.log(event.currentTarget);

      var dir = $(event.currentTarget).data('dir') ==="left" ? "right" : "left";
      var ang = $(event.currentTarget).data('dir') ==="left" ? "0" : "-180";

      $(event.currentTarget).css('transform' , "rotateY("+ang+"deg)");

      $(event.currentTarget).data('dir',dir);
      // console.log(this);
      // console.log(e);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
