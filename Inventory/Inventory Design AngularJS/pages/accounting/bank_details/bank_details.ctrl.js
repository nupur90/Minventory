var scotchApp = angular.module('scotchApp.bankDetails', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('bankDetailsController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Bank Details Data";



    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    $scope.btnsave = true;
    //code for GET
    $http.get('http://localhost:3200/api/View_Banks')
       .success(function (res) {
           //$scope.parentCategory = false;

           $scope.getBank = res;
           var bank = JSON.stringify($scope.getBank);
          // console.log(" $scope.getBank=" + bank);
       })


    //CODE Post bank
    $scope.saveBank = function () {

        var BankName = this.bankName;
        var Branch = this.branch;
        var IFSCcode = this.IFSCcode;
        var status = true;

        //condition will check if user has left any field vacant
        if (BankName == null || Branch == null || IFSCcode == null) {
            alert("fill the info");
            return;
        }
        else {
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Banks",
                crossDomain: true,
                data: {
                    BankName: BankName,
                    IFSCCode: IFSCcode,
                    Branch: Branch,
                    Status: status
                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('Bank added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/view_Banks')
                        .success(function (res) {
                            var x = res.length;
                            $scope.x = x;
                            // console.log(res);
                            $scope.getBank = res;

                        })
                
                
             })
          

           

        }

        //this.id = "";
        this.bankName = null;
        this.branch = "";
        this.IFSCcode = "";
        this.status = "";

        $scope.btnsave = true;
        $scope.btnupdate = false;
        $scope.signup1.$setPristine();
       }//end save


    //edit bank
       $scope.editBank = function () {

           var Bank_Id = this.id;

           $http.get('http://localhost:3200/api/Banks/' + Bank_Id)
        .success(function (res) {
           
            console.log(res);
            $scope.pushTextBank = res;


            var pushTextBanks = $scope.pushTextBank;
            $scope.id = pushTextBanks.Id;
            $scope.bankName = pushTextBanks.BankName;
            $scope.IFSCcode = pushTextBanks.IFSCCode;
            $scope.branch = pushTextBanks.Branch;
            $scope.status = pushTextBanks.Status;
            $scope.btnsave = false;
            $scope.btnupdate = true;
        })
       }

    //update bank
       $scope.updateBank = function () {

         
           var bank_Id =parseInt(this.id);
           var BankName = this.bankName;
           var Branch = this.branch;
           var IFSCcode = this.IFSCcode;
           var status = true;
          

           //condition will check if user has left any field vacant
           if (BankName == null || Branch == null || IFSCcode == null) {
               alert("fill the info");
               return;
           }
           else {




               var request = $http({
                   method: "put",
                   url: "http://localhost:3200/api/Banks/" + bank_Id,
                   crossDomain: true,
                   data: {
                       Id: bank_Id,
                       BankName: BankName,
                       IFSCCode: IFSCcode,
                       Branch: Branch,
                       Status: status
                   },
                   headers: { 'Content-Type': 'application/json' }
               })
                .success(function (responce) {

                    alert('data updated successfully...');
                    //further code will refresh the current database data on page
                    $http.get('http://localhost:3200/api/View_Banks')
                        .success(function (res) {
                            var x = res.length;
                            $scope.x = x;
                            //console.log(res);
                            $scope.getBank = res;

                            $scope.btnsave = true;
                            $scope.btnupdate = false;
                        });
                })
           }

           //this.id = "";
           this.bankName = null;
           this.branch = null;
           this.IFSCcode = null;
           this.status = null;

           $scope.signup1.$setPristine();
       };

    //delete bank
       $scope.deleteBank = function () {
           var bank_Id = this.id;


           $http.get('http://localhost:3200/api/View_Banks/' + bank_Id)
        .success(function (res) {
            console.log(res);
            $scope.getbanks = res;


            var getBanks = $scope.getbanks;

            var BankName = getBanks.BankName;
            var Branch = getBanks.Branch;
            var IFSCcode = getBanks.IFSCCode;
            var status = false;

            var request = $http({
                //method: "delete",
                method: "put",
                url: "http://localhost:3200/api/Banks/" + bank_Id,
                crossDomain: true,
                data: {
                    Id:bank_Id,
                   BankName: BankName,
                    IFSCCode: IFSCcode,
                    Branch: Branch,
                    Status: status
                },
                headers: { 'Content-Type': 'application/json' }
            })
            .success(function (responce) {

                alert('Data Deleted Successfully...');
                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_Banks')
               .success(function (res) {
                   var x = res.length;
                   $scope.x = x;
                   //console.log(res);
                   $scope.getBank = res;
               });
            })
        })
       }

    //cancel and new
       $scope.cancelAndNew = function () {

           this.id = "";
          this.bankName="";
           this.branch="";
           this.IFSCcode="";
           this.status = "";
           $scope.btnsave = true;
           $scope.btnupdate = false;

           $scope.signup1.$setPristine();

           $http.get('http://localhost:3200/api/units')
         .success(function (res) {
             console.log(res);
             $scope.getUnits = res;
         });

       }

    });//    last





