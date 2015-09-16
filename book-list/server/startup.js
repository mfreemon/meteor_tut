

/*eslint-disable */
Meteor.startup(function(){
  if(!Books.findOne()){
    Books.insert({title: "To Kill a Mockingbird", author: "Harper Lee", cost: 5.00});
    Books.insert({title: "1984", author: "George Orwell", cost: 4.00});
    Books.insert({title: "The Lord of the Rings", author: "J. R. R. Tolkien", cost: 5.50});
    Books.insert({title: "The Catcher in the Rye", author: "J. D. Salinger", cost: 4.77});
    Books.insert({title: "The Great Gatsby", author: "F. Scott Fitzgerald", cost: 10.00});
    Books.insert({title: "Man's Search for Meaning", author: "Victor Frankel", cost: 15.00});
    Books.insert({title: "New York Times", author: "NYT", cost: 25.00});
    Books.insert({title: "Washington Post", author: "WaPo", cost: 55.00});
    Books.insert({title: "The Atlantic", author: "Atlantic", cost: 95.00});
    Books.insert({title: "The Dallas Morning News", author: "Cowboys", cost: 45.00});
    Books.insert({title: "The San Francisco Chronicle", author: "GGB", cost: 25.00});
    Books.insert({title: "Oakland Tribune", author: "YO", cost: 5.00});
  }

});
