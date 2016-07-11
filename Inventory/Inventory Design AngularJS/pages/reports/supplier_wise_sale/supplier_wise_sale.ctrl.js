var scotchApp = angular.module('scotchApp.supplierWiseSale', ['ngRoute']);
scotchApp.controller('supplierWiseSaleController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

   
    //dateTime
    $scope.strartdatePic = false;
    $scope.strartDatehide = true;
    $scope.enddatePic = false;
    $scope.endDatehide = true;

    $scope.hideHeadingDiv = false;
    $scope.hideSelectDiv = false;
    $scope.Printdiv = true;
    
    //for Mdale
 
   
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




    //customer and Item wise 
    //get customer
    $http.get('http://localhost:3200/api/Supplier_View')
    .success(function (res) {
        console.log(res);
        $scope.getSuppliers = res;
    });


    $scope.showSupplierwiseSale = function () {

        $scope.hideHeadingDiv = true;
        $scope.hideSelectDiv = true;
        $scope.Printdiv = false;


        var startdate = $filter('date')(this.startDatesss, 'yyyy-MM-dd');
        var enddate = $filter('date')(this.endDatesss, 'yyyy-MM-dd');

        //$scope.stdate = startdate;
        //$scope.eddate = enddate;

        //  var item_Id = parseInt(this.itemId);
        var supplier_Id = parseInt(this.supplierId);
        

        $http.get('http://localhost:3200/api/Supplier_View/' + supplier_Id)
           .success(function (res) {
              // alert('supplier_Id=' + supplier_Id);
               console.log(res);
               $scope.getSupplierName = res;
               var supplierName = $scope.getSupplierName;
               var count = supplierName.length;
               alert('count=' + supplierName);
               for (var i = 0; i < 1; i++)
               {
                   $scope.supplier_namess = supplierName[i].Name;
                  // alert('$scope.supplier_name =' + $scope.supplier_name);
               }

           })


        $http.get('http://localhost:3200/api/SP_Supplier_Wise_Reports?supplier_id=' + supplier_Id + '&startdate=' + startdate + '&enddate=' + enddate)
       .success(function (res) {

           console.log(res);
           $scope.getSupplierItem = res;
           var supplierItem = $scope.getSupplierItem;

           //console.log($scope.getCustomerItem);
           $scope.getTotal = 0;
           var count = supplierItem.length;
           var total = 0;
           alert(count);
           $scope.array = [];
           var date;
           var ttal = 0;
           var compairedate = startdate;
           for (var i = 0; i < count; i++) {

              // $scope.supplier_name = supplierItem[0].CustomerName;
               //  $scope.item_name = custItem[0].ItemName;
               total = total + supplierItem[i].TotalAmount;
           }
           $scope.getTotal = total;

       })
    }


    //Print Code

    $scope.Print = function () {
      
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