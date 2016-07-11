var scotchApp = angular.module('scotchApp.items', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('itemController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.doSomethingWithDate = function (date) {
        alert(date);
    }

    $scope.btnsave = true;
    $scope.btnupdate = false;

    $scope.items = "Masters Items Data";

    $scope.percent = function (percentage) {
        if (this.costPrice == null) {
            this.percentage = "";
            alert('Please Add the Cost Price');
        }
        else if (this.percentage == null || this.percentage == "") {
            this.salesPrice = null;
            this.MRP = null;
            this.purchasePrice = null;
        }
        else {
            var salesPrice = parseFloat((this.costPrice * this.percentage) / 100);
            var costPrice = parseFloat(this.costPrice);
            var TotalSalesPrice = parseFloat(costPrice + salesPrice);
            $scope.salesPrice = TotalSalesPrice;
            $scope.MRP = TotalSalesPrice;
            $scope.purchasePrice = TotalSalesPrice;
        }
    }
    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    //code for GET
    $http.get('http://localhost:3200/api/view_Item')
       .success(function (res) {
           // console.log(res);
           $scope.getItems = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.btnsave = true;
           $scope.btnupdate = false;
       })

    //code for GET UNIT TABLE VALUE
    $http.get('http://localhost:3200/api/View_Unit')
       .success(function (res) {
           //  console.log(res);
           $scope.getUnits = res;


       })


    //code for GET Categories
    $http.get('http://localhost:3200/api/View_Categories')
       .success(function (res) {
           // console.log(res);
           $scope.getCategories = res;

           //to get number of records


       })

    //code for GET TAX
    $http.get('http://localhost:3200/api/Taxes')
       .success(function (res) {
           //console.log(res);
           $scope.getTaxs = res;
       })

    //code for GET Percentage
    $http.get('http://localhost:3200/api/Percentages')
       .success(function (res) {
           //console.log(res);
           $scope.getPercentage = res;

       })

    //POST
    //code for save controller
    $scope.save = function () {

        var ItemName = this.itemName;
        var Code = this.code;
        var Manufacturer = this.manufacturer;

        var manuDate = this.manuFacturingDate;
        var expiryDate = this.expeiryDate;
        var SalePrice = this.salesPrice;

        var CostPrice = this.costPrice;
        //if (this.manuFacturingDate == null) {
        //    alert('Please add the Manufacturing Date');
        //}
        //else {
        //var ManufacturingDate = $filter('date')(this.manuFacturingDate, "dd-MM-yyyy");
        // var ManufacturingDate = "12-12-2015";
        //}
        //// var ManufacturingDate = this.manuFacturingDate;
        //if (this.expeiryDate == null) {
        //    alert('Please add the Expeiry Date');
        //}
        //else {
        //var ExpiryDate = $filter('date')(this.expeiryDate, "dd-MM-yyyy");
        // var ExpiryDate = "12-05-2016";

        //}
        var ProfitPercentage = this.percentage;

        //  alert(ProfitPercentage);

        var PurchasePrice = this.purchasePrice;
        var MRP = parseInt(this.MRP);

        var StanderdUnit = this.standardUnit;
        var PurchaseUnit = this.purchaseUnit;

        // alert(StanderdUnit);
        //alert(PurchaseUnit);
        var Category = this.category;
        var PurchaseTax = this.purchaseTax;
        var SalesTax = this.salesTax;
        var OpeningStock = this.openingStock;
        var IdealQuantity = this.idealQuantity;
        var ReorderQuantity = this.reorderQuantity;

        var MaxQuatity = this.maxQuantity;
        var TotalQuatity = this.totalQuantity;
        //alert(MaxQuatity);
        //alert(TotalQuatity);
        var AllowSales = this.allowSales;
        var AllowPurchase = this.allowPurchase;
        var AllowInword = this.allowInword;
        var AllowOutword = this.allowOutword;
        var Description = this.description;
        var Status = true;

        // alert(ManufacturingDate );
        //alert(ExpiryDate);





        //condition will check if user has left any field vacant
        //if (ItemName == null || Code == null || Manufacturer == null || SalePrice == null || CostPrice == null || ProfitPercentage == null || PurchasePrice == null || MRP == null || StanderdUnit == null || PurchaseUnit == null || Category == null || PurchaseTax == null || SalesTax == null || OpeningStock == null || IdealQuantity == null || ReorderQuantity == null || MaxQuatity == null || TotalQuatity == null || AllowSales == null || AllowPurchase == null || AllowInword == null || AllowOutword == null || Description == null) {

        //if (ItemName == null || Code == null || Manufacturer == null || SalePrice == null || CostPrice == null || ProfitPercentage == null || ProfitPercentage == "" || PurchasePrice == null || MRP == null || Category == null || PurchaseTax == null || SalesTax == null || OpeningStock == null || IdealQuantity == null || ReorderQuantity == null || MaxQuatity == null || TotalQuatity == null || AllowSales == null || AllowPurchase == null || AllowInword == null || AllowOutword == null || Description == null) {
        if (ItemName == null || Code == null || Manufacturer == null || manuDate ==null||expiryDate==null|| SalePrice == null || CostPrice == null || ProfitPercentage == null || ProfitPercentage == "" || PurchasePrice == null || MRP == null || StanderdUnit == null || StanderdUnit == "" || PurchaseUnit == null || PurchaseUnit == "" || Category == null || Category == "" || PurchaseTax == null || PurchaseTax == "" || SalesTax == null || SalesTax == "" || OpeningStock == null || IdealQuantity == null || ReorderQuantity == null || MaxQuatity == null || TotalQuatity == null || AllowSales == null || AllowSales == "" || AllowPurchase == null || AllowPurchase == "" || AllowInword == null || AllowInword == "" || AllowOutword == null || AllowOutword == "" || Description == null) {

            alert("fill the info");
            return;
        }

        else {

            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/items",
                crossDomain: true,
                data: {
                    Code: Code,
                    ItemName: ItemName,

                    Manufacturer: Manufacturer,
                    SalePrice: SalePrice,

                    CostPrice: CostPrice,
                    ManufacturingDate: manuDate,
                    ExpiryDate: expiryDate,
                    ProfitPercentage: ProfitPercentage,


                    PurchasePrice: PurchasePrice,
                    MRP: MRP,
                    StandardUnit_ID: StanderdUnit,
                    PurchaseUnit_ID: PurchaseUnit,
                    Category_ID: Category,

                    PurchaseTax: PurchaseTax,
                    SalesTax: SalesTax,
                    OpeningStock: OpeningStock,
                    IdealQuantity: IdealQuantity,
                    ReorderQuantity: ReorderQuantity,

                    MaxQuantity: MaxQuatity,
                    TotalQuantity: TotalQuatity,

                    AllowSales: AllowSales,
                    AllowPurchase: AllowPurchase,
                    AllowInword: AllowInword,
                    AllowOutword: AllowOutword,
                    Description: Description,
                    Status: Status,

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {

                 alert('data added successfully');
                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/view_Item')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         // console.log(res);
         $scope.getItems = res;
     });
             })
            this.itemName = null;
            this.code = null;
            this.manufacturer = null;
            this.salesPrice = null;

            this.costPrice = null;
            this.manuFacturingDate = null;
            this.expeiryDate = null;
            this.percentage = "";


            this.purchasePrice = null;
            this.MRP = null;
            this.standardUnit = "";
            this.purchaseUnit = "";
            this.category = "";
            this.purchaseTax = "";
            this.salesTax = "";
            this.openingStock = null;
            this.idealQuantity = null;
            this.reorderQuantity = null;
            this.maxQuantity = null;
            this.totalQuantity = null;
            this.allowSales = "";
            this.allowPurchase = "";
            this.allowInword = "";
            this.allowOutword = "";
            this.description = null;

            $scope.signup1.$setPristine();
        }
    };



    //value passing to the textbox
    $scope.editItems = function () {
        var item_Id = this.id;



        $http.get('http://localhost:3200/api/view_Item/' + item_Id)
     .success(function (res) {
         //console.log(res);
         $scope.pushTextItems = res;


         var pushTextItems = $scope.pushTextItems;

         alert(pushTextItems.ManufacturingDate);

         $scope.id = pushTextItems.Id;
         $scope.itemName = pushTextItems.ItemName;
         $scope.code = pushTextItems.Code;
         $scope.manufacturer = pushTextItems.Manufacturer;
         $scope.salesPrice = pushTextItems.SalePrice;

         $scope.costPrice = pushTextItems.CostPrice;

         $scope.manuFacturingDate = pushTextItems.ManufacturingDate;
         $scope.expeiryDate = pushTextItems.ExpiryDate;
         $scope.percentage = pushTextItems.ProfitPercentage;


         $scope.purchasePrice = pushTextItems.PurchasePrice;
         $scope.MRP = pushTextItems.MRP;
         $scope.standardUnit = pushTextItems.StandardUnit_ID;
         $scope.purchaseUnit = pushTextItems.PurchaseUnit_ID;
         $scope.category = pushTextItems.Category_ID;
         $scope.purchaseTax = pushTextItems.PurchaseTax;
         $scope.salesTax = pushTextItems.SalesTax;
         $scope.openingStock = pushTextItems.OpeningStock;
         $scope.idealQuantity = pushTextItems.IdealQuantity;
         $scope.reorderQuantity = pushTextItems.ReorderQuantity;
         $scope.maxQuantity = pushTextItems.MaxQuantity;
         $scope.totalQuantity = pushTextItems.TotalQuantity;
         $scope.allowSales = pushTextItems.AllowSales;
         console.log($scope.allowSales);
         $scope.allowPurchase = pushTextItems.AllowPurchase;
         $scope.allowInword = pushTextItems.AllowInword;
         $scope.allowOutword = pushTextItems.AllowOutword;
         $scope.description = pushTextItems.Description;

         $scope.btnsave = false;
         $scope.btnupdate = true;

     })

    }


    //PUT
    $scope.update = function () {
        var item_Id = this.id;

        var ItemName = this.itemName;
        var Code = this.code;
        var Manufacturer = this.manufacturer;
        var SalePrice = this.salesPrice;

        var CostPrice = this.costPrice;
        var ManufacturingDate = this.manuFacturingDate;
        var ExpiryDate = this.expeiryDate;
        var ProfitPercentage = this.percentage;

        var PurchasePrice = this.purchasePrice;
        var MRP = this.MRP;
        var StandardUnit = this.standardUnit;
        var PurchaseUnit = this.purchaseUnit;
        var Category = this.category;
        var PurchaseTax = this.purchaseTax;
        var SalesTax = this.salesTax;
        var OpeningStock = this.openingStock;
        var IdealQuantity = this.idealQuantity;
        var ReorderQuantity = this.reorderQuantity;
        var MaxQuantity = this.maxQuantity;
        var TotalQuantity = this.totalQuantity;
        var AllowSales = this.allowSales;
        var AllowPurchase = this.allowPurchase;
        var AllowInword = this.allowInword;
        var AllowOutword = this.allowOutword;
        var Description = this.description;



        ////condition will check if user has left any field vacant
        //if (ItemName == null || Code == null || Manufacturer == null || SalePrice == null || CostPrice == null || ProfitPercentage == null || ProfitPercentage == "" || PurchasePrice == null || MRP == null || StandardUnit == null || StandardUnit == "" || PurchaseUnit == null || PurchaseUnit == "" || Category == null || Category == "" || PurchaseTax == null || PurchaseTax == "" || SalesTax == null || SalesTax == "" || OpeningStock == null || IdealQuantity == null || ReorderQuantity == null || MaxQuantity == null || TotalQuantity == null || AllowSales == null || AllowSales == "" || AllowPurchase == null || AllowPurchase == "" || AllowInword == null || AllowInword == "" || AllowOutword == null || AllowOutword == "" || Description == null) {

        //    alert("fill the info");
        //    return;
        // } else {
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/items/" + item_Id,
            crossDomain: true,
            data: {
                Id: item_Id,

                ItemName: ItemName,
                Code: Code,
                Manufacturer: Manufacturer,
                SalePrice: SalePrice,
                CostPrice: CostPrice,
                ManufacturingDate: ManufacturingDate,
                ExpiryDate: ExpiryDate,
                ProfitPercentage: ProfitPercentage,

                PurchasePrice: PurchasePrice,
                MRP: MRP,
                StandardUnit_ID: StandardUnit,
                PurchaseUnit_ID: PurchaseUnit,
                Category_ID: Category,
                PurchaseTax: PurchaseTax,
                SalesTax: SalesTax,
                OpeningStock: OpeningStock,
                IdealQuantity: IdealQuantity,
                ReorderQuantity: ReorderQuantity,
                MaxQuantity: MaxQuantity,
                TotalQuantity: TotalQuantity,
                AllowSales: AllowSales,
                AllowPurchase: AllowPurchase,
                AllowInword: AllowInword,
                AllowOutword: AllowOutword,
                Description: Description,
                Status: true

            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {

             alert('data updated successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/view_Item')
 .success(function (res) {
     var x = res.length;
     $scope.x = x;
     console.log(res);
     $scope.getItems = res;



     $scope.btnsave = true;
     $scope.btnupdate = false;
 });
         })
        //}
        //alert(ItemName);
        this.id = null;
        this.itemName = null;
        this.code = null;
        this.manufacturer = null;
        this.salesPrice = null;

        this.costPrice = null;
        this.manuFacturingDate = null;
        this.expeiryDate = null;
        this.percentage = "";


        this.purchasePrice = null;
        this.MRP = null;
        this.standardUnit = "";
        this.purchaseUnit = "";
        this.category = "";
        this.purchaseTax = "";
        this.salesTax = "";
        this.openingStock = null;
        this.idealQuantity = null;
        this.reorderQuantity = null;
        this.maxQuantity = null;
        this.totalQuantity = null;
        this.allowSales = "";
        this.allowPurchase = "";
        this.allowInword = "";
        this.allowOutword = "";
        this.description = null;
        $scope.signup1.$setPristine();
    };



    //DELETE
    $scope.deleteItem = function () {
        var item_Id = this.id;


        $http.get('http://localhost:3200/api/view_Item/' + item_Id)
     .success(function (res) {
         //console.log(res);
         $scope.getItemss = res;

         var getItemss = $scope.getItemss;

         var ItemName = getItemss.ItemName;
         var Code = getItemss.Code;
         var Manufacturer = getItemss.Manufacturer;
         var SalePrice = getItemss.SalePrice;


         var CostPrice = getItemss.CostPrice;
         //var ManufacturingDate = getItemss.ManuFacturingDate;
         //var ExpiryDate = getItemss.ExpeiryDate;
         var ProfitPercentage = getItemss.ProfitPercentage;


         var PurchasePrice = getItemss.PurchasePrice;
         var MRP = getItemss.MRP;
         var StandardUnit = getItemss.StanderdUnit_ID;
         var PurchaseUnit = getItemss.PurchaseUnit_ID;
         var Category = getItemss.Category_ID;
         var PurchaseTax = getItemss.PurchaseTax;
         var SalesTax = getItemss.SalesTax;
         var OpeningStock = getItemss.OpeningStock;
         var IdealQuantity = getItemss.IdealQuantity;
         var ReorderQuantity = getItemss.ReorderQuantity;
         var MaxQuantity = getItemss.MaxQuantity;
         var TotalQuantity = getItemss.TotalQuantity;
         var AllowSales = getItemss.AllowSales;
         var AllowPurchase = getItemss.AllowPurchase;
         var AllowInword = getItemss.AllowInword;
         var AllowOutword = getItemss.AllowOutword;
         var Description = getItemss.Description;
         var status = false;


         this.id = null;
         this.itemName = null;
         this.code = null;
         this.manufacturer = null;
         this.salesPrice = null;

         this.costPrice = null;
         this.manuFacturingDate = null;
         this.expeiryDate = null;
         this.percentage = "";


         this.purchasePrice = null;
         this.MRP = null;
         this.standardUnit = "";
         this.purchaseUnit = "";
         this.category = "";
         this.purchaseTax = "";
         this.salesTax = "";
         this.openingStock = null;
         this.idealQuantity = null;
         this.reorderQuantity = null;
         this.maxQuantity = null;
         this.totalQuantity = null;
         this.allowSales = "";
         this.allowPurchase = "";
         this.allowInword = "";
         this.allowOutword = "";
         this.description = null;

         var request = $http({
             method: "put",
             url: "http://localhost:3200/api/items/" + item_Id,
             data: {
                 Id: item_Id,

                 ItemName: ItemName,
                 Code: Code,
                 Manufacturer: Manufacturer,
                 SalePrice: SalePrice,

                 CostPrice: CostPrice,
                 //ManufacturingDate:ManufacturingDate,
                 //ExpiryDate:ExpiryDate,
                 ProfitPercentage: ProfitPercentage,

                 PurchasePrice: PurchasePrice,
                 MRP: MRP,
                 StandardUnit_ID: StandardUnit,
                 PurchaseUnit_ID: PurchaseUnit,
                 Category_ID: Category,
                 PurchaseTax: PurchaseTax,
                 SalesTax: SalesTax,
                 OpeningStock: OpeningStock,
                 IdealQuantity: IdealQuantity,
                 ReorderQuantity: ReorderQuantity,
                 MaxQuantity: MaxQuantity,
                 TotalQuantity: TotalQuantity,
                 AllowSales: AllowSales,
                 AllowPurchase: AllowPurchase,
                 AllowInword: AllowInword,
                 AllowOutword: AllowOutword,
                 Description: Description,

                 Status: status,
             }

         })
         .success(function (responce) {

             alert('Data Deleted Successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/view_Item')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
                //console.log(res);
                $scope.getItems = res;



            });

         })


     })
    }

    //Empty fields
    $scope.cancelAndNew = function () {

        this.id = null;
        this.itemName = null;
        this.code = null;
        this.manufacturer = null;
        this.salesPrice = null;

        this.costPrice = null;
        this.manuFacturingDate = null;
        this.expeiryDate = null;
        this.percentage = "";


        this.purchasePrice = null;
        this.MRP = null;
        this.standardUnit = "";
        this.purchaseUnit = "";
        this.category = "";
        this.purchaseTax = "";
        this.salesTax = "";
        this.openingStock = null;
        this.idealQuantity = null;
        this.reorderQuantity = null;
        this.maxQuantity = null;
        this.totalQuantity = null;
        this.allowSales = "";
        this.allowPurchase = "";
        this.allowInword = "";
        this.allowOutword = "";
        this.description = null;


        $scope.btnsave = true;
        $scope.btnupdate = false;
        $scope.signup1.$setPristine();

        $http.get('http://localhost:3200/api/view_Item')
       .success(function (res) {
           //console.log(res);
           $scope.getItems = res;
       });

    }
});

scotchApp.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function (dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    }
});