'use strict';

angular.module('projectDeeJayApp')
  .controller('AdminCtrl', function ($scope, $http, $resource, $location, $uibModal, $log, $timeout, Auth, User, Equipment, Pic, Email, Social) {
    $scope.equipments = Equipment.query(function()
    {
      angular.forEach($scope.equipments, function(equipment, i)
      {
        if(equipment.name.toLowerCase() == 'eqdescription')
          {
            $scope.eqDescription = equipment;
            $scope.equipments.splice(i, 1);
          }
      });
    });
    $scope.pics = Pic.query(function()
    {
        angular.forEach($scope.pics, function(pic, i)
      {
        if(pic.name.toLowerCase() == 'wallpaper')
          {
            $scope.wallpaper = pic;
            //$scope.pics.splice(i, 1);
          }
        else if(pic.name.toLowerCase() == 'logo')
        {
          $scope.logo = pic;
          $scope.pics.splice(i, 1);
        }
      });
    });

    var socials = Social.query(function()
    {
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
    });

    $scope.alerts = [];
    var unreadMessages = 0;

    var addAlert = function(t, m)
    {
      $scope.alerts.push({type: t, message: m});
      var i = $scope.alerts.length - 1;
      $timeout(function(){$scope.alerts.splice(i, 1);}, 3000);
      console.log($scope.alerts[0]);
    };

    $scope.emails = Email.query(function()
    {
      angular.forEach($scope.emails, function(email, i)
      {
      if(email.read === false)
      {
        $scope.emails[i].class = 'blue';
        console.log('wtf');
        unreadMessages++;
      }
      else
      {
        $scope.emails[i].class = 'black';
      }
    });
    $scope.unreadMessages = unreadMessages;
    // rebuild the scrollbar
    addAlert('success', 'Bun venit! Ai ' + unreadMessages + ' mesaje necitite!');
    $scope.$broadcast('rebuild:me');
    });


    console.log($scope.emails.length);

    $scope.alignment =
    [
       'Left',
       'Right'
    ];

    $scope.changeWallpaper = function(wallpaper)
    {
      wallpaper.link = $scope.wallpaper.link;
      wallpaper.name = 'Wallpaper';

      $http({
        method: 'PUT',
        url: '/api/pics/' + wallpaper._id,
        data: JSON.stringify(wallpaper),
        headers: { 'Content-Type': 'application/JSON' }
      });
    };

    $scope.changeLogo = function(logo)
    {
      logo.link = $scope.logo.link;
      logo.name = 'Logo';

      $http({
        method: 'PUT',
        url: '/api/pics/' + logo._id,
        data: JSON.stringify(logo),
        headers: { 'Content-Type': 'application/JSON' }
      });
    };

    $scope.changeSocials = function()
    {
      $http({
        method: 'PUT',
        url: '/api/socials/' + $scope.gplus._id,
        data: JSON.stringify($scope.gplus),
        headers: { 'Content-Type': 'application/JSON' }
      });
      $http({
        method: 'PUT',
        url: '/api/socials/' + $scope.phone._id,
        data: JSON.stringify($scope.phone),
        headers: { 'Content-Type': 'application/JSON' }
      });
      $http({
        method: 'PUT',
        url: '/api/socials/' + $scope.facebook._id,
        data: JSON.stringify($scope.facebook),
        headers: { 'Content-Type': 'application/JSON' }
      });
      $http({
        method: 'PUT',
        url: '/api/socials/' + $scope.email._id,
        data: JSON.stringify($scope.email),
        headers: { 'Content-Type': 'application/JSON' }
      });
    }

    $scope.changeDescription = function(eqDescription)
    {
      eqDescription.info = $scope.eqDescription.info;
      eqDescription.name = 'eqDescription';

      $http({
        method: 'PUT',
        url: '/api/equipments/' + eqDescription._id,
        data: JSON.stringify(eqDescription),
        headers: { 'Content-Type': 'application/JSON' }
    });
    };

    $scope.addEquipment = function()
    {
      var equipment = new Equipment();

      equipment.name = $scope.name;
      equipment.info = $scope.info;
      equipment.image = $scope.image;
      equipment.position = $scope.alignment;

      console.log(equipment);
      equipment.$save(function()
        {

          $scope.equipments = Equipment.query();
          $scope.name = '';
          $scope.info = '';
          $scope.image = '';
          $scope.position = '';
        });
      };

      $scope.deleteEquipment = function(equipment) {
        Equipment.remove({ id: equipment._id });
        angular.forEach($scope.equipments, function(u, i) {
          if (u === equipment) {
            $scope.equipments.splice(i, 1);
            console.log(equipment._id + ' ' + u._id);
          }
        });
      };

      $scope.editEquipment = function(equipment) {
        var passEquipmentData = equipment;

        var equipmentModal = $uibModal.open({
          animation: true,
          templateUrl: 'equipmentModal.html',
          controller: 'equipmentModalCtrl',
          size: 'lg',
          resolve: {
            equipment: function () {
              return passEquipmentData;
            }
          }
        });

        equipmentModal.result.then(function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

      $scope.readEmail = function(email)
      {
        var passData = email;
        if(email.read === false)
        {
          email.read = true;
          email.class = 'black';
          $http({
          method: 'PUT',
          url: '/api/emails/' + email._id,
          data: JSON.stringify(email),
          headers: { 'Content-Type': 'application/JSON' }
          })
          .success(function()
          {
          $scope.unreadMessages--;
          console.log(email._id);
          });
        }

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            email: function () {
              return passData;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.deleteEmail = function(email)
    {
      Email.remove({id: email._id});
      angular.forEach($scope.emails, function(u, i) {
        if (u === email) {
          $scope.emails.splice(i, 1);
          console.log(email._id + ' ' + u._id);
        }
      });
      // rebuild the scrollbar
      $scope.$broadcast('rebuild:me');
    };

    $scope.addPic = function()
    {
      var pic = new Pic();
      pic.name = $scope.picName;
      pic.link = $scope.picLink;
      $scope.pics = Pic.query();
      console.log(pic);
      pic.$save(function()
    {

      $scope.picName = '';
      $scope.picLink = '';
    });
  };

    $scope.deletePic = function(pic) {
      Pic.remove({ id: pic._id });
      angular.forEach($scope.pics, function(u, i) {
        if (u === pic) {
          $scope.pics.splice(i, 1);
          console.log(pic._id + ' ' + u._id);
        }
      });
    };

    $scope.editPic = function(pic)
    {
      var passPicData = pic;

      var picModal = $uibModal.open({
        animation: true,
        templateUrl: 'picModal.html',
        controller: 'picModalCtrl',
        size: 'lg',
        resolve: {
          pic: function () {
            return passPicData;
          }
        }
      });

      picModal.result.then(function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })
  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, email) {
    $scope.email = email;
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

    //
    // $scope.$on('scrollbar.show', function(){
    //   console.log('Scrollbar show');
    // });
    //
    // $scope.$on('scrollbar.hide', function(){
    //   console.log('Scrollbar hide');
    // });

  })
  .controller('equipmentModalCtrl', function($scope, $http, $uibModalInstance, equipment)
  {
    $scope.equipment = equipment;

    $scope.ok = function () {
      $http({
      method: 'PUT',
      url: '/api/equipments/' + $scope.equipment._id,
      data: JSON.stringify($scope.equipment),
      headers: { 'Content-Type': 'application/JSON' }
      })
      .success(function()
      {
      console.log(equipment._id);
      });
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  })
  .controller('picModalCtrl', function($scope, $http, $uibModalInstance, pic)
  {
    $scope.pic = pic;

    $scope.ok = function () {
      $http({
      method: 'PUT',
      url: '/api/pics/' + $scope.pic._id,
      data: JSON.stringify($scope.pic),
      headers: { 'Content-Type': 'application/JSON' }
      })
      .success(function()
      {
      console.log(pic._id);
      });
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
