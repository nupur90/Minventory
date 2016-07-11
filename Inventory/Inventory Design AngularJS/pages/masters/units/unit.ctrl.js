var scotchApp = angular.module('scotchApp.units', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('unitController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.units = "Masters Units Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.btnsave = true;
    $scope.btnupdate = false;
    //code for GET
    $http.get('http://localhost:3200/api/View_Unit')
       .success(function (res) {
          // console.log(res);
           $scope.getUnits = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })

    //POST
    //code for save 

    $scope.save = function () {
        var Name = this.name;
        var Description = this.description;

//condition will check if user has left any field vacant
        if (Name == null || Description == null) {
            alert("fill the info");
            return;
        }

        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/units",
                crossDomain: true,
                data: {
                    //DataFiledName:VariableName
                    Name: Name,
                    Description: Description,

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/View_Unit')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
        /// console.log(res);
         $scope.getUnits = res;
     });
             })
        this.name = null;
        this.description = null;
        $scope.signup1.$setPristine();
    };

    ////value passing to the textbox
    $scope.editUnits = function () {


        var unit_Id = this.id;



        $http.get('http://localhost:3200/api/View_Unit/' + unit_Id)
     .success(function (res) {
         console.log(res);
         $scope.pushTextUnits = res;


         var pushTextUnits = $scope.pushTextUnits;
         $scope.id = pushTextUnits.ID;
         $scope.name = pushTextUnits.Name;
         $scope.description = pushTextUnits.Description;

         $scope.btnsave = false;
         $scope.btnupdate = true;

     })
         .success(function (responce) {


             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/units')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
                console.log(res);
                $scope.getUnits = res;

            });

         })
    }

    //PUT
    $scope.update = function () {
        var unit_Id = this.id;

        var Name = this.name;
        var Description = this.description;
        

        this.id = null;
        this.name = null;
        this.description = null;

        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/units/" + unit_Id,
            crossDomain: true,
            data: {
                ID: unit_Id,

                Name: Name,
                Description: Description,

            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {

             alert('data updated successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/View_Unit')
 .success(function (res) {
     var x = res.length;
     $scope.x = x;
     //console.log(res);
     $scope.getUnits = res;



     $scope.btnsave = true;
     $scope.btnupdate = false;
 });
         })

        $scope.signup1.$setPristine();
    };

    //DELETE
    $scope.deleteUnit = function () {
        var unit_Id = this.id;


        $http.get('http://localhost:3200/api/View_Unit/' + unit_Id)
     .success(function (res) {
         console.log(res);
         $scope.getUnitss = res;


         var getUnits = $scope.getUnitss;

         var Name = getUnits.Name;
         var Description = getUnits.Description;
         var status =false;

         var request = $http({
             //method: "delete",
             method: "put",
             url: "http://localhost:3200/api/units/" + unit_Id,
             crossDomain: true,
             data: {
                 ID: unit_Id,
                 Name: Name,
                 Description: Description,
                 Status:status,
             },
             headers: { 'Content-Type': 'application/json' }
         })
         .success(function (responce) {

             alert('Data Deleted Successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/View_Unit')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
                //console.log(res);
                $scope.getUnits = res;
            });
         })
     })
    }


    //Empty fields
    $scope.cancelAndNew = function () {

        this.name = null;
        this.description = null;

        $scope.btnsave = true;
        $scope.btnupdate = false;

        $scope.signup1.$setPristine();

        $http.get('http://localhost:3200/api/units')
      .success(function (res) {
          console.log(res);
          $scope.getUnits = res;
      });

    }
});