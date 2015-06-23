if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.bookList.helpers({
    books: function(){
      return Session.get('books');
    }
  });

  Template.bookList.rendered = function(){
    Session.setDefault('books',[
      {title: 'To Kill a Mockingbird', author: "Harper Lee"},
      {title: '1984', author: "George Orwell"},
      {title: 'The Lord of the Rings', author: "J.R.R. Tolkien"},
      {title: 'To Kill a Mockingbird', author: "J.D. Salinger"},
      {title: "Man's Search for Meaning", author: "Victor E. Frankel"},
      {title: 'On The Road', author: "Jack Kerouac"},
      {title: 'The Tristan Betrayal', author: "Robert Ludlum"},
    ]);
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
