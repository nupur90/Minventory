var scotchApp = angular.module('scotchApp.dailySalesRegister', ['ngRoute']);
scotchApp.controller('dailySalesRegisterController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    //dateTime
    $scope.strartdatePic = true;
    $scope.strartDatehide = false;
    $scope.enddatePic = true;
    $scope.endDatehide = false;
    
   

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
                if(month<=0)
                {
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
                if(month<=0)
                {
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
            if (newmonth <= 0)
            {
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
            var newDate = year + "-" + newmonth + "-" + day+"T00:00:00";
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
       

        //for Customer & item Wise Sale
        $scope.maindiv = false;
        $scope.Printdiv = true;

        //for Customer wise sale modal
        $scope.custWisediv = false;
        $scope.custwisePrintDiv = true;
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


    $scope.DailySalesReg = function () {
       
        $scope.hideHeadingDiv = true;
        $scope.hideSelectDiv = true;
        $scope.Printdiv = false;

        var getTotal;
        $scope.GrandTotal = 0;
           
        var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
        var startdate = $filter('date')($scope.startDatesss, 'yyyy-MM-dd');
        var enddate = $filter('date')($scope.endDatesss, 'yyyy-MM-dd');

       console.log("getDateM=" + startdate);

       // alert("currentdate=" + currentdate);

            //var enddate = $filter('date')(this.endDate, 'yyyy-MM-ddT00:00:00');

        $http.get('http://localhost:3200/api/SP_Daily_Sales_Registers_Result?startdate=' + startdate + "&endDate=" + enddate)
                   .success(function (res)
                   {
                       var count = res.length;
                       if (count < 1) {
                           alert("No Record To Print The Report");
                       }
                       else {

                      
                       $scope.tablediv = false;
                       $scope.getData = res;
                       getTotal = $scope.getData;
                       //alert(getTotal);
                       var count = getTotal.length;
                       for (var i = 0; i < count; i++) {
                           $scope.GrandTotal = parseFloat($scope.GrandTotal) + parseFloat(getTotal[i].NetAmount);
                       }
                   }
               });
       
        

         
        
    }


    //Print Code

  

    $scope.print = function () {

        $scope.durationtbldiv = true;
        $scope.headDiv = true;
       // javascript: window.print()
        window.print(); return false;


    }

  

})

scotchApp.filter('datetime', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var _date = $filter('date')(new Date(input), 'yyyy-MM-dd');

        return _date.toUpperCase();

    };
})