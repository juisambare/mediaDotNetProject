(function () {
'use strict';

angular.module('BooksApp')
.controller('BooksController', BooksController);


function BooksController() {
  self = this;
  if(!window.localStorage.Depository){
    self.noMsg = "No books added yet !";
  }else{
    self.noMsg = null;
    var depository = JSON.parse(window.localStorage.Depository);
    self.bookList = depository.books;
  }

self.addToFavorite = function(book){
  var isPresent= false;
  depository.favorites.forEach(function(item){
    if(item.name === book.name){
      isPresent = true;
    }
  });
  if(!isPresent){
  depository.favorites.push(book);
  window.localStorage.setItem("Depository",JSON.stringify(depository));
}
};

self.deleteBook = function(book,index){
  self.bookList.splice(index,1);
  var indexForDelete = -1;
  depository.favorites.forEach(function(item,index){
    if(item.name === book.name){
      indexForDelete = index;
    }
  });
  if(indexForDelete > -1){
    depository.favorites.splice(indexForDelete,1);
  }
  window.localStorage.setItem("Depository",JSON.stringify(depository));
};
}

})();
