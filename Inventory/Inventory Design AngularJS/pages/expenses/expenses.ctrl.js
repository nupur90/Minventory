var scotchApp = angular.module('scotchApp.expenses', ['ngRoute']);
scotchApp.controller('expensesController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.expenses = "Masters Expenses Data";

   
    //code for GET
    $http.get('http://localhost:3200/api/Expens')
       .success(function (res) {
           console.log(res);
           $scope.getExpens = res;
                
           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.upbtn = false;
           $scope.savebtn = true;

       })
   
       
    //POST
    //code for save controller


    $scope.save = function ()
    {
        var Description = this.description;
        var AmounT = this.amount;
        var DatE = this.date;
        var status = true;

        alert(DatE);

        //condition will check if user has left any field vacant
        if (Description == null || AmounT == null || DatE == null)
        {
            alert("Insert all Field");
            return;
        }
      
        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Expens",
                crossDomain: true,
                data: {
                    Discription: Description,
                    Amount: AmounT,
                    Date: DatE,
                    Status:status
                     },
                headers: { 'Content-Type': 'application/json' }
                                })
             .success(function (responce) {
              

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/Expens')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         console.log(res);
         $scope.getExpens = res;
         alert('Expenses added successfully');
         //alert('record deleted succesfully');
        
     });
               
             })
      

        this.description = "";
        this.amount = "";
        this.date = "";
        $scope.signup1.$setPristine();
    };

    //DELETE
    //CODE FOR DELETE CONTROLLER
    $scope.deletetax = function () {
        //$scope.textbox ngmodel=this
        var Exp_Id = this.id;
       

        $http.get('http://localhost:3200/api/Expens/' + Exp_Id)
    .success(function (res) {
       // console.log(res);

        $scope.getExpenses = res;
        var getExpens = $scope.getExpenses;


        var ID = getExpens.Id;
        var Description = getExpens.description;
        var AmounT = getExpens.amount;
        var DatE = getExpens.date;
        var status = false;

     
        var status = false;
        //alert(Tax_Value)
       
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Expens/" + ID,
            crossdomain: true,
            data: {

                //db=var
               
                Id: ID,
                Discription: Description,
                Amount: AmounT,
                Date: DatE,
                Status: status,

            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/Expens/')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
        console.log(res);
        $scope.getExpens = res;
    })
            })

    })
    }

    //PUT
    //CODE FOR UPDATE CONTROLLER
    //this code will get the values from table of page and show them in textbox of same page
    $scope.update = function () {
        var expenses_Id = this.i;
       
       // alert(user_Id)
        $http.get('http://localhost:3200/api/Expens/' + expenses_Id)
    .success(function (res) {
         console.log(res);
        $scope.getupExpenss = res;
      
        var pushTextExpenses = $scope.getupExpenss;
        $scope.ID = pushTextExpenses.Id;
        $scope.description = pushTextExpenses.Discription;
        $scope.amount = pushTextExpenses.Amount;
        $scope.date = pushTextExpenses.Date;
        $scope.upbtn = true;
        $scope.savebtn = false;



    });
    

    };


    //CODE FOR UPDATESAVE CONTROLLER
    $scope.updateSave = function () {
        var ID = this.ID;
        var DiscriptioN = this.description;
        var AmounT = this.amount;
        var DatE = this.date;
       
       // alert(ID);
        //condition will check if user has left any field vacant
        if (DiscriptioN == null || AmounT == null || DatE == null) {
            alert("fill the info");
            return;
        }
        else
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Expens/" + ID,
            crossdomain: true,
            data: {
               ID:ID,
               Discription: DiscriptioN,
               Amount: AmounT,
               Date: DatE,
                Status:true,
               
            },
            headers: { 'content-type': 'application/json' }
        })
        .success(function (responce) {
            alert('Record updated successfully !!!')

            //further code will refresh the current database data on page
            $http.get('http://localhost:3200/api/Expens')
               .success(function (res) {
                        var x = res.length;
                        $scope.x = x;
                        console.log(res);
                        $scope.getExpens = res;
                        $scope.upbtn = false;
                        $scope.savebtn = true;
                        })
        })

     this.description = "";
        this.amount = "";
        this.date = "";

        $scope.signup1.$setPristine();
    };



    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        this.description = null;
        this.amount = null;
        this.date = null;

        $scope.signup1.$setPristine();

        $http.get('http://localhost:3200/api/Expens')
     .success(function (res) {
         $scope.getExpens = res;

         $scope.savebtn = true;
         $scope.upbtn = false;


     })
    }

});
