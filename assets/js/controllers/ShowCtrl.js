myFymApp.controller('ShowCtrl',['$scope','$http', '$rootScope','$location',function($scope,$http,$rootScope,$location){
  console.log('ShowCtrl.js working!');

    $scope.findAllCommitments = function(){
      $http({
        method:'POST',
        url:'/api/commitment/show/user',
        data:{userId:$scope.currentUser.id}
      }).then(function(commitments){
        // $scope.commitments=commitments.data;
        $scope.commitments = commitments.data
      });

    }

    $scope.findAllActions = function(){
        $scope.commitments.forEach(function(taco){

          $http({
            method:'POST',
            url:'/api/action/show/commitment',
            data:{commitmentId:taco.id}
          }).then(function(actions){
            // $scope.actions = actions;
            // console.log(actions);

            }
          })
        })
      // console.log($scope.commitment);
    }

}])