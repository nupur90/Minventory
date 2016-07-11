var scotchApp = angular.module('scotchApp.partyPaymentsS', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('partyPaymentsController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Party Payments Data";

    //Get customer name
    $http.get('http://localhost:3200/api/customer_view')
      .success(function (res) {
          console.log(res);
          $scope.getCustomers = res;

      });
   
   
    
    var pd;
    var cn;
    var pt;
    var n;
    var amt;
     
    $scope.custid = function (CustomerName) {
        cust_id = CustomerName;
        $http.get('http://localhost:3200/api/customer_view/' + cust_id)
       .success(function (res) {
           console.log(res);
           $scope.getCustomerscitycno = res;
           var cust = $scope.getCustomerscitycno;
           $scope.Customercontactno = cust.ContactNumber;
           $scope.Customern = cust.Name;
           $scope.city = cust.City;
           var cityid = cust.City_ID;
           var cust_name = cust.Name;
       });
    }

    //Code for Print Page
    $scope.amountToAmountChanges = function () {

        $scope.txtAmount = this.amount;

    }

    //Code for 
    $scope.amountChanges = function () {
        var paidAmount = this.txtPaidAmount;
        $scope.BalanceAmount = this.txtAmount - this.txtPaidAmount;
        $scope.PrintPaidAmount = this.txtPaidAmount;
        $scope.PrintBalanceAmount = $scope.BalanceAmount;
        if (paidAmount == null || paidAmount == "") {
            $scope.BalanceAmount = "";
        }
    }

    //code for GET
    $http.get('http://localhost:3200/api/View_Bank_Accounts')
       .success(function (res) {
           // console.log(res);
           $scope.getBankAccounts = res;
       })

    //Get party payment records
    
    $scope.viewList = function () {
        $http.get('http://localhost:3200/api/View_PartyPayment')
.success(function (res) {
    //console.log(res);
    $scope.getLedger = res;
    var ledger = $scope.getLedger;
    var count = res.length;
    //alert(count);
    $scope.getPartyPaymentLedger = [];
    var totalAmount = 0;

    for (var i = 0; i <= count; i++) {
        $scope.getPartyPaymentLedger.push({
            pd: ledger[i].PaymentDate,
            cn: ledger[i].Name,
            pt: ledger[i].PaymentType,
            n: ledger[i].Note,
            amt: ledger[i].Amount
        })

        totalAmount = totalAmount + ledger[i].Amount;
        $scope.totalBalance = totalAmount;
    }
    // alert('supplier cash');
});

    }
   
    $scope.cancelAndNew = function () {

        this.CustomerName = "";
        this.ddlPaymentType = "";
        this.txtChequenoS = "";
        this.PaymentDate = "";
        this.txtReferenceNo = "";
        this.txtDepositeDate = "";
        this.txtBankName = "";
        this.ddlDepositeTo = "";
        this.note = "";
        this.amount = "";
        this.city = "";
        this.Customercontactno = "";
        this.dueAmount = "";
    }

    $scope.savePayment = function () {

        var Customer_Id = this.CustomerName;
        var paymenttype = this.ddlPaymentType;
        var chequenumber = this.txtChequenoS;
        var referenceNo = this.txtReferenceNo;
        var PaymentDate = this.PaymentDate;
        var DepositeDate = this.txtDepositeDate;
        var BankName = this.txtBankName;
        var depositeto = this.ddlDepositeTo;
        var Note = this.note;
        var TotalAmount = this.amount;

        var chequeStatus = "Pending";
        var Status = true;

        if (Customer_Id == "" || Customer_Id == null) {
            alert('Please Select the Customer');
        }
        if (TotalAmount == "" || TotalAmount == null) {

            alert('Please Add Amount');

        }
        if (PaymentDate == "" || PaymentDate == null) {

            alert('Please Add Payment Date');

        }
        if (paymenttype == "" || paymenttype == null) {

            alert('Please Select Payment Type');

        }
            //if (paymenttype == "CreditCard" || paymenttype == "DebitCard" || paymenttype == "Cheque") {
            //    if (depositeto == null || depositeto == "") {
            //        alert('Please Select Deposite Type');
            //    }
            //    if (paymenttype == "Cheque") {

            //        if (BankName == null || chequenumber == null || BankName == "" || chequenumber == "") {
            //            alert('Please Add Bank Name or Cheque Number');
            //        }
            //    }


            //}


        else {
            alert(Note);
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/PartyPayments",
                crossDomain: true,
                data: {
                    Customer_ID: Customer_Id,
                    PaymentType: paymenttype,
                    ChequeNumber: chequenumber,
                    ReferenceNumber: referenceNo,
                    PaymentDate: PaymentDate,
                    Amount: TotalAmount,
                    DepositeDate: DepositeDate,
                    DepositeTo: depositeto,
                    BankName: BankName,
                    Note: Note,
                    ChequeStatus: chequeStatus,
                    Status: Status
                },
                headers: { 'Content-Type': 'application/json' }
            })
              .success(function (responce) {
                  alert('Payment Make Successfully...');
              });
           
            $scope.cancelAndNew();
            $scope.signup1.$setPristine();
        }



    }




});//last