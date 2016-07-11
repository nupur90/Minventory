var scotchApp = angular.module('scotchApp.Uconversion', ['ngRoute']);
scotchApp.controller('UconController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.UCon = "Masters Unit Conversion Data";

    $scope.upbtn = false;
    $scope.savebtn = true;
    //code for GET
    $http.get('http://localhost:3200/api/View_Unit')
       .success(function (res) {
           $scope.upbtn = false;
           $scope.savebtn = true;
           console.log(res);
           $scope.getUnit = res;

           var x = res.length;
          // $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
         

       })
    $scope.aa=function()
    {
        alert("Hi Buddy")
    }
    //code for GET
    $http.get('http://localhost:3200/api/View_New_Units')
       .success(function (res) {
           $scope.upbtn = false;
           $scope.savebtn = true;
           console.log(res);
           $scope.getNewUnit = res;

           var x = res.length;
           // $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
          

       })

    //POST
    //code for save controller


    $scope.save = function () {
        var Fquant = this.fquant;
        var Funit = this.funit;
        var Tquant = this.tquant;
        var Tunit = this.tunit;
        var Status = true;

        //condition will check if user has left any field vacant
        if (Fquant == null || Funit == null || Funit == "" || Tquant == null || Tunit == null || Tunit == "") {
            alert("Insert all Field");
            return;
        }

        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/NewUnits",
                crossDomain: true,
                data: {
                    FromQuantity: Fquant,
                    FromUnit: Funit,
                    ToQuantity: Tquant,
                    ToUnit: Tunit,
                    Status:status,

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/View_New_Units')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         //console.log(res);
         $scope.getNewUnit = res;



     });
             })
        this.fquant = null;
        this.funit = "";
        this.tquant = null;
        this.tunit = "";
        $scope.signup1.$setPristine();
    };

    //code for cancel
    $scope.cancel = function () {

        this.fquant = null;
        this.funit = "";
        this.tquant = null;
        this.tunit = "";
        $scope.signup1.$setPristine();
    };


    //DELETE
    //CODE FOR DELETE CONTROLLER
    $scope.deleteunit = function () {
        //$scope.textbox ngmodel=this
        var unit_Id = this.Id;


        $http.get('http://localhost:3200/api/View_New_Units/' + unit_Id)
    .success(function (res) {
        //console.log(res);

        $scope.getUnit = res;
        var getUnit = $scope.getUnit;


        var ID = getUnit.Id;
        var FquanT = getUnit.FromQuantity;
        var FuniT = getUnit.FromUnit;
        var TquanT = getUnit.ToQuantity;
        var TuniT = getUnit.ToUnit;
              var status = false;
       
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/NewUnits/" + ID,
            crossdomain: true,
            data: {

                //db=var

                Id: ID,
                FromQuantity: FquanT,
                FromUnit: FuniT,
                ToQuantity: TquanT,
                ToUnit:TuniT,
                Status: status,

            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_New_Units')
       .success(function (res) {
           $scope.getNewUnit = res;


       })
                $http.get('http://localhost:3200/api/View_Unit')
      .success(function (res) {
          $scope.getUnit = res;})
            })

    })
       
    }

    //PUT
    //CODE FOR UPDATE CONTROLLER
    //this code will get the values from table of page and show them in textbox of same page
   $scope.update = function () {
        var unit_Id = this.i;
       
       // alert(user_Id)
       $http.get('http://localhost:3200/api/View_New_Units/' + unit_Id)
    .success(function (res) {
         console.log(res);
        $scope.getupunit = res;
      
        var pushTextUnit = $scope.getupunit;
        $scope.ID = pushTextUnit.Id;
        $scope.upfquant = pushTextUnit.FromQuantity;
        $scope.upfunit = pushTextUnit.FromUnit;
        $scope.uptquant = pushTextUnit.ToQuantity;
        $scope.uptunit = pushTextUnit.ToUnit;
     
        $scope.upbtn = true;
        $scope.savebtn = false;



    });
    

    };

    //CODE FOR UPDATESAVE CONTROLLER
   $scope.updateSave = function () {
       var ID = this.ID;
       var FquanT = this.upfquant;
       var FuniT = this.upfunit;
       var TquanT = this.uptquant;
       var TuniT = this.uptunit;
       var Status = true;

        // alert(ID);
        //condition will check if user has left any field vacant
       if (FquanT == null || FuniT == null || FuniT == "" || TquanT == null || TuniT == null || TuniT == "") {
            alert("fill the info");
            return;
        }
        else
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/NewUnits/" + ID,
                crossdomain: true,
                data: {
                    ID: ID,
                    FromQuantity: FquanT,
                    FromUnit: FuniT,
                    ToQuantity: TquanT,
                    ToUnit: TuniT,
                    Status: status,

                },

                headers: { 'content-type': 'application/json' }
            })

            .success(function (responce) {
                alert('Record updated successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_New_Units')
                   .success(function (res) {
                       var x = res.length;
                       $scope.x = x;
                       console.log(res);
                       $scope.getNewUnit = res;
                       $scope.upbtn = false;
                       $scope.savebtn = true;
                     
                   })
            })

        


    };



    //code for PASSWORD CHECK 
    $scope.passCheck = function () {
        var password = this.test;
        var password_c = this.test1;

        //alert(password,password_c)
        if (password == password_c) {
            var x = "Password Match"
            $scope.x = x;
        }
        else {
            var x = "Password Not Match"
            $scope.x = x;
        };
    };
});
