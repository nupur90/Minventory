var scotchApp = angular.module('scotchApp.dayEndReport', ['ngRoute']);
scotchApp.controller('dayEndReportController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.closebtn = false;

    $scope.tablediv = true;
    
    //dateTime
    $scope.strartdatePic = false;
    $scope.strartDatehide = true;
    $scope.enddatePic = false;
    $scope.endDatehide = true;
    
    //for Mdale

    $scope.dailySalesRegwModal = false;
    $scope.toggleModal = function ()
    {
        $scope.dailySalesRegwModal = !$scope.dailySalesRegwModal;
    }
   
    

    //for all show and hide div
    $scope.showhide = function () {

        //dateTime
        $scope.strartdatePic = true;
        $scope.strartDatehide = false;
        $scope.enddatePic = true;
        $scope.endDatehide = false;
        $scope.maindiv = false;
        $scope.Printdiv = true;

        var duration = this.selectDuration;
        var currentdate = $filter('date')(new Date(), 'yyyy-MM-dd');

        if (duration == "Today") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
            // var newDate = addDays(currentdate, 5);
            // alert("newDate=" + newDate);

            $scope.startDatesss = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddThh:mm:ss');
        }

        if (duration == "LastWeek") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newday = parseInt(day) - 7;
            if (newday <= 0) {
                newday = 31 + newday;
                month = month - 1;
                if (month <= 0) {
                    month = 12 - month;
                    year = year - 1;
                }
            }

            var newDate = year + "-" + month + "-" + newday + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');
        }

        if (duration == "Last15Day") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newday = parseInt(day) - 15;
            if (newday <= 0) {
                newday = 31 + newday;
                month = month - 1;
                if (month <= 0) {
                    month = 12 - month;
                    year = year - 1;
                }
            }

            var newDate = year + "-" + month + "-" + newday + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss');

        }
        if (duration == "LastMonths") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 01;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //cend date=current date
        }
        if (duration == "Last3Months") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 03;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }
        if (duration == "Last6Months") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newmonth = parseInt(month) - 06;
            if (newmonth <= 0) {
                newmonth = 12 + newmonth;
                year = year - 1;
            }
            var newDate = year + "-" + newmonth + "-" + day + "T00:00:00";
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }
        if (duration == "LastYear") {

            var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

            var month = $filter('date')(currentdate, 'MM');//December-November like
            var day = $filter('date')(currentdate, 'dd'); //01-31 like
            var year = $filter('date')(currentdate, 'yyyy');
            var newyear = parseInt(year) - 1;

            var newDate = newyear + "-" + month + "-" + day;
            $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss');
            $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'); //end date=current date
        }
    }
    // date textbox

    $scope.textDate = function ()
    {
        $scope.strartdatePic = false;
        $scope.strartDatehide = true;
        $scope.enddatePic = false;
        $scope.endDatehide = true;
    }
    
    
    //Day End Report
    $scope.DayEndReport = function ()
    {
        $scope.tablediv = false;

        //var currentdate = $filter('date')(new Date(), 'dd-MM-yyyy');
        //$scope.endDate = currentdate;

        var startdate = $filter('date')($scope.startDatesss, 'yyyy-MM-dd');
        var enddate = $filter('date')($scope.endDatesss, 'yyyy-MM-dd');
        var d;
        var total = 0;
        var duration = this.selectDuration;

        $http.get('http://localhost:3200/api/SP_Daily_Sales_Registers_Result?startdate=' + startdate + "&endDate=" + enddate)
          .success(function (res) {

              $scope.array = [];
              var count = res.length;
              if (count < 1)
                  alert("No Record To Print The Report");

              $scope.getData = res;
              var slectdata = $scope.getData;
              var count = res.length;
              console.log("count=" + count);
              var total = 0;

              $scope.txtchequeTotals = 0.00;
              $scope.txtdebitTotal = 0.00;
              $scope.txtcreditTotal = 0.00;
              $scope.txtcashTotal = 0.00;
              $scope.txtdiscount = 0.00
              $scope.txtsalesReturn = 0.00;

              var billno;
              var totalsale;
              var credit;
              var debit;
              var cheque;
              var cash;
              var discount;
              var salesReturn;
              var dumyprice="0.00";
              for (var i = 0; i < count; i++)
              {
                  if (slectdata[i].PaymentType == "Cash")
                      {
                      $scope.array.push({
                          billno: slectdata[i].Id,
                          totalsale: slectdata[i].NetAmount,
                          credit: dumyprice,
                          debit: dumyprice,
                          cheque: dumyprice,
                          cash: slectdata[i].PaidAmount,
                          discount: dumyprice,
                          salesReturn: slectdata[i].BalanceAmount

                      })
                      $scope.txtcashTotal = parseFloat($scope.txtcashTotal) + parseFloat(slectdata[i].PaidAmount);
                  }
                  if(slectdata[i].PaymentType == "Cheque")
                  {
                      $scope.array.push({
                          billno: slectdata[i].Id,
                          totalsale: slectdata[i].NetAmount,
                          credit: dumyprice,
                          debit: dumyprice,
                          cheque: slectdata[i].PaidAmount,
                          cash: dumyprice,
                          discount: dumyprice,
                          salesReturn: slectdata[i].BalanceAmount

                      })
                      
                      $scope.txtchequeTotals = parseFloat($scope.txtchequeTotals) + parseFloat(slectdata[i].PaidAmount);
                     
                  }
                  if (slectdata[i].PaymentType == "Credit") {
                      $scope.array.push({
                          billno: slectdata[i].Id,
                          totalsale: slectdata[i].NetAmount,
                          credit: slectdata[i].PaidAmount,
                          debit: dumyprice,
                          cheque: dumyprice,
                          cash: dumyprice,
                          discount: dumyprice,
                          salesReturn: slectdata[i].BalanceAmount

                      })
                      $scope.txtcreditTotal = parseFloat($scope.txtcreditTotal) + parseFloat(slectdata[i].PaidAmount);
                  }
                  if (slectdata[i].PaymentType == "Debit") {
                      $scope.array.push({
                          billno: slectdata[i].Id,
                          totalsale: slectdata[i].NetAmount,
                          credit: dumyprice,
                          debit: slectdata[i].PaidAmount,
                          cheque: dumyprice,
                          cash: dumyprice,
                          discount: dumyprice,
                          salesReturn: slectdata[i].BalanceAmount

                      })
                      $scope.txtdebitTotal = parseFloat($scope.txtdebitTotal) + parseFloat(slectdata[i].PaidAmount);
                  }
                  }
              
              var balancetot=0.00;
              var debit = 0;
              var cash = 0;
              var cheque = 0;
              var credit = 0;
              var salereturn = 0;

              for (var i = 0; i < count; i++) {
                  total = parseFloat(total) + parseFloat(slectdata[i].NetAmount);
                  debit = parseFloat(debit) + parseFloat(slectdata[i].NetAmount);

                  d = slectdata[i].InvoiceDate;
                  balancetot = parseFloat(balancetot) + parseFloat(slectdata[i].BalanceAmount);
              }
              $scope.startDate = d;
              $scope.GrandTotal = total;
              $scope.txtsalesReturn = balancetot;
              console.log("balancetot=" + balancetot);

              if (duration == "Today") {
                  $scope.endDate = currentdate;
                  $scope.startDate = currentdate;
              }

          });

    }


    //Print Code
    $scope.dayEndPrint = function (dayEndReportModal) {
    //   $scope.closebtn = true;
    //  //  alert(this.dasssss);
    //    var dsd = this.dasssss;
    //    var DocumentContainer = document.getElementById('dayEndReportModal');
    //var WindowObject = window.open("", "PrintWindow",
    //"width=750,height=650,top=50,left=200,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    //WindowObject.document.write();
   
    //WindowObject.document.writeln(DocumentContainer.innerHTML);
    ////WindowObject.document.close();
    //WindowObject.focus();
    //WindowObject.print();
        ////WindowObject.close();
        window.print(); return false;

    }


})

