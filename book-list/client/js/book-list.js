
/*eslint-disable */
if (Meteor.isClient) {
    console.log('I am here');

  Template.bookList.helpers({
    'books':function(){
      return Books.find();
    },
    'selectedBook': function(){
      var bookId = Books.find();
      var selectedBook = Session.get('selectedBook');
      if (bookId == selectedBook){
        return "selected"
      }
    }
  });

  Template.bookList.events({

    'click .get-this': function(){
      var bookId = this._id;
      var bookCost = this.cost;
      Meteor.call(modifyAmount, bookId, bookCostcost )
      console.log("a button has been clicked " + bookId);
    }
  })
}



if (Meteor.isServer){

  Meteor.methods({
    'modifyAmount': function(bookId, bookCost){
      // var currentBook = this._id();
      Books.update({_id: bookId}, {$inc: {cost: bookCost}});
    }
  });
}
