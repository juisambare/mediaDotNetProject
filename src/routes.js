(function () {
'use strict';

angular.module('BooksApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/books/addBooks/addBooks.template.html'
  })

  // Premade list page
  .state('addBooks', {
    url: '/addBooks',
    templateUrl: 'src/books/addBooks/addBooks.template.html',
    controller: 'AddBooksController as addBooks'
  })

  .state('books', {
    url: '/books',
    templateUrl: 'src/books/booksDisplay/books.template.html',
    controller: 'BooksController as books'
  })

  .state('favorites', {
    url: '/books/favorites',
    templateUrl: 'src/books/favoritesDisplay/favorites.template.html',
    controller: 'FavoritesController as favorites'
  });
}

})();
