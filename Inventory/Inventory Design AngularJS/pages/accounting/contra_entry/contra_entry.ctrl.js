var scotchApp = angular.module('scotchApp.contraEntry', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('contraEntryController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Contra Entry Data";

    //$scope.PaymentDate = $filter('date')(new Date(), 'dd-MM-yyyy');

    // GET Account
    $http.get('http://localhost:3200/api/View_Bank_Accounts')
       .success(function (res) {
           // console.log(res);
           $scope.getBankAccounts = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })
        
    //Code For Cancel btn
    $scope.cancelAndNew = function () {
        $scope.notes = "";
        $scope.ammount = "";
        this.selectfromcash = "";
        this.selecttobank = "";
        this.selectfrombank = "";
        this.selecttocash = "";

    }

    //Code for post
    $scope.transfer = function () {

        var paymentdate = this.PaymentDate;
        var amount = this.ammount;
        var note = this.notes;
        
       // alert(this.notes);
        var selectfromcash =String(this.selectfromcash);
        var selecttobank =String(this.selecttobank);
       
        var selectfrombank = String(this.selectfrombank);
        var selecttocash = String(this.selecttocash);
       
            if (paymentdate == null || amount == null) {
                alert("fill the info");
                return;
            }
            else {
                var request = $http({
                    method: "post",
                    url: "http://localhost:3200/api/ContraEntries",
                    crossDomain: true,
                    data: {
                            PaymentDate: paymentdate,
                            From:paymentdate,
                            To: paymentdate,
                            FromCashAccount: selectfromcash,
                            FromBankAccount:selectfrombank,
                            ToCashAccount: selecttocash,
                            ToBankAccount:selecttobank,
                            Amount:amount,
                            Note:note
                    },
                    headers: { 'Content-Type': 'application/json' }
                })
                 .success(function (responce) {
                     alert('Data Transfer successfully');
                     $scope.notes = "";
                     $scope.ammount = "";
                     $scope.selectfromcash = "";
                     $scope.selecttobank = "";
                     $scope.selectfrombank = "";
                     $scope.selecttocash = "";


                 })
            }
    }

});//last