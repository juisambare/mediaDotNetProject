(function () {
'use strict';

angular.module('BooksApp')
.controller('FavoritesController', FavoritesController);

function FavoritesController() {
  self = this;
  if(!window.localStorage.Depository || JSON.parse(window.localStorage.Depository).favorites.length ===0){
    self.noMsg = "Nothing in favorites yet !";
  }else{
    self.noMsg = null;
var depository = JSON.parse(window.localStorage.Depository);
self.bookList = depository.favorites;
}
self.deleteFromFavorites = function(index){
  self.bookList.splice(index,1);
  window.localStorage.setItem("Depository",JSON.stringify(depository));
};
}

})();
