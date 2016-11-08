angular.module('ionicApp', ['ionic'])

.controller('AppCtrl', function($scope, $ionicModal) {
  
  $scope.contacts = [
    { name: 'Gordon ', lastName: 'Freeman', email: 'example@gmail.com' },
    { name: 'Barney ', lastName:'Calhoun', email: 'example@gmail.com' },
    { name: 'Lamarr ', lastName: 'the Headcrab', email: 'example@gmail.com' },
  ];

  $ionicModal.fromTemplateUrl('templates/modal.html', { 
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  
  $scope.createContact = function(u) {        
    $scope.contacts.push({ name: u.firstName + ' ' + u.lastName + ' ' + u.email });
    $scope.modal.hide();
  };

});