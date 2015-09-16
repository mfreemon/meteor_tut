
/*eslint-disable */
if (Meteor.isClient) {
    console.log('I am here');

  Template.bookList.helpers({
    'books':function(){
      return Books.find();
    },

    // 'showSelectedBook': function(){
    //   var selectedBook = Session.get('selectedBook');
    //   if (selectedBook){
    //     prompt('you selected' +  selectedBook.name);
    //   }
    // }
  });

  Template.bookList.events({

    'click .get-this': function(){
      var bookId = this._id;
      var bookCost = this.cost;
      Books.update(bookId, {$inc: {cost: -(bookCost)}});
      alert ("DId you want to want to purchase "  + this.title)
      console.log("a button has been clicked  " + bookId);
    }
  })
}



if (Meteor.isServer){
  console.log("hello server");
  Meteor.methods({
    'modifyAmount': function(bookId, bookCost){
      // var currentBook = this._id();
      Books.update({_id: bookId}, {$inc: {cost: bookCost}});
    }
  });
}
