var scotchApp = angular.module('scotchApp.supplierPayment', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('suppilerPaymentController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Ishide = true;
  
    //code for GET
    $http.get('http://localhost:3200/api/View_Supplier_PurcchaseIvoice_SupplierPayment')
       .success(function (res) {
         
           $scope.getSupplierPayment = res;
           
           
           var date="2015-12-07T00:00:00";
           

           $scope.month = $filter('date')(date, 'MM');//December-November like
           
           $scope.day = $filter('date')(date, 'dd'); //01-31 like
           $scope.year = $filter('date')(date, 'yyyy');//2014 like

           $scope.nextYear = Number($scope.year) + 1;
           $scope.prevYear = Number($scope.year) - 1;
       })

    //table payment date
    $scope.changePaymentDatetable = function () {

        
        // $scope.paymentDate.PaymentDate = $filter('date')(this.selectDuration, "dd-MM-yyyy");
        alert(this.paymentDate.PaymentDate);
    }

    $scope.changePaymentDate = function (Duration) {

        var duration = Duration;
        $scope.selectDuration = $filter('date')(this.selectDuration, "yyyy-MM-dd-HH:mm:ss");
        var today = "Today";
        var lastWeek = "LastWeek";
        var last15days = "Last15Day";
        var lasMonth = "LastMonths";
        var last3months = "Last3Months";
        var last6months = "Last6Months";
        var lastyear = "LastYear";


        if (Duration == today) {
            //today date
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            
            $http.get('http://localhost:3200/api/View_Supplier_PurcchaseIvoice_SupplierPayment')
            .success(function (res) {
             // console.log(res);
                $scope.getSupplierPayment = res;
             })
         }
    }

});
