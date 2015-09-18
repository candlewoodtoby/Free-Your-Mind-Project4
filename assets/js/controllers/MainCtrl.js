


myFymApp.controller('MainCtrl',['$scope','$http', function($scope, $http){
  console.log('MainCtrl.js working!');

  $scope.date = new Date();
  $scope.errorMsg = false;

  $scope.commitmentText = "";
  $scope.commitmentArray = [];

  $scope.actionText = "";
  $scope.actionArray = [];

  // $scope.delegateName = [];



  // $scope.currentCommitmentIdx = null;
  // $scope.currentCommitment = null;
  // $scope.currentCommitmentActionable = null;
  // $scope.currentCommitmentTrash = null;
  // $scope.currentCommitmentSomeday = null;
  // $scope.currentCommitmentReference = null;
  // $scope.currentCommitmentLessThanTwo = null;
  // $scope.currentCommitmentDoItNow = null;
  // $scope.currentCommitmentDoItLater = null;
  // $scope.currentCommitmentDoItWhenever = null;
  // $scope.currentCommitmentDelegate = null;
  // $scope.currentCommitmentDelegateName = null;
  // $scope.currentCommitmentCalendar = null;
  // $scope.currentCommitmentCompleted = null;
  // $scope.currentCommitmentUserId = null;
  // $scope.currentCommitmentNextAction = null;
  // $scope.currentAction = null;
  // $scope.currentActionIdx = null;


  $scope.addCommitment = function(){
    if($scope.commitmentText.length >0){
      $scope.errorMsg = false;
      $scope.commitmentArray.push({
        description:  $scope.commitmentText,
        actionable:   $scope.currentCommitmentActionable,
        trash:        $scope.currentCommitmentTrash,
        someday:      $scope.currentCommitmentSomeday,
        reference:    $scope.currentCommitmentReference,
        lessThanTwo:  $scope.currentCommitmentLessThanTwo,
        doItNow:      $scope.currentCommitmentDoItNow,
        doItLater:    $scope.currentCommitmentDoItLater,
        doItWhenever: $scope.currentCommitmentDoItWhenever,
        delegate:     $scope.currentCommitmentDelegate,
        delegateName: $scope.delegateName,
        calendar:     $scope.currentCommitmentCalendar,
        completed:    $scope.currentCommitmentCompleted,
        userId:       $scope.currentUser.id,
        actionArray:  $scope.actionArray,
        completed:false
      });
      $scope.commitmentText = "";
      console.log($scope.commitmentArray);
    } else {
      $scope.errorMsg = "You must enter a Commitment!";
    }
  }

  $scope.removeCommitment = function(idx){
    $scope.commitmentArray.splice(idx,1);
  }

  $scope.processCommitment = function(idx, currentCommitment){

    console.log(idx)
    console.log(currentCommitment.description)

    $scope.currentCommitment = currentCommitment;
    $scope.currentCommitmentIdx = idx;

    // clear data
    $scope.currentCommitmentActionable=null;
    $scope.currentCommitmentLessThanTwo=null;
    $scope.currentCommitmentDoItLater=null;

  }

  $scope.addAction = function(){
    if($scope.actionText.length>0){
      $scope.errorMsg = false;
      $scope.actionArray.push({
        description:$scope.actionText,
        completed:false
      });
      $scope.actionText = "";
    } else {
      $scope.errorMsg = "You must enter an Action!";
    }
  }

  $scope.isItActionable = function(idx, currentAction){

    console.log(idx)
    console.log(currentAction.description)

    $scope.currentAction = currentAction;
    $scope.currentActionIdx = idx;

  }

  $scope.removeAction = function(idx){
    $scope.actionArray.splice(idx,1);
  }

  $scope.addName = function(){
    $scope.delegateName = $scope.currentCommitmentDelegateName;
    console.log($scope.delegateName);
  }




  $scope.submit = function(){
    // console.log('This Button Works!');
        $http({
          method: 'POST',
          url: '/api/commitment/',
          data: {
            description:  $scope.commitmentArray[$scope.currentCommitmentIdx].description,
            actionable:   $scope.currentCommitmentActionable,
            trash:        $scope.currentCommitmentTrash,
            someday:      $scope.currentCommitmentSomeday,
            reference:    $scope.currentCommitmentReference,
            lessThanTwo:  $scope.currentCommitmentLessThanTwo,
            doItNow:      $scope.currentCommitmentDoItNow,
            doItLater:    $scope.currentCommitmentDoItLater,
            doItWhenever: $scope.currentCommitmentDoItWhenever,
            delegate:     $scope.currentCommitmentDelegate,
            delegateName: $scope.delegateName,
            calendar:     $scope.currentCommitmentCalendar,
            completed:    $scope.currentCommitmentCompleted,
            userId:       $scope.currentUser.id
          }
        }).then(function(commitment){
          console.log(commitment);
        })
  }




  $scope.Test = function (){
        console.log('description:',  $scope.commitmentArray[$scope.currentCommitmentIdx].description);
        console.log('actionable:',   $scope.currentCommitmentActionable);
        console.log('trash:',        $scope.currentCommitmentTrash);
        console.log('someday:',      $scope.currentCommitmentSomeday);
        console.log('reference:',    $scope.currentCommitmentReference);
        console.log('lessThanTwo:',  $scope.currentCommitmentLessThanTwo);
        console.log('doItNow:',      $scope.currentCommitmentDoItNow);
        console.log('doItLater:',    $scope.currentCommitmentDoItLater);
        console.log('doItWhenever:', $scope.currentCommitmentDoItWhenever);
        console.log('delegate:',     $scope.currentCommitmentDelegate);
        console.log('delegateName:', $scope.currentCommitmentDelegateName);
        console.log('calendar:',     $scope.currentCommitmentCalendar);
        console.log('completed:',    $scope.currentCommitmentCompleted);
        console.log('userId:',       $scope.currentUser.id);
        console.log('actionArray:',  $scope.actionArray)
  }





}])