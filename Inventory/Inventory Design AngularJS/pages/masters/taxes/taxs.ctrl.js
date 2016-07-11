var scotchApp = angular.module('scotchApp.taxs', ['ngRoute']);
scotchApp.controller('taxsController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.taxes = "Masters Tax Data";
    $scope.upbtn = false;
    $scope.savebtn = true;

   
    //code for GET
    $http.get('http://localhost:3200/api/Taxes')
       .success(function (res) {
           console.log(res);
           $scope.upbtn = false;
           $scope.savebtn = true;
           $scope.getTaxs = res;
                
           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.upbtn =false ;
           $scope.savebtn = true;

       })
   
       
    //POST
    //code for save controller


    $scope.save = function ()
    {
        var Name = this.name;
        var Value = this.tax;
        var Description = this.description;
        var status = true;

        //condition will check if user has left any field vacant
        if (Name == null || Value == null || Description == null)
        {
            alert("Fill the Info");
            return;
        }
      
        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Taxes",
                crossDomain: true,
                data: {
                    Name: Name,
                    TaxValue: Value,
                    Description: Description,
                    Status:status
                     },
                headers: { 'Content-Type': 'application/json' }
                                })
             .success(function (responce) {
              

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/Taxes')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         console.log(res);
         $scope.getTaxs = res;
         alert('Tax added successfully');
         //alert('record deleted succesfully');
        
     });
               
                })
        this.name = " ";
        this.tax = " ";
        this.description = " ";
        $scope.signup1.$setPristine();

    };

    //DELETE
    //CODE FOR DELETE CONTROLLER
    $scope.deletetax = function () {
        //$scope.textbox ngmodel=this
        var tax_Id = this.id;
       

        $http.get('http://localhost:3200/api/Taxes/' + tax_Id)
    .success(function (res) {
        console.log(res);

        $scope.getTax = res;
        var getTax = $scope.getTax;


        var ID = getTax.Id;
        
        var TaxName = getTax.Name;
        var Tax_Value = getTax.TaxValue;
        var Description = getTax.Description;
        var status = false;
        //alert(Tax_Value)
       
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Taxes/" + ID,
            crossdomain: true,
            data: {

                //db=var
               
                Id: ID,
                Name: TaxName,
                TaxValue: Tax_Value,
                Description: Description,
                Status: status,

            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/Taxes/')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
        //console.log(res);
        $scope.getTaxs = res;
    })
            })

    })
       
    }

    //PUT
    //CODE FOR UPDATE CONTROLLER
    //this code will get the values from table of page and show them in textbox of same page
    $scope.update = function () {
        $scope.pid = true;
        $scope.ID = this.i;
        $scope.name = this.n;
        $scope.tax = this.t;
        $scope.description = this.d;

        $scope.upbtn = true;
        $scope.savebtn = false;

   
      
    };

    //CODE FOR UPDATESAVE CONTROLLER
    $scope.updateSave = function () {
        var ID = this.ID;
        var Name = this.name;
        var Tax_Value = this.tax;
        var Description = this.description;
       
       // alert(ID);
        //condition will check if user has left any field vacant
        if (Name == null || Tax_Value == null || Description == null) {
            alert("fill the info");
            return;
        }
        else
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Taxes/" + ID,
            crossdomain: true,
            data: {
               ID:ID,
               Name: Name,
               TaxValue: Tax_Value,
               Description: Description,
               
            },
            headers: { 'content-type': 'application/json' }
        })
        .success(function (responce) {

            //further code will refresh the current database data on page
            $http.get('http://localhost:3200/api/Taxes')
               .success(function (res) {
                        var x = res.length;
                        $scope.x = x;
                        console.log(res);
                        $scope.getTaxs = res;
                        $scope.upbtn = false;
                        $scope.savebtn = true;
                        })
      
        
        alert('Tax Record updated successfully !!!')
        })
        this.name = "";
        this.tax = "";
        this.description = "";
        $scope.signup1.$setPristine();
    };



    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        this.name = "";
        this.tax = "";
        this.description = "";


        $http.get('http://localhost:3200/api/Taxes')
     .success(function (res) {
         $scope.getCategories = res;

         $scope.savebtn = true;
         $scope.upbtn = false;

         $scope.signup1.$setPristine();
     })
    }

});
