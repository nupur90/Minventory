var scotchApp = angular.module('scotchApp.percentage', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('percentageController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Percent = "Percentages";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.btnsave = true;
    $scope.btnupdate = false;
    //code for GET
    $http.get('http://localhost:3200/api/Percentages')
       .success(function (res) {
          // console.log(res);
           $scope.getPercentage = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })
    $scope.getdata=function()
    {
        $http.get('http://localhost:3200/api/Percentages')
     .success(function (res) {
         //console.log(res);
         $scope.getPercentage = res;

         //to get number of records

         var x = res.length;
         $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

         $scope.btnsave = true;
         $scope.btnupdate = false;
     })

    }

    //POST
    //code for save 

    $scope.save = function () {

        var percentage = this.percentage;
        var status = true;

        this.percentage = null;
       

        //condition will check if user has left any field vacant
        if (percentage == null) {
            alert("fill the info");
            return;
        }

        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Percentages",
                crossDomain: true,
                data: {
                    //DataFiledName:VariableName
                    ProfitPercentage: percentage,
                   Status:status

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/Percentages')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
        // console.log(res);
         $scope.getUnit = res;
     });
                 $scope.getdata();
             })

        $scope.signup1.$setPristine();
    };

    ////value passing to the textbox
    $scope.editUnits = function () {


        var percentage_Id = this.id;



        $http.get('http://localhost:3200/api/Percentages/' + percentage_Id)
     .success(function (res) {
         console.log(res);
         $scope.pushTextUnits = res;


         var pushTextUnits = $scope.pushTextUnits;
         $scope.id = pushTextUnits.Id;
         $scope.percentage = pushTextUnits.ProfitPercentage;
        

         $scope.btnsave = false;
         $scope.btnupdate = true;

     })
         .success(function (responce) {


             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/Percentages')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
               // console.log(res);
                $scope.getPercentage = res;

            });

         })
    }

    //PUT
    $scope.update = function () {
        var percentage_Id = this.id;

        var percentage = this.percentage;
       
        

        this.id = null;
        this.percentage = null;
       
        //condition will check if user has left any field vacant
        if (percentage == null) {
            alert("fill the info");
            return;
        }

        else
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Percentages/" + percentage_Id,
            crossDomain: true,
            data: {
                ID: percentage_Id,

                ProfitPercentage: percentage
               

            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {

             alert('data updated successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/Percentages')
 .success(function (res) {
     var x = res.length;
     $scope.x = x;
     //console.log(res);
     $scope.getPercentage = res;



     $scope.btnsave = true;
     $scope.btnupdate = false;
 });
         })

        $scope.signup1.$setPristine();

    };

    //DELETE
    $scope.deleteUnit = function () {
        var percentage_Id = this.id;


        $http.get('http://localhost:3200/api/Percentages/' + percentage_Id)
     .success(function (res) {
       //  console.log(res);
         $scope.deletePercentage = res;


         var deletePercentage = $scope.deletePercentage;

         var ProfitPercentage = deletePercentage.ProfitPercentage;
        
         var status =false;

         var request = $http({
             //method: "delete",
             method: "put",
             url: "http://localhost:3200/api/Percentages/" + percentage_Id,
             crossDomain: true,
             data: {
                 ID: percentage_Id,
                 ProfitPercentage: ProfitPercentage,
                
                 Status:status,
             },
             headers: { 'Content-Type': 'application/json' }
         })
         .success(function (responce) {

             alert('Data Deleted Successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/Percentages')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
               // console.log(res);
                $scope.getPercentage = res;
            });
         })
     })
    }


    //Empty fields
    $scope.cancelAndNew = function () {

        this.percentage = null;
        $scope.signup1.$setPristine();
      

        $scope.btnsave = true;
        $scope.btnupdate = false;

        $http.get('http://localhost:3200/api/Percentages')
      .success(function (res) {
         // console.log(res);
          $scope.getPercentage = res;
      });

    }

});