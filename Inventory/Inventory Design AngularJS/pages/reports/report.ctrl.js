var scotchApp = angular.module('scotchApp.reportDetails', ['ngRoute']);
scotchApp.controller('reportDetailsController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    //$scope.closebtn = false;

    ////for Customer & item Wise Sale
    //$scope.maindiv = false;
    //$scope.Printdiv = true;

    ////for Customer wise sale modal
    //$scope.custWisediv = false;
    //$scope.custwisePrintDiv = true;

    ////for Customer wise sale modal
    //$scope.SupplierWisediv = false;
    //$scope.supplierWisePrintDiv = true;
    
    ////dateTime
    //$scope.strartdatePic = false;
    //$scope.strartDatehide = true;
    //$scope.enddatePic = false;
    //$scope.endDatehide = true;
    
    ////for Mdale

    //$scope.dailySalesRegwModal = false;
    //$scope.toggleModal = function ()
    //{
    //    $scope.dailySalesRegwModal = !$scope.dailySalesRegwModal;
    //}
   
    

    ////for all show and hide div
    //$scope.showhide = function () {
    //    //dateTime
    //    $scope.strartdatePic = true;
    //    $scope.strartDatehide = false;
    //    $scope.enddatePic = true;
    //    $scope.endDatehide = false;
    //    $scope.maindiv = false;
    //    $scope.Printdiv = true;

    //    var duration = this.selectDuration;
    //    var currentdate = $filter('date')(new Date(), 'yyyy-MM-dd');

    //    if (duration == "Today")
    //    {
    //        $scope.startDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss'+'Z');
    //        $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss' + 'Z');
    //    }

    //    if (duration == "LastWeek") {

    //        var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

    //        var month = $filter('date')(currentdate, 'MM');//December-November like
    //        var day = $filter('date')(currentdate, 'dd'); //01-31 like
    //        var year = $filter('date')(currentdate, 'yyyy');
    //        var newday = parseInt(day) - 7;

    //        var newDate = year + "-" + month + "-" + newday;
    //        $scope.startDatesss = $filter('date')(newDate, 'yyyy-MM-ddTHH:mm:ss' + 'Z');
    //        $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss' + 'Z'); 
    //    }

    //    if (duration == "Last15Day") {

    //        var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

    //        var month = $filter('date')(currentdate, 'MM');//December-November like
    //        var day = $filter('date')(currentdate, 'dd'); //01-31 like
    //        var year = $filter('date')(currentdate, 'yyyy');
    //        var newday = parseInt(day) - 15;

    //        var newDate = year + "-" + month + "-" + newday;
    //        $scope.startDatesss = ($scope.startDatesss).slice(-7, 5);
    //        $scope.endDatesss = $filter('date')(new Date(), 'yyyy-MM-ddTHH:mm:ss' + 'Z'); //cend date=current date
    //    }
       

    //    //for Customer & item Wise Sale
    //    $scope.maindiv = false;
    //    $scope.Printdiv = true;

    //    //for Customer wise sale modal
    //    $scope.custWisediv = false;
    //    $scope.custwisePrintDiv = true;
    //}
    //// date textbox

    //$scope.textDate = function () {
    //      //dateTime
    //$scope.strartdatePic = false;
    //$scope.strartDatehide = true;
    //$scope.enddatePic = false;
    //$scope.endDatehide = true;
    //}
    //// Daily Sales Register


    //$scope.DailySalesReg = function () {
    //    $scope.maindiv = false;
    //    $scope.Printdiv = true;

    //    //for other report
    //    $scope.maindiv = false;//cust & item wise
    //    $scope.Printdiv = true;

    //    var getTotal;
    //    $scope.GrandTotal = 0;
    //        // alert("ASDSD");
        
    //    //today date
    //    // var dt=this.startDates;

    //    var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

    //    var startdate = $filter('date')($scope.startDatesss, 'yyyy-MM-dd');
    //    var enddate = $filter('date')($scope.endDatesss, 'yyyy-MM-dd');

    //   console.log("getDateM=" + startdate);

    //   // alert("currentdate=" + currentdate);

    //        //var enddate = $filter('date')(this.endDate, 'yyyy-MM-ddT00:00:00');

    //    $http.get('http://localhost:3200/api/SP_SelectDateWiseData?' + "startDate=" + startdate + "&endDate=" + enddate)
    //               .success(function (res)
    //               {
    //                   $scope.getData = res;
    //                   getTotal = $scope.getData;
    //                   alert(getTotal);
    //                   var count = getTotal.length;
    //                   for (var i = 0; i < count; i++) {
    //                   $scope.GrandTotal = parseFloat($scope.GrandTotal) + parseFloat(getTotal[i].NetAmount);
    //               }
    //           });
       
        

        
    //        var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');

    //        var month = $filter('date')(currentdate, 'MM');//December-November like
    //        var day = $filter('date')(currentdate, 'dd'); //01-31 like
    //        var year = $filter('date')(currentdate, 'yyyy');
    //        var newday = parseInt(day) - 7;
    //        var newDate = year + "-" + month + "-" + newday + "T00:00:00";

           
           
           
    //        //var currentdate = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
    //        //$scope.endDate = currentdate;
    //        //var d;
    //        //var total = 0;
    //        //var duration = this.selectDuration;

    //        //$http.get('http://localhost:3200/api/Sp_Daily_Sales_Register?' + "Duration=" + duration)
    //        //  .success(function (res) {

                  
    //        //      var count = res.length;
    //        //      if (count < 1) 
    //        //          alert("No Record To Print The Report");
                
    //        //      $scope.getData = res;
    //        //      var slectdata = $scope.getData;
    //        //      var count = res.length;
    //        //      console.log("count=" + count);
    //        //      var total = 0;
    //        //      console.log("$scope.getData=" + $scope.getData);
    //        //      for (var i = 0; i < count; i++) {
    //        //          total = parseFloat(total) + parseFloat(slectdata[i].NetAmount);

    //        //         d = slectdata[i].InvoiceDate;
    //        //      } 
    //        //      $scope.startDate = d;
    //        //      $scope.GrandTotal = total;
    //        //      if(duration=="Today")
    //        //      {
    //        //          $scope.endDate = currentdate;
    //        //          $scope.startDate = currentdate;
    //        //      }
                  
    //        //  });

        
    //}
   
    
    ////Day End Report
    //$scope.DayEndReport = function ()
    //{
    //    $scope.maindiv = false;
    //    $scope.Printdiv = true;

    //    //for other report
    //    $scope.maindiv = false;//cust & item wise
    //    $scope.Printdiv = true;

    //    var currentdate = $filter('date')(new Date(), 'dd-MM-yyyy');
    //    $scope.endDate = currentdate;
    //    var d;
    //    var total = 0;
    //    var duration = this.selectDuration;

    //    $http.get('http://localhost:3200/api/Sp_Daily_Sales_Register?' + "Duration=" + duration)
    //      .success(function (res) {

    //          $scope.array = [];
    //          var count = res.length;
    //          if (count < 1)
    //              alert("No Record To Print The Report");

    //          $scope.getData = res;
    //          var slectdata = $scope.getData;
    //          var count = res.length;
    //          console.log("count=" + count);
    //          var total = 0;

    //          $scope.txtchequeTotals = 0.00;
    //          $scope.txtdebitTotal = 0.00;
    //          $scope.txtcreditTotal = 0.00;
    //          $scope.txtcashTotal = 0.00;
    //          $scope.txtdiscount = 0.00
    //          $scope.txtsalesReturn = 0.00;

    //          var billno;
    //          var totalsale;
    //          var credit;
    //          var debit;
    //          var cheque;
    //          var cash;
    //          var discount;
    //          var salesReturn;
    //          var dumyprice="0.00";
    //          for (var i = 0; i < count; i++)
    //          {
    //              if (slectdata[i].PaymentType == "Cash")
    //                  {
    //                  $scope.array.push({
    //                      billno: slectdata[i].Id,
    //                      totalsale: slectdata[i].NetAmount,
    //                      credit: dumyprice,
    //                      debit: dumyprice,
    //                      cheque: dumyprice,
    //                      cash: slectdata[i].PaidAmount,
    //                      discount: dumyprice,
    //                      salesReturn: slectdata[i].BalanceAmount

    //                  })
    //                  $scope.txtcashTotal = parseFloat($scope.txtcashTotal) + parseFloat(slectdata[i].NetAmount);
    //              }
    //              if(slectdata[i].PaymentType == "Cheque")
    //              {
    //                  $scope.array.push({
    //                      billno: slectdata[i].Id,
    //                      totalsale: slectdata[i].NetAmount,
    //                      credit: dumyprice,
    //                      debit: dumyprice,
    //                      cheque: slectdata[i].PaidAmount,
    //                      cash: dumyprice,
    //                      discount: dumyprice,
    //                      salesReturn: slectdata[i].BalanceAmount

    //                  })
                      
    //                  $scope.txtchequeTotals = parseFloat($scope.txtchequeTotals) + parseFloat(slectdata[i].PaidAmount);
                     
    //              }
    //              if (slectdata[i].PaymentType == "Credit") {
    //                  $scope.array.push({
    //                      billno: slectdata[i].Id,
    //                      totalsale: slectdata[i].NetAmount,
    //                      credit: slectdata[i].PaidAmount,
    //                      debit: dumyprice,
    //                      cheque: dumyprice,
    //                      cash: dumyprice,
    //                      discount: dumyprice,
    //                      salesReturn: slectdata[i].BalanceAmount

    //                  })
    //                  $scope.txtcreditTotal = parseFloat($scope.txtcreditTotal) + parseFloat(slectdata[i].NetAmount);
    //              }
    //              if (slectdata[i].PaymentType == "Debit") {
    //                  $scope.array.push({
    //                      billno: slectdata[i].Id,
    //                      totalsale: slectdata[i].NetAmount,
    //                      credit: dumyprice,
    //                      debit: slectdata[i].PaidAmount,
    //                      cheque: dumyprice,
    //                      cash: dumyprice,
    //                      discount: dumyprice,
    //                      salesReturn: slectdata[i].BalanceAmount

    //                  })
    //                  $scope.txtdebitTotal = parseFloat($scope.txtdebitTotal) + parseFloat(slectdata[i].PaidAmount);
    //              }
    //              }
              
    //          var balancetot=0.00;

    //          for (var i = 0; i < count; i++) {
    //              total = parseFloat(total) + parseFloat(slectdata[i].NetAmount);

    //              d = slectdata[i].InvoiceDate;
    //              balancetot = parseFloat(balancetot) + parseFloat(slectdata[i].BalanceAmount);
    //          }
    //          $scope.startDate = d;
    //          $scope.GrandTotal = total;
    //          $scope.txtsalesReturn = balancetot;
    //          console.log("balancetot=" + balancetot);

    //          if (duration == "Today") {
    //              $scope.endDate = currentdate;
    //              $scope.startDate = currentdate;
    //          }

    //      });

    //}


    ////customer and Item wise 
    ////get customer
    //$http.get('http://localhost:3200/api/Customer_View')
    //.success(function (res) {
    //    console.log(res);
    //    $scope.getCustomers = res;
    //});

    ////get item
    //$http.get('http://localhost:3200/api/View_Item')
    //.success(function (res) {
    //    console.log(res);
    //    $scope.getItems = res;
    //});



    //$scope.ShowCustItemReport = function () {

    //    $scope.maindiv = true;
    //    $scope.Printdiv = false;
    //    $scope.custwisePrintDiv = false;
    //    $scope.custWisediv = true;

    //    var startdate =$filter('date')(this.startDatesss, 'yyyy-MM-dd');
    //    var enddate = $filter('date')(this.endDatesss, 'yyyy-MM-dd');

    //    $scope.stdate = startdate;
    //    $scope.eddate = enddate;
     
    //    var item_Id = parseInt(this.itemId);
    //    var cust_Id = parseInt(this.custId);
       

    //    $http.get('http://localhost:3200/api/SP_CustomerItemWiseDates?startdate=' + startdate + '&enddate=' + enddate + '&cust_id=' + cust_Id + '&item_id=' + item_Id)
    //   .success(function (res) {

    //   console.log(res);
    //   $scope.getCustomerItem = res;
    //   var custItem=$scope.getCustomerItem;

    //   console.log($scope.getCustomerItem);
       
    //   var count = custItem.length;
    //   var total = 0;
    //   alert(count);
    //   $scope.array = [];
    //   var date;
    //   var ttal = 0;
    //   var compairedate = startdate;
    //   for (var i = 0; i < count; i++) {
           
    //       //for (var j = 0; j < count;j++){
    //       //if (custItem[i].InsertedDate == compairedate)
    //       //    {
    //           $scope.cust_name = custItem[0].CustomerName;
    //           $scope.item_name = custItem[0].ItemName;
    //           total = total + custItem[i].SalePrice;
 
    //      //    }
    //      // else
    //      // {
    //      //     var month = $filter('date')(compairedate, 'MM');//December-November like
    //      //     var day = $filter('date')(compairedate, 'dd'); //01-31 like
    //      //     var year = $filter('date')(compairedate, 'yyyy');
    //      //     var newday = parseInt(day) + 1;
    //      //     compairedate = year + '-' + month + '-' + newday;
    //      //  }
    //      //}

    //       //$scope.array.push({
    //       //    date: custItem[i].InsertedDate,
    //       //    ttal: total
    //       //})
           
    //   }
    //   $scope.getTotal = total;
           
    //   }).success(function (response) {
           
    //   })
       
    //}

    //$scope.showCustomerwiseSale = function () {
    //    $scope.custWisediv = true;
    //    $scope.custwisePrintDiv = false;
    //}

    //$scope.showSupplierwiseSale = function () {

    //    //for Customer wise sale modal
    //    $scope.SupplierWisediv = true;
    //    $scope.supplierWisePrintDiv = false;
    //}


    ////Print Code

    //$scope.dayEndPrint = function (dayEndReportModal) {
    //   $scope.closebtn = true;
    //    alert(this.dasssss);
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

    //}

    //$scope.customerWisePrint = function (customerWiseSaleModal) {
    //    $scope.closebtn = true;
    //    alert(this.dasssss);
    //    var dsd = this.dasssss;
    //    var DocumentContainer = document.getElementById('customerWiseSaleModal');
    //    var WindowObject = window.open("", "PrintWindow",
    //    "width=750,height=650,top=50,left=200,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    //    WindowObject.document.write();

    //    WindowObject.document.writeln(DocumentContainer.innerHTML);
    //    //WindowObject.document.close();
    //    WindowObject.focus();
    //    WindowObject.print();
    //    //WindowObject.close();

    //}

    //$scope.ShowMaindiv = function (dailySalesRegwModal) {

    //   $scope.closebtn = true;
    //    alert(this.dasssss);
    //    var dsd = this.dasssss;
    //    var DocumentContainer = document.getElementById('dailySalesRegwModal');
    //var WindowObject = window.open("", "PrintWindow",
    //"width=750,height=650,top=50,left=200,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    //WindowObject.document.write();
   
    //WindowObject.document.writeln(DocumentContainer.innerHTML);
    ////WindowObject.document.close();
    //WindowObject.focus();
    //WindowObject.print();
    //    //WindowObject.close();


    //}

    //$scope.CustomerItemWisePrint = function (displaycustomer_item) {

    //    $scope.closebtn = true;
    //    $scope.custWisediv = true;

    //    //alert(this.dasssss);
    //    //var dsd = this.dasssss;
    //    var DocumentContainer = document.getElementById('displaycustomer_item');
    //    var WindowObject = window.open("", "PrintWindow",
    //    "width=750,height=650,top=100,left=200,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    //    WindowObject.document.write();

    //    WindowObject.document.writeln(DocumentContainer.innerHTML);
    //    //WindowObject.document.close();
    //    WindowObject.focus();
    //    WindowObject.print();
    //    //WindowObject.close();


    //}

})

