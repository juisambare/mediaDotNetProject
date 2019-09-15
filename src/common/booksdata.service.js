(function () {
"use strict";

angular.module('BooksApp')
.service('BooksDataService', BooksDataService);

function BooksDataService() {
  var service = this;

  service.booksDepository = {
    books : [],
    favorites : []
  };

  service.getDepository = function(){
    return service.booksDepository;
  };

  service.setDepository = function(repo){
    this.booksDepository = repo;
  };

}



})();
