var scotchApp = angular.module('scotchApp.services', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('servicesController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Masters Services Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    $scope.btnSave = true;
    $scope.btnUpdate = false;
    //code for GET
    $http.get('http://localhost:3200/api/ServicesViews')
       .success(function (res) {
           console.log(res);
           $scope.getServices = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;

           $scope.btnSave = true;
           $scope.btnUpdate = false;
       })



    //POST
    //code for save controller

    $scope.save = function () {
        var serviceName = this.serviceName;
        var salePrise = this.salePrise;
        var purchasePrise = this.purchasePrise;
        var Unit = this.unit;
        var category = this.category;
        var purchaseTax = this.purchaseTax;
        var salesTax = this.salesTax;
        var allowSales = this.allowSales;
        var allowPurchase = this.allowPurchase;
        var description = this.description;
        var status = true;

        //condition will check if user has left any field vacant
        if (serviceName == null || salePrise == null || purchasePrise == null || Unit == null || Unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
            alert("fill the info");
            return;
        }

        else {
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/services",
                crossDomain: true,
                data: {
                    ServiceName: serviceName,
                    SalesPrice: salePrise,
                    PurchasePrice: purchasePrise,
                    Unit: Unit,
                    Category_ID: category,
                    PurchaseTax_ID: purchaseTax,
                    SalesTax_ID: salesTax,
                    AllowSales: allowSales,
                    AllowPurchase: allowPurchase,
                    Description: description,
                    Status: status,
                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/ServicesViews')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         console.log(res);
         $scope.getServices = res;
     });

             })

            this.serviceName = " ";
            this.salePrise = " ";
            this.purchasePrise = " ";
            this.unit = "";
            this.category = "";
            this.purchaseTax = "";
            this.salesTax = "";
            this.allowSales = "";
            this.allowPurchase = "";
            this.description = " ";
        }
    };




    //code for CANCEL and NEW button
    $scope.cancelAndNew = function ()
    {
        this.serviceName = " ";
        this.salePrise = " ";
        this.purchasePrise = " ";
        this.unit = "";
        this.category = "";
        this.purchaseTax = "";
        this.salesTax = "";
        this.allowSales = "";
        this.allowPurchase = "";
        this.description = " ";

        $http.get('http://localhost:3200/api/ServicesViews')
      .success(function (res) {
          
          $scope.getServices = res;

          $scope.btnSave = true;
          $scope.btnUpdate = false;
      })
        }




    //PUT
    //this code will get the values from table of page and show them in textbox of same page
    //code for update click icon
    $scope.editServices = function () 
        {
        //$scope.textbox ngmodel=this
            var service_Id = this.id;

            $http.get('http://localhost:3200/api/ServicesViews/'+service_Id)
        .success(function (res) {
            console.log(res);

            $scope.pushTextServices = res;

            var pushTextServices = $scope.pushTextServices;

            $scope.ID = pushTextServices.Id;
            $scope.serviceName = pushTextServices.ServiceName;
            $scope.salePrise = pushTextServices.SalesPrice;
            $scope.purchasePrise = pushTextServices.PurchasePrice;
            $scope.unit = pushTextServices.Unit;
            $scope.category = pushTextServices.Category_ID;
            $scope.purchaseTax = pushTextServices.PurchaseTax_ID;
            $scope.salesTax = pushTextServices.SalesTax_ID;
            $scope.allowSales = pushTextServices.AllowSales;
            $scope.allowPurchase = pushTextServices.AllowPurchase;
            $scope.description = pushTextServices.Description;

            $scope.btnSave = false;
            $scope.btnUpdate = true;
        })
            .success(function (responce) {
                $http.get('http://localhost:3200/api/ServicesViews')
       .success(function (res) {

           $scope.getServices = res;
       });
            })
    }



    //code for update button
    $scope.updateServices = function () {

        var ID = this.ID;
        var serviceName = this.serviceName;
        var salePrise = this.salePrise;
        var purchasePrise = this.purchasePrise;
        var unit = this.unit;
        var category = this.category;
        var purchaseTax = this.purchaseTax;
        var salesTax = this.salesTax;
        var allowSales = this.allowSales;
        var allowPurchase = this.allowPurchase;
        var description = this.description;

        alert(ID);
        //condition will check if user has left any field vacant
        if (serviceName == null || salePrise == null || purchasePrise == null || unit == null || unit == "" || category == null || category == "" || purchaseTax == null || purchaseTax == "" || salesTax == null || salesTax == "" || allowSales == null || allowSales == "" || allowPurchase == null || allowPurchase == "" || description == null) {
            alert("fill the info");
            return;
        }
        else
        {
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/Services/" + ID,
                crossdomain: true,
                data: {


                    Id: ID,
                    ServiceName: serviceName,
                    SalesPrice: salePrise,
                    PurchasePrice: purchasePrise,
                    Unit: unit,
                    Category_ID: category,
                    PurchaseTax_ID: purchaseTax,
                    SalesTax_ID: salesTax,
                    AllowSales: allowSales,
                    AllowPurchase: allowPurchase,
                    Description: description,


                },

                headers: { 'content-type': 'application/json' }
            })

            .success(function (responce) {
                alert('record updated successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/ServicesViews/')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
        console.log(res);
        $scope.getServices = res;

        $scope.btnSave = true;
        $scope.btnUpdate = false;

    })

            })
        }
        this.serviceName = " ";
        this.salePrise = " ";
        this.purchasePrise = " ";
        this.unit = "";
        this.category = "";
        this.purchaseTax = "";
        this.salesTax = "";
        this.allowSales = "";
        this.allowPurchase = "";
        this.description = " ";
    };





    //delete button
    $scope.deleteServices = function () {
        //$scope.textbox ngmodel=this
        var service_Id = this.id;

        $http.get('http://localhost:3200/api/ServicesViews/' + service_Id)
    .success(function (res) {
       

        $scope.deleteTextServices = res;


        var deleteTextServices = $scope.deleteTextServices;

        //=database
        var ID = deleteTextServices.Id;
        var serviceName = deleteTextServices.ServiceName;
        var salePrise = deleteTextServices.SalesPrice;
        var purchasePrise = deleteTextServices.PurchasePrice;
        var unit = deleteTextServices.Unit;
        var category = deleteTextServices.Category_ID;
        var purchaseTax = deleteTextServices.PurchaseTax_ID;
        var salesTax = deleteTextServices.SalesTax_ID;
        var allowSales = deleteTextServices.AllowSales;
        var allowPurchase = deleteTextServices.AllowPurchase;
        var description = deleteTextServices.Description;
        var status = false;

        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Services/" + ID,
            crossdomain: true,
            data: {

                //db=var
                Id:ID,
                ServiceName: serviceName,
                SalesPrice: salePrise,
                PurchasePrice: purchasePrise,
                Unit: unit,
                Category_ID: category,
                PurchaseTax_ID: purchaseTax,
                SalesTax_ID: salesTax,
                AllowSales: allowSales,
                AllowPurchase: allowPurchase,
                Description: description,
                Status:status,
                 
            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/ServicesViews/')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
      
        $scope.getServices = res;
    })
            })

    })
    }

    //code to  get units table
    $http.get('http://localhost:3200/api/View_Unit')
      .success(function (res) {
          $scope.getUnits = res;
      })

    //code to  get Category table
    $http.get('http://localhost:3200/api/View_Categories')
     .success(function (res) {
         $scope.getCategories = res;
     })

    //code to  get taxes table
    $http.get('http://localhost:3200/api/Taxes')
      .success(function (res) {
          $scope.getTaxs = res;
    })

});//last
