var scotchApp = angular.module('scotchApp.stockInHand', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('stockInHandController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    // $scope.Ishide = true;
    var currntStocks=0;
    var totSalePrice=0;
    var totPurchasePrice=0;


    $http.get('http://localhost:3200/api/view_Item')
      .success(function (res) {
          // console.log(res);
          $scope.getItems = res;

          //to get number of records
          var items = $scope.getItems;
          var count = res.length;


          for (var i = 0; i <= count; i++) { 
              
              currntStocks = currntStocks + items[i].TotalQuantity;
              $scope.currntStock = currntStocks;

              totSalePrice = totSalePrice + items[i].SalePrice;
              $scope.totalSalePrice = totSalePrice;

              totPurchasePrice = totPurchasePrice + items[i].PurchasePrice;
              $scope.totalPurchasePrice = totPurchasePrice;
             
          }
          // alert('supplier cash');
      });
           
})


   
