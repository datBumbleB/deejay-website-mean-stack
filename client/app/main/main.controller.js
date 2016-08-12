'use strict';
angular.module('projectDeeJayApp')
  .controller('MainCtrl', function ($scope, $http, $resource, $timeout, Lightbox) {

    $scope.equipments = [];
    $scope.pics = [];
    $scope.socials = [];

    var Email = $resource('/api/emails');

    $http.get('/api/equipments').success(function(equipments) {
      angular.forEach(equipments, function(equipment, i)
      {
        if(equipment.name.toLowerCase() == 'eqdescription')
          {
            $scope.eqDescription = equipment;
            equipments.splice(i, 1);
          }
      });

      $scope.equipments = equipments;
      console.log(equipments);


    });

    $http.get('/api/socials').success(function(socials) {

      angular.forEach(socials, function(social, i)
      {
        switch(social.name.toLowerCase())
        {
          case 'facebook':
            $scope.facebook = social;
            break;
          case 'google plus':
            $scope.gplus = social;
            break;
          case 'email':
            $scope.email = social;
            break;
          case 'phone':
            $scope.phone = social;
            break;
        };
      });
      console.log(socials);
    });

    $http.get('/api/pics').success(function(pics) {
      angular.forEach(pics, function(pic, i) {
            $scope.pics[i] =
            {
              'url': pic.link,
              //'thumbUrl': pic.link,
              'caption': pic.name
            };

            if(pic.name.toLowerCase() == 'wallpaper')
              {
                $scope.wallpaper = pic;
                console.log($scope.wallpaper.link);
                $scope.pics.splice(i, 1);
              }
            else if(pic.name.toLowerCase() == 'logo')
              {
                $scope.logo = pic;
                console.log($scope.logo.link);
                $scope.pics.splice(i, 1);
              }
      });
    });

    $scope.alerts = [];

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

    var addAlert = function(t, m)
    {
      $scope.alerts.push({type: t, message: m});
      var i = $scope.alerts.length - 1;
      $timeout(function(){$scope.alerts.splice(i, 1);}, 3000);
      console.log($scope.alerts[0]);
    };

    $scope.isLeft = function(eq)
    {
      return eq.position === 'Stânga';
    };

    $scope.isRight = function(eq)
    {
      return eq.position === 'Dreapta';
    };

    $scope.sendEmail = function()
    {
     var email = new Email();

        email.senderName = $scope.senderName;
        email.senderEmail = $scope.senderEmail;
        email.emailBody = $scope.emailBody;

      email.$save(function()
      {
        $scope.senderName = '';
        $scope.senderEmail = '';
        $scope.emailBody = '';
        addAlert('success','Mesaj trimis cu succes!');
        console.log(email);
      });
    };

    $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.pics, index);
  };

  });
