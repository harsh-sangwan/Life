// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'factor'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);


  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.projects', {
    url: '/projects',
    views: {
      'menuContent': {
        templateUrl: 'templates/projects.html'
      }
    }
  })

  .state('app.today', {
      url: '/today',
      views: {
        'menuContent': {
          templateUrl: 'templates/today.html'
        }
      }
    })

  .state('app.wealth', {
      url: '/wealth',
      views: {
        'menuContent': {
          templateUrl: 'templates/wealth.html'
        }
      }
    })

  .state('app.gratitude', {
      url: '/gratitude',
      views: {
        'menuContent': {
          templateUrl: 'templates/gratitude.html'
        }
      }
    })

  .state('app.movies', {
      url: '/movies',
      views: {
        'menuContent': {
          templateUrl: 'templates/movies.html'
        }
      }
    })

  .state('app.books', {
      url: '/books',
      views: {
        'menuContent': {
          templateUrl: 'templates/books.html',
          controller: 'BooksCtrl'
        }
      }
    })

  .state('app.bookl', {
    url: '/books/:item',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookl.html',
        controller: 'ItemCtrl'
      }
    }
  })

  .state('app.shopping', {
      url: '/shopping',
      views: {
        'menuContent': {
          templateUrl: 'templates/shopping.html'
        }
      }
    })

  .state('app.vision', {
      url: '/vision',
      views: {
        'menuContent': {
          templateUrl: 'templates/vision.html'
        }
      }
    })

  .state('app.dnds', {
      url: '/dnds',
      views: {
        'menuContent': {
          templateUrl: 'templates/dnds.html'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/projects');



});
