angular.module('attendanceApp').controller('loginCtrl',submit);
function submit($scope,$state,$http,localStorageService){
    $scope.logIn = function(){
        var credentials = {
            mobile: $scope.mobile
        };
        localStorageService.set('mobile', $scope.mobile);
        console.log(localStorageService.get('mobile'));
        var data = credentials;
        $http.post('http://funduhr-backend.herokuapp.com/otp/',data).success(function(response,status){
             console.log(data);
            if(response.error){
                alert('Number does not exist');
                $state.go('Login');
            }else {
                console.log(response);
                console.log(response.data);
                $state.go('OTP')
            }
        }).catch(function(response){
            $scope.loading = false;
            alert('Sorry!! something went wrong....');
        })
    };
}
// loginService.postMobile(data).then(function(response){
//     console.log('inside login controller');
//     console.log(data);
//     if(response.error && status==200){
//         alert('Number does not exist');
//         $state.go('Login');
//     }else if(response.data){
//         console.log(response);
//         console.log(response.data);
//         $state.go('OTP')
//     }else{
//         alert('Sorry!! something went wrong....');
//         console.log('Server Problem');
//     }
// });