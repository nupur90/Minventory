var scotchApp = angular.module('scotchApp.TaxPolicy', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('TaxPolicyController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.taxes = "Tax Policy Data";
    $scope.btnSave = true;
    $scope.btnUpdate = false;
    
    //code for GET
    $http.get('http://localhost:3200/api/View_TaxPolicy')
       .success(function (res) {
           $scope.getTaxPolicy = res;

           $scope.btnSave = true;
          // console.log("adsasfd=s" + $scope.getTaxPolic);
         //  alert($scope.getTaxPolic);

       })






    //PUT
    //this code will get the values from table of page and show them in textbox of same page
    //code for update click icon
    $scope.editTaxpolicy = function () {
        
        $scope.btnSave = false;
        $scope.btnUpdate = true;

        var taxpolicy_Id = this.id;
       
      
        $http.get('http://localhost:3200/api/View_TaxPolicy/' + taxpolicy_Id)
         .success(function (res) {
        console.log(res);

        $scope.pushTextTaxPolicy = res;
        var pushTextTaxpolicy = $scope.pushTextTaxPolicy;

        //ngmodel=database
        $scope.ID = pushTextTaxpolicy.Id;
        $scope.name = pushTextTaxpolicy.group_name;
        $scope.Purpose = pushTextTaxpolicy.purpose;
        $scope.Taxess = pushTextTaxpolicy.taxes_id;
        //alert('tID'+$scope.Taxess);
       
         })

            
    }



       
    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        this.name = " ";
        this.Taxess = " ";
        this.Purpose = " ";


         $scope.btnSave = true;
         $scope.btnUpdate = false;
     
    }

    //code to  get taxes table
    $http.get('http://localhost:3200/api/View_Taxe')
      .success(function (res) {
          $scope.getTaxs = res;
      })


    //POST
    //code for save controller


    $scope.save = function () {
        var group_name = this.name;
        var purpose = this.Purpose;
        var tid= this.Taxess;
        
        var Status = true;

        //condition will check if user has left any field vacant
        if (group_name == null || purpose == null || tid  == "null" ) {
            alert("Insert all Field");
            return;
        }

        else
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/TaxPolicies",
                crossDomain: true,
                data: {
                    group_name: group_name,
                    purpose: purpose,
                    taxes_id: tid,
                    

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 $http.get('http://localhost:3200/api/View_TaxPolicy')
        .success(function (res) {
            $scope.getTaxPolicy = res;

            
            // console.log("adsasfd=s" + $scope.getTaxPolic);
            //  alert($scope.getTaxPolic);

     })
             })
        this.name = null;
        this.ID = "";
        this.Taxess = null;
        
        $scope.signup1.$setPristine();
    };

    //CODE FOR UPDATESAVE CONTROLLER
    $scope.updateSave = function () {
        var ID = this.ID;
        var g_name = this.name;
        var purpose = this.Purpose;
        var tid = this.Taxess
        var Status = true;

        // alert(ID);
        //condition will check if user has left any field vacant
        if (g_name == null || purpose == null || tid == "null" ) {
            alert("fill the info");
            return;
        }
        else
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/TaxPolicies/" + ID,
                crossdomain: true,
                data: {
                    ID: ID,
                    group_name: g_name,
                    purpose: purpose,
                    taxes_id: tid,
                    Status: Status

                },

                headers: { 'content-type': 'application/json' }
            })

            .success(function (responce) {
                
                alert('Record updated successfully !!!');

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_TaxPolicy')
                   .success(function (res) {
                       var x = res.length;
                       $scope.x = x;
                       console.log(res);
                       $scope.getTaxPolicy = res;
                       $scope.upbtn = false;
                       $scope.savebtn = true;

                   })
            })




    };
    //DELETE
    $scope.deleteCategories = function () {
        var tid = this.id;


        $http.get('http://localhost:3200/api/View_TaxPolicy/' + tid)
     .success(function (res) {
         console.log(res);
         $scope.getcategoriess = res;


         var deletecategories = $scope.getcategoriess;

         var ID = deletecategories.id;
         var name = deletecategories.group_name;
         var purpose = deletecategories.purpose;
         var taxid = deletecategories.taxes_id;
         var status = false;

         var request = $http({
             //method: "delete",
             method: "delete",
             url: "http://localhost:3200/api/TaxPolicies/" +tid,
             crossDomain: true,
             data: {
                 //db=var
                 
             },
             headers: { 'Content-Type': 'application/json' }
         })
         .success(function (responce) {

             alert('Data Deleted Successfully...');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/View_TaxPolicy')
            .success(function (res) {
                var x = res.length;
                $scope.x = x;
                //console.log(res);
                $scope.getTaxPolicy = res;
            });
         })
     })
    }




























});//last