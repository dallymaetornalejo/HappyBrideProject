angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('signUp', {
    url: '/page3',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.home', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.gallery', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('tabsController.packages', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/packages.html',
        controller: 'packagesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});