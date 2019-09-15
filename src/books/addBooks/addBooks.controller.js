(function () {
'use strict';

angular.module('BooksApp')
.controller('AddBooksController', AddBooksController);

AddBooksController.$inject = ['BooksDataService'];
function AddBooksController(BooksDataService) {
  var self = this;
  function bookEntry(){
    self.name = "";
    self.author = "";
    self.price = "";
  }
  self.showMessage = false;

  self.book = new bookEntry();

self.submit = function(){
  var bookList = null;
  if(window.localStorage.Depository){
    bookList = JSON.parse(window.localStorage.Depository);
  }else{
  bookList = BooksDataService.getDepository();
}
var found = false;
bookList.books.forEach(function(item){
  if(item.name === self.book.name){
    found = true;
  }
});
if(found){
  self.showError = "The book with the entered name already present..!";
}else{
  self.showError = "";
  bookList.books.push(self.book);
  window.localStorage.setItem("Depository",JSON.stringify(bookList));
  BooksDataService.setDepository(bookList);
  self.book = new bookEntry();
  self.showMessage = true;
}

};


}

})();
