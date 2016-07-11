var scotchApp = angular.module('scotchApp.monthlyProfitAndLoss', ['ngRoute']);
scotchApp.controller('monthlyProfitAndLossController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.closebtn = false;

    $scope.tablediv = true;
    
    //dateTime
    $scope.strartdatePic = false;
    $scope.strartDatehide = true;
    $scope.enddatePic = false;
    $scope.endDatehide = true;

    $scope.hideHeadingDiv = false;
    $scope.hideSelectDiv = false;
    $scope.Printdiv = true;
    
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

        $scope.array = [];

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


    $scope.textDate = function () {
        //dateTime
        $scope.strartdatePic = false;
        $scope.strartDatehide = true;
        $scope.enddatePic = false;
        $scope.endDatehide = true;
    }
    // Daily Sales Register


    $scope.MonthlyProfitLoss = function () {


        $scope.hideHeadingDiv = true;
        $scope.hideSelectDiv = true;
        $scope.Printdiv = false;
       
        var j=0;
        var date;
        var purchaseTotal = 0;
        var salesTotal = 0;
        var expenses = 0;
        var grossProfit = 0;
        var netProfit = 0;
        var count =0;

        var txtdate;
        var txtPusrchaseValue;
        var txtSalesValue;
        var txtExpenses;
        var txtGrossProfit;
        var txtNetProfit;
        $scope.grandtotals = 0;

        var getTotal;
        $scope.GrandTotal = 0;
        var newdate;
        $scope.arraydata = [];

        var startdate = $filter('date')($scope.startDatesss, 'yyyy-MM-dd');
        var stday=$filter('date')(startdate, 'dd');
        var stmonth=$filter('date')(startdate, 'MM');
        var styear=$filter('date')(startdate, 'yyyy');
       

        var enddate = $filter('date')($scope.endDatesss, 'yyyy-MM-dd');
        var edday=$filter('date')(enddate, 'dd');
        var edmonth=$filter('date')(enddate, 'MM');
        var edyear = $filter('date')(enddate, 'yyyy');
        

        for (j = stmonth; j <= edmonth; j++)
        {
           // alert("sgdfhs");

            //alert(stday);
            //if(j<=edmonth)
            //{
               // for(var i=stday;i<=31;i++)
                //{   
            var monthJ = j;
                    newdate = styear + "-" + j + "-" + stday;
                    var netnewdate=styear + "-" + j + "-" + 31;

            $http.get('http://localhost:3200/api/SP_MothlyProfitAndLossReport?startdate=' + newdate + '&enddate=' + netnewdate)
                               .success(function (res)
                               {
                                   monthJ = j;
                                   $scope.getData = res;
                                   getTotal = $scope.getData;
                                    count = getTotal.length;
                                  // alert(getTotal);
                                 
                                   for (var p = 0; p < count; p++) {

                                       purchaseTotal = parseFloat(purchaseTotal) + parseFloat(getTotal[p].PurchaseAmount);
                                       salesTotal = salesTotal + getTotal[p].SaleAmount;
                                       expenses = expenses + getTotal[p].ExpensesAmount;
                                       $scope.ptotal = purchaseTotal;

                                       grossProfit = salesTotal - purchaseTotal;
                                       netProfit = grossProfit + expenses;
                                       $scope.grandtotals = $scope.grandtotals + netProfit;


                                       if (monthJ == 1) {
                                           $scope.arraydata.push({
                                               txtdate: "January",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 2) {
                                           $scope.arraydata.push({
                                               txtdate: "Feb",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 3) {
                                           $scope.arraydata.push({
                                               txtdate: "March",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 4) {
                                           $scope.arraydata.push({
                                               txtdate: "April",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 5) {
                                           $scope.arraydata.push({
                                               txtdate: "May",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 6) {
                                           $scope.arraydata.push({
                                               txtdate: "Jun",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 7) {
                                           $scope.arraydata.push({
                                               txtdate: "July",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 8) {
                                           $scope.arraydata.push({
                                               txtdate: "August",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 9) {
                                           $scope.arraydata.push({
                                               txtdate: "Saptember",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 10) {
                                           $scope.arraydata.push({
                                               txtdate: "Octomber",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }
                                       else if (monthJ == 11) {
                                           $scope.arraydata.push({
                                               txtdate: "November",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }

                                       else if (monthJ == 12) {
                                           $scope.arraydata.push({
                                               txtdate: "December",
                                               txtPusrchaseValue: purchaseTotal,
                                               txtSalesValue: salesTotal,
                                               txtExpenses: expenses,
                                               txtGrossProfit: grossProfit,
                                               txtNetProfit: netProfit

                                           })
                                       }

                                   }//end for loop
                                   
                                 });
                    
                    
               // }//end i for loop
              //  alert("purchaseTotal=" + $scope.ptotal);

               
                $scope.tablediv = false;
           // }//end if

        }//end j for loop

    }
   
   
    
    $scope.print = function () {

        $scope.PrintBtn = true;
        window.print(); return false;

    }

  


})

