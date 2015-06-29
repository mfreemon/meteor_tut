if (Meteor.isClient) {
  
  Template.bookList.helpers({
    books:function(){
      return Books.find();
    }
  });
}
