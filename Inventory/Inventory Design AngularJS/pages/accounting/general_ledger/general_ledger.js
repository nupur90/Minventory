var scotchApp = angular.module('scotchApp.generalLedger', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('generalLedgerController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting General ledger Data";



    //Get customer name
    //$http.get('http://localhost:3200/api/view_customerpayment/')
    //  .success(function (res) {
    //      //console.log(res);
    //      $scope.getLedger = res;
    //      var ledger=$scope.getLedger;
    //      var count = res.length;
    //      var pd;
    //      var n;
    //      var d;
    //      var c;
    //      var b;
    //      alert(count); 
    //      $scope.temp = [];


    //      var cash="Cash";
    //      for (var i = 0; i <= count; i++) {
    //          if (ledger[i].PaymentType == cash)
    //          {


    //              $scope.temp.push({
    //                  pd:ledger[i].PaymentDate,
    //                  n: ledger[i].Note,
    //                  d:ledger[i].PaidAmount,
    //                  c: ledger[i].BalanceAmount,
    //                  b: ledger[i].BalanceAmount
    //              });
    //          }

    //      }

    //  });

    //for cash
    var currntBal = 0;
    var creditBal = 0;
    var debitBal = 0;
    var totalBal = 0;

    //for bank 
    var bankCreditBal = 0;
    var bankDebitBal = 0;
    var bankTotalBal = 0;


    var pd;
    var n;
    var d;
    var c;
    var b;
    // alert(count);
    $scope.getCashAccountLedger = [];
    $scope.getBankAccountLedger = [];


    $scope.CustomerForCashBalance = function () {

        $scope.allStatement = false;
        // $scope.ClearField();

    }
    //Show Customer records
    $scope.ShowCustomerRecordsForCashAndBankbalance = function () {
        var customer = $scope.customer;
        var allStatementRecord = $scope.allStatement;
        if (customer == true || allStatementRecord == true) {
            // alert(customer);

            //Get Customer from payment Type =cash 
            $http.get('http://localhost:3200/api/view_customerpayment?paymenttype=cash')
     .success(function (res) {
         //console.log(res);
         $scope.getLedger = res;
         var ledger = $scope.getLedger;
         var count = res.length;


         for (var i = 0; i <= count; i++) {
             $scope.getCashAccountLedger.push({
                 pd: ledger[i].PaymentDate,
                 n: ledger[i].Note,
                 d: ledger[i].PaidAmount,
                 c: ledger[i].BalanceAmount,
                 b: ledger[i].BalanceAmount
             });
             //currntBal = currntBal + ledger[i].BalanceAmount;
             //$scope.currentBalance = currntBal;

             creditBal = creditBal + ledger[i].PaidAmount;
             $scope.totalCreditBalance = creditBal;

             debitBal = debitBal + ledger[i].BalanceAmount;
             $scope.totalDebitBalance = debitBal;

             totalBal = totalBal + ledger[i].BalanceAmount;
             $scope.totalBalance = totalBal;
             $scope.totalCashInHand = $scope.totalBalance;
             
         }

     });
            //Get Customer from payment Type =Cheque 
            $http.get('http://localhost:3200/api/view_customerpayment?paymenttype=Cheque')
     .success(function (res) {
         //console.log(res);
         $scope.getLedger = res;
         var ledger = $scope.getLedger;
         var count = res.length;


         for (var i = 0; i <= count; i++) {
             $scope.getBankAccountLedger.push({
                 pd: ledger[i].PaymentDate,
                 n: ledger[i].Note,
                 d: ledger[i].PaidAmount,
                 c: ledger[i].BalanceAmount,
                 b: ledger[i].BalanceAmount
             });
             //currntBal = currntBal + ledger[i].BalanceAmount;
             //$scope.currentBalance = currntBal;

             bankCreditBal = bankCreditBal + ledger[i].PaidAmount;
             $scope.bankTotalCreditBalance = bankCreditBal;

             bankDebitBal = bankDebitBal + ledger[i].BalanceAmount;
             $scope.bankTotalDebitBalance = bankDebitBal;

             bankTotalBal = bankTotalBal + ledger[i].BalanceAmount;
             $scope.bankTotalBalance = bankTotalBal;

             $scope.totalAmountInAccount = $scope.bankTotalBalance;
         }

     });

        }
        else {

            $scope.ClearField();
        }
    }

    $scope.getContraEntry = function () {
        $scope.allStatement = false;
    }
    //Show Contra Entry Record
    $scope.ShowContraEntryRecords = function () {

        var contraEntry = $scope.contraEntry;
        var allStatementRecord = $scope.allStatement;

        if (contraEntry == true || allStatementRecord == true) {
            // alert(customer);

            //Get Customer from payment Type =cash 
            $http.get('http://localhost:3200/api/contraentries')
     .success(function (res) {
         //console.log(res);
         $scope.getLedger = res;
         var ledger = $scope.getLedger;
         var count = res.length;


         for (var i = 0; i <= count; i++) {
             $scope.getCashAccountLedger.push({
                 pd: ledger[i].PaymentDate,
                 n: ledger[i].Note,
                 d: ledger[i].Amount,
                 c: 0,
                 b: 0
             });
             //currntBal = currntBal + ledger[i].BalanceAmount;
             //$scope.currentBalance = currntBal;

             creditBal = creditBal + ledger[i].Amount;
             $scope.totalCreditBalance = creditBal;

             debitBal = debitBal + 0;
             $scope.totalDebitBalance = debitBal;

             totalBal = totalBal + 0;
             $scope.totalBalance = totalBal;
             $scope.totalCashInHand = $scope.totalBalance;

         }

     });
        }
    }

        $scope.ClearField = function () {

            $scope.getCashAccountLedger = [];
            //  $scope.currentBalance = null;
            $scope.totalCreditBalance = null;
            $scope.totalDebitBalance = null;
            $scope.totalBalance = null;

            currntBal = 0;
            creditBal = 0;
            debitBal = 0;
            totalBal = 0;

            //for bank 
            bankCreditBal = 0;
            bankDebitBal = 0;
            bankTotalBal = 0;

            $scope.getBankAccountLedger = [];
            //  $scope.currentBalance = null;
            $scope.bankTotalCreditBalance = null;
            $scope.bankTotalDebitBalance = null;
            $scope.bankTotalBalance = null;
            $scope.totalCashInHand = null;
            $scope.totalAmountInAccount = null;
        }

        $scope.SupplierForLedgetBalance = function () {

            $scope.allStatement = false;
            // $scope.ClearField();
            // alert('in supplier');

        }
        //Show Supplier Records
        $scope.ShowSupplierRecordsforCashAndBankBalance = function () {
            // alert('Supplier:');
            var supplier = $scope.supplier;

            // alert('Supplier:' +supplier);
            var allStatementRecord = $scope.allStatement;
            if (supplier == true || allStatementRecord == true) {
                //alert(supplier);

                //Get Supplier for payment Type =cash 
                $http.get('http://localhost:3200/api/View_Supplier_Ledger?payemntType=Cash')
         .success(function (res) {
             //console.log(res);
             $scope.getLedger = res;
             var ledger = $scope.getLedger;
             var count = res.length;


             for (var i = 0; i <= count; i++) {
                 $scope.getCashAccountLedger.push({
                     pd: ledger[i].PaymentDate,
                     n: ledger[i].Note,
                     d: ledger[i].PaidAmount,
                     c: ledger[i].BalanceAmount,
                     b: ledger[i].BalanceAmount
                 });
                 //currntBal = currntBal + ledger[i].BalanceAmount;
                 //$scope.currentBalance = currntBal;

                 creditBal = creditBal + ledger[i].PaidAmount;
                 $scope.totalCreditBalance = creditBal;

                 debitBal = debitBal + ledger[i].BalanceAmount;
                 $scope.totalDebitBalance = debitBal;

                 totalBal = totalBal + ledger[i].BalanceAmount;
                 $scope.totalBalance = totalBal;
                 $scope.totalCashInHand = $scope.totalBalance;

             }
             // alert('supplier cash');
         });

                //Get Customer from payment Type =Cheque 
                $http.get('http://localhost:3200/api/View_Supplier_Ledger?payemntType=Cheque')
         .success(function (res) {
             //console.log(res);
             $scope.getLedger = res;
             var ledger = $scope.getLedger;
             var count = res.length;


             for (var i = 0; i <= count; i++) {
                 $scope.getBankAccountLedger.push({
                     pd: ledger[i].PaymentDate,
                     n: ledger[i].Note,
                     d: ledger[i].PaidAmount,
                     c: ledger[i].BalanceAmount,
                     b: ledger[i].BalanceAmount
                 });
                 //currntBal = currntBal + ledger[i].BalanceAmount;
                 //$scope.currentBalance = currntBal;

                 bankCreditBal = bankCreditBal + ledger[i].PaidAmount;
                 $scope.bankTotalCreditBalance = bankCreditBal;

                 bankDebitBal = bankDebitBal + ledger[i].BalanceAmount;
                 $scope.bankTotalDebitBalance = bankDebitBal;

                 bankTotalBal = bankTotalBal + ledger[i].BalanceAmount;
                 $scope.bankTotalBalance = bankTotalBal;
                 $scope.totalAmountInAccount = $scope.bankTotalBalance;

             }
             // alert('supplier Bank');
         });

            }
            else {
                $scope.ClearField();
                //if ($scope.customer == true) {
                //    //alert($scope.customer);
                //    $scope.ClearField();
                //    //$scope.CustomerForCashBalance();

                //    //alert('else suppler...');
                //}
            }



        }


        $scope.GetAllExpenses = function () {
            $scope.allStatement = false;
        }
        //Show Expenses Records
        $scope.ShowExpensesRecords = function () {
            var allStatementRecord = $scope.allStatement;
            var allExpenses = $scope.allExpenses;


            if (allExpenses == true || allStatementRecord == true) {
                $http.get('http://localhost:3200/api/Expens')
         .success(function (res) {
             // console.log(res);
             $scope.getExpens = res;
             var ledger = $scope.getExpens;
             var count = res.length;


             for (var i = 0; i <= count; i++) {
                 $scope.getCashAccountLedger.push({
                     pd: ledger[i].Date,
                     n: ledger[i].Discription,
                     d: ledger[i].Amount,
                     c: 0,
                     b: 0
                 });
                 //currntBal = currntBal + ledger[i].BalanceAmount;
                 //$scope.currentBalance = currntBal;

                 creditBal = creditBal + ledger[i].Amount;
                 $scope.totalCreditBalance = creditBal;

                 debitBal = debitBal + 0;
                 $scope.totalDebitBalance = debitBal;

                 totalBal = totalBal + 0;
                 $scope.totalBalance = totalBal;
                 $scope.totalCashInHand = $scope.totalBalance;

             }

         });

            }
            else {
                $scope.ClearField();
            }


        }

        $scope.GetAllRecords = function () {
            var allStatementRecord = $scope.allStatement;
            if (allStatementRecord == true) {

                $scope.customer = true;
                $scope.supplier = true;
                $scope.allExpenses = true;
                $scope.contraEntry = true;

            }
            else {
                $scope.customer = false;
                $scope.supplier = false;
                $scope.allExpenses = false;
                $scope.contraEntry = false;
                $scope.ClearField();
            }

        }


        $scope.AllReports = function () {
            var allStatementRecord = $scope.allStatement;
            var supplier = $scope.supplier;
            var customer = $scope.customer;
            var allExpenses = $scope.allExpenses;
            var contraEntry = $scope.contraEntry;

            //alert('working');

            if (allStatementRecord == true) {
                $scope.ClearField();
                $scope.ShowCustomerRecordsForCashAndBankbalance();
                $scope.ShowSupplierRecordsforCashAndBankBalance();
                $scope.ShowExpensesRecords();
                $scope.ShowContraEntryRecords();
            }
            else if (supplier == true) {
                $scope.ClearField();
                $scope.ShowSupplierRecordsforCashAndBankBalance();
                if (customer == true) {
                    $scope.ShowCustomerRecordsForCashAndBankbalance();
                }
                if (allExpenses == true) {
                    $scope.ShowExpensesRecords();

                }
                if (contraEntry == true) {
                    $scope.ShowContraEntryRecords();
                }
                
            }
            else if (customer == true) {
                $scope.ClearField();
                $scope.ShowCustomerRecordsForCashAndBankbalance();
                if (supplier == true) {
                    $scope.ShowSupplierRecordsforCashAndBankBalance();
                }
                if (allExpenses == true) {
                    $scope.ShowExpensesRecords();

                }
                if (contraEntry == true) {
                    $scope.ShowContraEntryRecords();
                }
               
            }
            else if (allExpenses == true) {
                $scope.ClearField();
                $scope.ShowExpensesRecords();
                
                if (contraEntry == true) {
                    $scope.ShowContraEntryRecords();
                }
                if (supplier == true) {
                    $scope.ShowSupplierRecordsforCashAndBankBalance();
                }
                if (customer == true) {
                    $scope.ShowCustomerRecordsForCashAndBankbalance();
                }
            }

            else if(contraEntry==true){
                $scope.ClearField();
                $scope.ShowContraEntryRecords();
                if (supplier == true) {
                    $scope.ShowSupplierRecordsforCashAndBankBalance();
                }
                if (allExpenses == true) {
                    $scope.ShowExpensesRecords();

                }
                if (customer == true) {
                    $scope.ShowCustomerRecordsForCashAndBankbalance();
                }
            }
            else {
                alert('Please Select Any One Opetion for Showing Reports');
                $scope.ClearField();
            }

        }
   
});//last