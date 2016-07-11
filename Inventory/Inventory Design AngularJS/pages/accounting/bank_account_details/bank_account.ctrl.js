var scotchApp = angular.module('scotchApp.bankAccountDetails', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('bankAccountDetailsController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Bank Account Details Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    $scope.btnsave = true;
    $scope.btnupdate = false;

    //code for GET
    $http.get('http://localhost:3200/api/View_Banks')
       .success(function (res) {
           //$scope.parentCategory = false;

           $scope.getBank = res;
           var bank = JSON.stringify($scope.getBank);
           console.log(" $scope.getBank=" + bank);
       })

    //code for GET
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

    //code for save bank account
    $scope.saveBankAccount = function () {

        var AccountNumber = this.accountNumber;
        var AccountName = this.accountName;
        var Bank = this.bank;
        var Status = true;
        var OrganisationId = null;

 

        //condition will check if user has left any field vacant
        if (AccountNumber == null || AccountName == null || Bank == null) {
            alert("fill the info");
            return;
        }
        else {
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/BankAccounts",
                crossDomain: true,
                data: {
                    AccountNumber: AccountNumber,
                    AccountName: AccountName,
                    Bank: Bank,
                    Organisation_ID: OrganisationId,
                    Status: Status
                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('Data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/View_Bank_Accounts')
                        .success(function (res) {
                            
                            $scope.getBankAccounts = res;

                        })

             })
            
            this.accountNumber = null;
            this.accountName = null
            this.bank = null;
            this.id = null;

            $scope.btnsave = true;
            $scope.btnupdate = false;
            $scope.signup1.$setPristine();

        }
    }//end save

    //edit bank
    $scope.editBankAcc = function () {

        var BankAcc_Id = this.id;

        $http.get('http://localhost:3200/api/BankAccounts/' + BankAcc_Id)
     .success(function (res) {

         console.log(res);
         $scope.pushTextBankAcc = res;


         var pushTextBankAcc = $scope.pushTextBankAcc;
         $scope.id = pushTextBankAcc.Id;
         $scope.accountNumber = pushTextBankAcc.AccountNumber;
         $scope.accountName = pushTextBankAcc.AccountName;
         $scope.bank = pushTextBankAcc.Bank;
         $scope.status = pushTextBankAcc.Status;

         $scope.btnsave = false;
         $scope.btnupdate = true;
     })
    }


    //update bank
    $scope.updateBankAccount = function () {
    
        var bankAcc_Id = this.id;
        var AccountNumber = this.accountNumber;
        var AccountName = this.accountName;
        var Bank = this.bank;
        var Status = true;
        var OrganisationId = null;

        //condition will check if user has left any field vacant
        if (AccountNumber == null || AccountName == null || Bank == null) {
            alert("fill the info");
            return;
        }
        else {
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/BankAccounts/" + bankAcc_Id,
            crossDomain: true,
            data: {
                Id: bankAcc_Id,
                AccountNumber: AccountNumber,
                AccountName: AccountName,
                Bank: Bank,
                Organisation_ID: OrganisationId,
                Status: Status
            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {

             alert('data updated successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/View_Bank_Accounts')
                 .success(function (res) {
                     var x = res.length;
                     $scope.x = x;
                     //console.log(res);
                     $scope.getBankAccounts = res;

                     $scope.btnsave = true;
                     $scope.btnupdate = false;
                     $scope.signup1.$setPristine();
                 });
         })
    }
        this.accountNumber = "";
        this.accountName = "";
        this.bank = "";
        this.id = "";
        this.status = "";

        $scope.btnsave = true;
        $scope.btnupdate = false;
         $scope.signup1.$setPristine();
    };

    //delete bank
    $scope.deleteBankAcc = function () {
        var bankAcc_Id = this.id;


        $http.get('http://localhost:3200/api/View_Bank_Accounts/' + bankAcc_Id)
     .success(function (res) {
         console.log(res);
         $scope.getBankAccountss = res;


         var getBanksAcc1 = $scope.getBankAccountss;

         var bankAcc_Id = getBanksAcc1.Id;
         var AccountNumber = getBanksAcc1.AccountNumber;
         var AccountName = getBanksAcc1.AccountName;
         var Bank = getBanksAcc1.Bank;
         var OrganisationId = null;
         var status = false;

        

         var request = $http({
             //method: "delete",
             method: "put",
             url: "http://localhost:3200/api/BankAccounts/" + bankAcc_Id,
             crossDomain: true,
             data: {
                 Id: bankAcc_Id,
                 AccountNumber: AccountNumber,
                 AccountName: AccountName,
                 Bank: Bank,
                 Organisation_ID: OrganisationId,
                 Status: status
             },
             headers: { 'Content-Type': 'application/json' }
         })
         .success(function (responce) {

             alert('Data Deleted Successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/View_Bank_Accounts')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
                //console.log(res);
                $scope.getBankAccounts = res;
            });
             $scope.btnsave = true;
             $scope.btnupdate = false;
         })
     })
    }


    //cancel and new
    $scope.cancelAndNew = function () {

        this.accountNumber = "";
        this.accountName = "";
        this.bank = "";
        this.id = "";
        this.status = "";
        $scope.btnsave = true;
        $scope.btnupdate = false;

        $scope.signup1.$setPristine();

        $http.get('http://localhost:3200/api/View_Bank_Accounts')
      .success(function (res) {
         // console.log(res);
          $scope.getBankAccounts = res;
      });

    }
});//last