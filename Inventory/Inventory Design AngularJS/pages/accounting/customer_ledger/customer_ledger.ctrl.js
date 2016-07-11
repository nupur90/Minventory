var scotchApp = angular.module('scotchApp.customerLedger', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('customerLedgerController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Customer Ledger Data";

    //Get customer name
    $http.get('http://localhost:3200/api/customer_view')
      .success(function (res) {
          //console.log(res);
          $scope.getCustomers = res;

      });


    //get customer 

    $scope.custid = function (CustomerName) {
        cust_id = CustomerName;
        //alert(cust_id);

        $scope.Customercontactno = null;
        $scope.paymentDate = null;
        $scope.note = null; 
        $scope.paidAmount = null;
        $scope.balanceAmount = null;
        $scope.balanceAmount1 = null;
        $scope.currentBalance = null;
        $scope.totalCreditBalance = null;
        $scope.totalDebitBalance = null;
        $scope.totalBalance = null;

        //$http.get('http://localhost:3200/api/view_customerpayment/' + cust_id +"?paymentType=Cash")
        $http.get('http://localhost:3200/api/view_customerpayment/' + cust_id )
       .success(function (res) {
           // console.log(res);
           $scope.getCustomerscitycnoasa1 = res;
           var cust = $scope.getCustomerscitycnoasa1;

           var count = res.length;
           var currntBal = 0;
           var creditBal = 0;
           var debitBal = 0;
           var totalBal = 0;
           $scope.customerPaymentTable = [];
           var paymentDate = 0;
           var note = 0;
           var paidAmount = 0;
           var creditBalanceAmount = 0;
           var balanceamount = 0;
           var paymentDate1 = 0;
          // alert(count);
           if (count > 0) {
               for (var i = 0; i <= count; i++) {
                   
                   $scope.customerPaymentTable.push({
                       paymentDate1: $filter('date')(cust[i].PaymentDate, "dd-MM-yyyy"),
                       note: cust[i].Note,
                       paidAmount: cust[i].PaidAmount,
                       creditBalanceAmount: cust[i].BalanceAmount,
                       balanceamount: cust[i].BalanceAmount,


                   })
                   currntBal = currntBal + cust[i].BalanceAmount;
                   $scope.currentBalance = currntBal;

                   creditBal = creditBal + cust[i].PaidAmount;
                   $scope.totalCreditBalance = creditBal;

                   debitBal = debitBal + cust[i].BalanceAmount;
                   $scope.totalDebitBalance = debitBal;

                   totalBal = totalBal + cust[i].BalanceAmount;
                   $scope.totalBalance = totalBal;

                   $scope.Customercontactno = cust[i].ContactNumber;


               }
           }



       })
    }








});//last