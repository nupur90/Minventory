var scotchApp = angular.module('scotchApp.custPayment', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('custPaymentController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Ishide = true;
  
    //code for GET
    $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice')
       .success(function (res) {
           // console.log(res);
           $scope.getCustPayment = res;
           //var cust = $scope.getCustPayment;
           //$scope.custdate = cust.PaymentDate;
           var date="2015-12-07T00:00:00";
           //var time = $filter('date')(new Date(date), 'yyyy-MM-dd');
           ////console.log("asdaaag=" + ]);
           //alert("time=" + time);

           $scope.month = $filter('date')(date, 'MM');//December-November like
           //alert("time=" + $scope.month);
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
        

        if(Duration==today)
        {
            //today date
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            alert($scope.copyDuration);
            $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice')
   .success(function (res) {
       // console.log(res);
       $scope.getCustPayment = res;
   })

        }
        else if (Duration == lastWeek)
        {
          
            

        }
        else if (Duration == last15days)
        {

            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            var date = $scope.copyDuration;         
            $scope.month = $filter('date')(date, 'MM');//filter month
            var month = $scope.month - 1;
            $scope.day = $filter('date')(date, 'dd'); //filter day
            $scope.year = $filter('date')(date, 'yyyy');//filter year
            for (var i = $scope.day; i <= 15; i--) {

                var finalDate = ($scope.year + "-" + month + "-" + i + "T00:00:00").trim();
                alert(finalDate);
                $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice/' + finalDate)
               .success(function (res) {
                   $scope.getPayment = res;
                   var cust = $scope.getPayment;

                   var TransactionIddt = cust.TransactionId
                   var PaymentDatedt = cust.PaymentDate;
                   var SalesInvoiceIddt = cust.SalesInvoiceId;
                   var Iddt = cust.Id;
                   var CustomerNamedt = cust.CustomerName;
                   var PaymentTypedt = cust.PaymentType;
                   var TotalAmountdt = cust.TotalAmount;
                   var BalanceAmountdt = cust.BalanceAmount;
                   var TransactionId;
                   var PaymentDate;
                   var SalesInvoiceId;
                   var Id;
                   var CustomerName;
                   var PaymentType;
                   var TotalAmount;
                   var BalanceAmount;

                   $scope.getCustPayment.push
                   ({
                       TransactionId: TransactionIddt,
                       PaymentDate: PaymentDatedt,
                       SalesInvoiceId: SalesInvoiceIddt,
                       Id: Iddt,
                       CustomerName: CustomerNamedt,
                       PaymentType: PaymentTypedt,
                       TotalAmount: TotalAmountdt,
                       BalanceAmount: BalanceAmountdt
                   })
               })
            }


        }
        else if (Duration == lasMonth)
        {
            $scope.getCustPayment = [];
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            var date = $scope.copyDuration;
            //alert(date);
            $scope.month = $filter('date')(date, 'MM');//December-November like
            var month = $scope.month - 1;
            // alert("time=" + $scope.month);
            $scope.day = $filter('date')(date, 'dd'); //01-31 like
            $scope.year = $filter('date')(date, 'yyyy');//
            var fyear = $scope.year;

            for (var i = 1; i <= 31; i++) {
                var finalDate1 = fyear + "-" + month + "-" + i + "T00:00:00";
                var finalDate = $filter('date')(new Date(), 'finalDate1');
                alert(finalDate);
                $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice/' + finalDate)
               .success(function (res) {
                   $scope.getPayment = res;
                   var cust = $scope.getPayment;

                   var TransactionIddt = cust.TransactionId
                   var PaymentDatedt = cust.PaymentDate;
                   var SalesInvoiceIddt = cust.SalesInvoiceId;
                   var Iddt = cust.Id;
                   var CustomerNamedt = cust.CustomerName;
                   var PaymentTypedt = cust.PaymentType;
                   var TotalAmountdt = cust.TotalAmount;
                   var BalanceAmountdt = cust.BalanceAmount;
                   var TransactionId;
                   var PaymentDate;
                   var SalesInvoiceId;
                   var Id;
                   var CustomerName;
                   var PaymentType;
                   var TotalAmount;
                   var BalanceAmount;

                   $scope.getCustPayment.push
                   ({
                       TransactionId: TransactionIddt,
                       PaymentDate: PaymentDatedt,
                       SalesInvoiceId: SalesInvoiceIddt,
                       Id: Iddt,
                       CustomerName: CustomerNamedt,
                       PaymentType: PaymentTypedt,
                       TotalAmount: TotalAmountdt,
                       BalanceAmount: BalanceAmountdt
                   })
               })
            }

            console.log("$scope.getCustPayment" + $scope.getCustPayment);
        }
        else if (Duration == last3months)
        {
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            var date = $scope.copyDuration;
            //alert(date);
            $scope.month = $filter('date')(date, 'MM');
            //var month = $scope.month - 3;
            $scope.day = $filter('date')(date, 'dd');
            $scope.year = $filter('date')(date, 'yyyy');
            for (var j = $scope.month; j <= 3; j--) {
               
                for (var i = 1; i <= 31; i++) {
                    var finalDate = $scope.year + "-" + j + "-" + i + "T00:00:00";
                alert(finalDate);
                $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice/' + finalDate)
               .success(function (res) {
                   $scope.getPayment = res;
                   var cust = $scope.getPayment;

                   var TransactionIddt = cust.TransactionId
                   var PaymentDatedt = cust.PaymentDate;
                   var SalesInvoiceIddt = cust.SalesInvoiceId;
                   var Iddt = cust.Id;
                   var CustomerNamedt = cust.CustomerName;
                   var PaymentTypedt = cust.PaymentType;
                   var TotalAmountdt = cust.TotalAmount;
                   var BalanceAmountdt = cust.BalanceAmount;
                   var TransactionId;
                   var PaymentDate;
                   var SalesInvoiceId;
                   var Id;
                   var CustomerName;
                   var PaymentType;
                   var TotalAmount;
                   var BalanceAmount;

                   $scope.getCustPayment.push
                   ({
                       TransactionId: TransactionIddt,
                       PaymentDate: PaymentDatedt,
                       SalesInvoiceId: SalesInvoiceIddt,
                       Id: Iddt,
                       CustomerName: CustomerNamedt,
                       PaymentType: PaymentTypedt,
                       TotalAmount: TotalAmountdt,
                       BalanceAmount: BalanceAmountdt
                   })
               })
            }// end 2st for

            }// end 1st for


        }
        else if (Duration == last6months)
        {
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            var date = $scope.copyDuration;
            //alert(date);
            $scope.month = $filter('date')(date, 'MM');
            var month = $scope.month - 6;
            $scope.day = $filter('date')(date, 'dd');
            $scope.year = $filter('date')(date, 'yyyy');
            for (var j = 1; j <= 3; j++) {
                month = month + 1;
                for (var i = 1; i <= 31; i++) {
                    var finalDate = $scope.year + "-" + month + "-" + i + "T00:00:00";
                    alert(finalDate);
                    $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice/' + finalDate)
                   .success(function (res) {
                       $scope.getPayment = res;
                       var cust = $scope.getPayment;

                       var TransactionIddt = cust.TransactionId
                       var PaymentDatedt = cust.PaymentDate;
                       var SalesInvoiceIddt = cust.SalesInvoiceId;
                       var Iddt = cust.Id;
                       var CustomerNamedt = cust.CustomerName;
                       var PaymentTypedt = cust.PaymentType;
                       var TotalAmountdt = cust.TotalAmount;
                       var BalanceAmountdt = cust.BalanceAmount;
                       var TransactionId;
                       var PaymentDate;
                       var SalesInvoiceId;
                       var Id;
                       var CustomerName;
                       var PaymentType;
                       var TotalAmount;
                       var BalanceAmount;

                       $scope.getCustPayment.push
                       ({
                           TransactionId: TransactionIddt,
                           PaymentDate: PaymentDatedt,
                           SalesInvoiceId: SalesInvoiceIddt,
                           Id: Iddt,
                           CustomerName: CustomerNamedt,
                           PaymentType: PaymentTypedt,
                           TotalAmount: TotalAmountdt,
                           BalanceAmount: BalanceAmountdt
                       })
                   })
                }// end 2st for

            }// end 1st for

        }
        else if (Duration == lastyear)
        {
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            var date = $scope.copyDuration;
            //alert(date);
            $scope.month = $filter('date')(date, 'MM');//December-November like
           
            // alert("time=" + $scope.month);
            $scope.day = $filter('date')(date, 'dd'); //01-31 like
            $scope.year = $filter('date')(date, 'yyyy');//
            var finalyear = $scope.year - 1;

            for (var j = 1; j <= 12; j++) {

                for (var i = 1; i <= 31; i++) {

                    var finalDate = finalyear + "-" + j + "-" + i + "T00:00:00";
                    alert(finalDate);
                    $http.get('http://localhost:3200/api/View_Customer_Payment_SalesInvoice/' + finalDate)
                   .success(function (res) {
                       $scope.getPayment = res;
                       var cust = $scope.getPayment;

                       var TransactionIddt = cust.TransactionId
                       var PaymentDatedt = cust.PaymentDate;
                       var SalesInvoiceIddt = cust.SalesInvoiceId;
                       var Iddt = cust.Id;
                       var CustomerNamedt = cust.CustomerName;
                       var PaymentTypedt = cust.PaymentType;
                       var TotalAmountdt = cust.TotalAmount;
                       var BalanceAmountdt = cust.BalanceAmount;
                       var TransactionId;
                       var PaymentDate;
                       var SalesInvoiceId;
                       var Id;
                       var CustomerName;
                       var PaymentType;
                       var TotalAmount;
                       var BalanceAmount;

                       $scope.getCustPayment.push
                       ({
                           TransactionId: TransactionIddt,
                           PaymentDate: PaymentDatedt,
                           SalesInvoiceId: SalesInvoiceIddt,
                           Id: Iddt,
                           CustomerName: CustomerNamedt,
                           PaymentType: PaymentTypedt,
                           TotalAmount: TotalAmountdt,
                           BalanceAmount: BalanceAmountdt
                       })
                   })
                }
            }
        }
        


    }
})
