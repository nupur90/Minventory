var scotchApp = angular.module('scotchApp.customerCheque', ['ngRoute']);

    scotchApp.controller('customerChequeController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

        $scope.Services = "Accounting Customer Cheque Data";

        //var previousDate = new Date()
        //previousDate.setDate(previousDate.getDate() - 1)
        //var nextDate = new Date()
        //nextDate.setDate(nextDate.getDate() + 1)
        //var previousMonth = new Date()
        //previousMonth.setMonth(previousMonth.getMonth() - 1);
        //var nextMonth = new Date()
        //nextMonth.setMonth(nextMonth.getMonth() + 1);
        //var year = new Date()
        //year.setFullYear(year.getFullYear())
        //$scope.cdate = new Date();
        //$scope.pday = previousDate;
        //$scope.nday = nextDate;
        //$scope.pmonth = previousMonth;
        //$scope.nmonth = nextMonth;
        //$scope.cyear = year;

         

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.totalch = 0;
    $scope.ishide = true;
    var ptype = "Cheque"
    //code for GET
        $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
       .success(function (res) {
           $scope.totalch = 0;
           $scope.getCustomer = res;
           var cp = $scope.getCustomer;
           var count = cp.length;

           for (var i = 0; i < count; i++) {
               if (cp[i].Status == true)
                   $scope.totalch = ($scope.totalch) + cp[i].PaidAmount;


           }


       })

    // Code For Get data By duration 
    $scope.changePaymentDate = function (Duration) {

        var blank = "";
        var duration = Duration;
        // alert("shbshbx");
        $scope.selectDuration = $filter('date')(this.selectDuration, "yyyy-MM-dd-HH:mm:ss");
        var today = "Today";

        if (duration == today) {
            //today date
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            //  alert(this.copyDuration);
            $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
            .success(function (res) {
                // console.log(res);
                $scope.getCustomer = res;
            })
        }
        if (duration == "") {
            this.copyDuration = "";
            $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
            .success(function (res) {
                // console.log(res);
                $scope.getCustomer = res;
            })

        }
        if (duration == "LastMonths") {
            this.copyDuration = "";

            var date = "2015-12-18T00:00:00";
            $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentDate=' + date)
            .success(function (res) {
                // console.log(res);
                $scope.getCustomer = res;
            })

        }

    }

    //checked
    $scope.checkboxModel = {
        value1: true,
        value: true
    };

    $scope.checkbox = [
   {
       selected: false
   },
   {
       selected: false
   },
   {
       selected: false
   }
    ];

    //all checked
    $scope.Allchecked = function (chk) {

        angular.forEach($scope.checkbox, function (obj) {
            obj.selected = $scope.select;
        });

        if (chk == true) {

            var ID;
            var Customer_ID;
            var PaymentType;
            var ChequeNumber;
            var PaymentDate;
            var TotalAmount;
            var PaidAmount;
            var BalanceAmount;
            var IssueDate;
            var DepositeDate;
            var DepositeTo;
            var BankName;
            var Note;
            var ChequeStatus = "Cleared";
            var Status = true;
            $scope.arraySp = [];
            var cpdata;

            $http.get('http://localhost:3200/api/view_CustomerPayment?PaymentType=' + ptype)
                .success(function (res) {
                    // console.log(res);
                    $scope.getCustomerdt = res;
                     cpdata = $scope.getCustomerdt;
                    var count = cpdata.length;
                    console.log(cpdata);

                    for (var i = 0; i < count; i++) {
                        Id = cpdata[i].Id;

                        $scope.arraySp.push({
                            ID: cpdata[i].Id,
                            Customer_ID: cpdata[i].Customer_ID,
                            PaymentType: cpdata[i].PaymentType,
                            ChequeNumber: cpdata[i].ChequeNumber,
                            PaymentDate: cpdata[i].PaymentDate,
                            TotalAmount: cpdata[i].TotalAmount,
                            PaidAmount: cpdata[i].PaidAmount,
                            BalanceAmount: cpdata[i].BalanceAmount,
                            IssueDate: cpdata[i].IssueDate,
                            DepositeDate: cpdata[i].DepositeDate,
                            DepositeTo: cpdata[i].DepositeTo,
                            BankName: cpdata[i].BankName,
                            Note: cpdata[i].Note,
                            //ChequeStatus: customer.ChequeStatus,
                            // Status: cpdata[i].Status,
                        });

                    }
                })


            var Arrayspcopy = [];
            Arrayspcopy = $scope.arraySp;
            // console.log("dsuhu=" + $scope.arraySp);

            $scope.Clear = function () {

               
                var Sids = Arrayspcopy.length;
                var ChequeStatus = "Cleared";
                var Status = true;

                for (var i = 0; i < Sids; i++) {

                    var SpId = Arrayspcopy[i].ID;
                    //if (Arrayspcopy[i].Status == true) {
                        console.log("dcsnjnc=" + cpdata[i].BankName);

                        var request = $http({

                            method: "put",
                            url: "http://localhost:3200/api/CustomerPayments/" + SpId,
                            crossDomain: true,
                            data: {

                                Id: Arrayspcopy[i].ID,
                                Customer_ID: Arrayspcopy[i].Customer_ID,
                                PaymentType: Arrayspcopy[i].PaymentType,
                                ChequeNumber: Arrayspcopy[i].ChequeNumber,
                                PaymentDate: Arrayspcopy[i].PaymentDate,
                                TotalAmount: Arrayspcopy[i].TotalAmount,
                                PaidAmount: Arrayspcopy[i].PaidAmount,
                                BalanceAmount: Arrayspcopy[i].BalanceAmount,
                                IssueDate: Arrayspcopy[i].IssueDate,
                                DepositeDate: Arrayspcopy[i].DepositeDate,
                                DepositeTo: Arrayspcopy[i].DepositeTo,
                                BankName: Arrayspcopy[i].BankName,
                                Note: Arrayspcopy[i].Note,
                                ChequeStatus: ChequeStatus,
                                Status: Status

                            },
                            headers: { 'Content-Type': 'application/json' }
                        })
                           .success(function (responce) {

                               //alert('data added successfully');

                               $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
                                     .success(function (res) {
                                         $scope.totalch = 0;
                                         $scope.getCustomer = res;
                                         var sp = $scope.getCustomer;
                                         var count = sp.length;

                                         $scope.totalch = this.totalch;

                                     })



                           });
                  //  }




                }//for loop end

            }
        }//if end
    }

    // single checked
    var Sid = 0;
    $scope.CheckData = function (chk, data) {

        if (chk == true) {
            var d = data;
            //  alert(d.ChequeNumber);
            $scope.cpdata = [];
            $scope.chequeNo = d.ChequeNumber;
            var chkno = "'" + $scope.fd + "'";
            Sid = Sid + 1;
            //alert(v);
            var ID;
            var customer_ID;
            var PaymentType;
            var ChequeNumber;
            var PaymentDate;
            var TotalAmount;
            var PaidAmount;
            var BalanceAmount;
            var IssueDate;
            var DepositeDate;
            var DepositeTo;
            var BankName;
            var Note;
            var ChequeStatus;
            var Status = true;
            var customer;

            $http.get('http://localhost:3200/api/view_CustomerPayment?ChequeNumber=' + $scope.chequeNo)
                .success(function (res) {
                    // console.log(res);
                    $scope.getCustomerData = res;
                    customer = $scope.getCustomerData;
                    var count = customer.count;
                    console.log(customer);
                    // alert(count);
                    ChequeStatus = "Cleared";

                    $scope.cpdata.push({
                        ID: customer.Id,
                        customer_ID: customer.Customer_ID,
                        PaymentType: customer.PaymentType,
                        ChequeNumber: customer.ChequeNumber,
                        PaymentDate: customer.PaymentDate,
                        TotalAmount: customer.TotalAmount,
                        PaidAmount: customer.PaidAmount,
                        BalanceAmount: customer.BalanceAmount,
                        IssueDate: customer.IssueDate,
                        DepositeDate: customer.DepositeDate,
                        DepositeTo: customer.DepositeTo,
                        BankName: customer.BankName,
                        Note: customer.Note,
                        //ChequeStatus: customer.ChequeStatus,
                        //Status: customer.Status,
                    });



                });

        }

        var arraydata = [];
        arraydata = $scope.cpdata;
        console.log("$scope.cpdata=" + $scope.cpdata);
        var Sids = arraydata.length;
        console.log("count="+Sids);
        $scope.Clear = function () {


            var Sids = arraydata.length;
            alert(Sids);
            for (var i = 0; i < Sids; i++) {

                var SpId = arraydata[i].ID;
                alert("SpId=" + SpId);
                if (d.ChequeStatus != ChequeStatus) {
                    var request = $http({

                        method: "put",
                        url: "http://localhost:3200/api/CustomerPayments/" + SpId,
                        crossDomain: true,
                        data: {
                            Id: arraydata[i].ID,
                            Customer_ID: arraydata[i].customer_ID,
                            PaymentType: arraydata[i].PaymentType,
                            ChequeNumber: arraydata[i].ChequeNumber,
                            PaymentDate: arraydata[i].PaymentDate,
                            TotalAmount: arraydata[i].TotalAmount,
                            PaidAmount: arraydata[i].PaidAmount,
                            BalanceAmount: arraydata[i].BalanceAmount,
                            IssueDate: arraydata[i].IssueDate,
                            DepositeDate: arraydata[i].DepositeDate,
                            DepositeTo: arraydata[i].DepositeTo,
                            BankName: arraydata[i].BankName,
                            Note: arraydata[i].Note,
                            ChequeStatus: ChequeStatus,
                            Status: Status

                        },
                        headers: { 'Content-Type': 'application/json' }
                    })
                       .success(function (responce) {
                           $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
                                 .success(function (res) {
                                     $scope.totalch = 0;
                                     $scope.getCustomer = res;
                                     var sp = $scope.getCustomer;
                                     var count = sp.length;



                                 })
                           // alert('data added successfully');
                       });




                }
                else {
                    alert("Please Select Pending Cheques Only")
                }
            }//for loop end

        }



    }

    //delete
    $scope.deleteCheque = function (data) {
        var d = data;
        var amt = d.PaidAmount;
        var ID;
        var customer_ID;
        var PaymentType;
        var ChequeNumber;
        var PaymentDate;
        var TotalAmount;
        var PaidAmount;
        var BalanceAmount;
        var IssueDate;
        var DepositeDate;
        var DepositeTo;
        var BankName;
        var Note;
        var ChequeStatus;
        var Status = false;
        var customer;

        var chequeno = d.ChequeNumber;
        $http.get('http://localhost:3200/api/view_CustomerPayment?ChequeNumber=' + chequeno)
           .success(function (res) {
               // console.log(res);
               $scope.getCustomers = res;
               customer = $scope.getCustomers;

               ID = customer.Id;
               customer_ID = customer.Customer_ID;
               PaymentType = customer.PaymentType;
               ChequeNumber = customer.ChequeNumber;
               PaymentDate = customer.PaymentDate;
               TotalAmount = customer.TotalAmount;
               PaidAmount = customer.PaidAmount;
               BalanceAmount = customer.BalanceAmount;
               IssueDate = customer.IssueDate;
               DepositeDate = customer.DepositeDate;
               DepositeTo = customer.DepositeTo;
               BankName = customer.BankName;
               Note = customer.Note;
               ChequeStatus = customer.ChequeStatus;


               var request = $http({

                   method: "put",
                   url: "http://localhost:3200/api/customerPayments/" + ID,
                   crossDomain: true,
                   data: {
                       Id: ID,
                       customer_ID: customer_ID,
                       PaymentType: PaymentType,
                       ChequeNumber: ChequeNumber,
                       PaymentDate: PaymentDate,
                       TotalAmount: TotalAmount,
                       PaidAmount: PaidAmount,
                       BalanceAmount: BalanceAmount,
                       IssueDate: IssueDate,
                       DepositeDate: DepositeDate,
                       DepositeTo: DepositeTo,
                       BankName: BankName,
                       Note: Note,
                       ChequeStatus: ChequeStatus,
                       Status: Status

                   },
                   headers: { 'Content-Type': 'application/json' }
               })
                       .success(function (responce) {
                           $http.get('http://localhost:3200/api/view_CustomerCheque?PaymentType=' + ptype)
                                 .success(function (res) {
                                     $scope.totalch = 0;
                                     $scope.getCustomer = res;
                                     var sp = $scope.getCustomer;
                                     var count = sp.length;

                                     for (var i = 0; i < count; i++) {

                                         $scope.totalch = ($scope.totalch) + sp[i].PaidAmount;

                                     }
                                     $scope.totalch = this.totalch - PaidAmount;

                                 })
                       });

           })

    }



});//last