var scotchApp = angular.module('scotchApp.supplierLedger', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('supplierLedgerController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting supplier ledger Data";


    //Get View_Supplier_PurcchaseIvoice_SupplierPayment
    $http.get('http://localhost:3200/api/Supplier_View')
   .success(function (res) {
       $scope.getSuppliers = res;
   });

    
    //get customer 

    $scope.custid = function (SupplierName) {
        supplier_id = SupplierName;
      //  alert(supplier_id);

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

        $http.get('http://localhost:3200/api/View_Supplier_Ledger/' + supplier_id)
   .success(function (res) {
       // console.log(res);
       $scope.getSuppliersRecords = res;
       var Supplier = $scope.getSuppliersRecords;
      // alert(supplier_id);
       var count = res.length;
       var currntBal = 0;
       var creditBal = 0;
       var debitBal = 0;
       var totalBal = 0;

       $scope.SupplierPaymentTable = [];
       var paymentDate = 0;
       var note = 0;
       var paidAmount = 0;
       var creditBalanceAmount = 0;
       var balanceamount = 0;
       var paymentDate1 = 0;

      // alert(count);
       if (count >0) { 
           for (var i = 0; i <= count; i++) {
               //  alert(i);
               $scope.SupplierPaymentTable.push({
                   paymentDate1: $filter('date')(Supplier[i].PaymentDate, "dd-MM-yyyy"),
                   note: Supplier[i].Note,
                   paidAmount: Supplier[i].PaidAmount,
                   creditBalanceAmount: Supplier[i].BalanceAmount,
                   balanceamount: Supplier[i].BalanceAmount,


               })
               //$scope.currentBalance
               currntBal = currntBal + Supplier[i].BalanceAmount;
               $scope.currentBalance = currntBal;

               creditBal = creditBal + Supplier[i].PaidAmount;
               $scope.totalCreditBalance = creditBal;

               debitBal = debitBal + Supplier[i].BalanceAmount;
               $scope.totalDebitBalance = debitBal;

               totalBal = totalBal + Supplier[i].BalanceAmount;
               $scope.totalBalance = totalBal;

               $scope.suppliercontactno = Supplier[i].ContactNumber;
           }
       }
      

          
   })
}







});//last