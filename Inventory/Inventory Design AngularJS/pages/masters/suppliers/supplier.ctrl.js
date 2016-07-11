var scotchApp = angular.module('scotchApp.suppliers', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('suppliersController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.units = "Masters suppliers Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.btnsave = true;
    $scope.btnupdate = false;
    //code for GET
    $http.get('http://localhost:3200/api/supplier_view')
       .success(function (res) {
           //console.log(res);
           $scope.getSuppliers = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })

    //code for GET CITY
    $http.get('http://localhost:3200/api/Country_State_City_View')
       .success(function (res) {
           //console.log(res);
           $scope.getCity = res;

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
        var City_Id = this.city;
        var ContactNo = this.contactNo;
        var ContactNo2 = this.contactNo2;
        var EmailId = this.emailId;
        var EmailId2 = this.emailId2;
        var VatNo = this.vatNo;
        var TinNo = this.tinNo;
        var Street = this.street;
        var Area = this.area;
        var Pincode = this.pincode;
        var Note = this.note;
        var Status = true;
       
        //condition will check if user has left any field vacant
        if (Name == null || City_Id == null || City_Id == "" || ContactNo == null || ContactNo2 == null || EmailId == null || EmailId2 == null || VatNo == null || TinNo == null || Street == null || Area == null || Pincode == null || Note == null) {
            alert("fill the info");
            return;
        }

        else {
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/suppliers",
                crossDomain: true,
                data: {
                    //DataFiledName:VariableName
                    Name: Name,
                    City_ID: City_Id,
                    ContactNumber: ContactNo,
                    ContactNumber2: ContactNo2,
                    EmailID: EmailId,
                    EmailID2: EmailId2,
                    VATNumber: VatNo,
                    TINNumber: TinNo,
                    Street: Street,
                    Area: Area,
                    Pincode: Pincode,
                    Note: Note,
                    Status: Status,
                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');



                 //further code will refresh the current database data on page


                 $http.get('http://localhost:3200/api/supplier_view')
            .success(function (res) {
                $scope.getSuppliers = res;
            });
             })
        }
        this.name = null;
        this.city = "";
        this.contactNo = null;
        this.contactNo2 = null;
        this.emailId = null;
        this.emailId2 = null;
        this.vatNo = null;
        this.tinNo = null;
        this.street = null;
        this.area = null;
        this.pincode = null;
        this.note = null;
        $scope.signup1.$setPristine();
    };

    ////value passing to the textbox
    $scope.editSupplier = function () {


        var Supplier_Id = this.id;



        $http.get('http://localhost:3200/api/Supplier_view/' + Supplier_Id)
     .success(function (res) {
         console.log(res);
         $scope.pushTextSupplier = res;


         var pushTextSupplier = $scope.pushTextSupplier;


         $scope.id = pushTextSupplier.Id;
         $scope.name = pushTextSupplier.Name;
         $scope.city = pushTextSupplier.City_ID;
         $scope.contactNo = pushTextSupplier.ContactNumber;
         $scope.contactNo2 = pushTextSupplier.ContactNumber2;
         $scope.emailId = pushTextSupplier.EmailID;
         $scope.emailId2 = pushTextSupplier.EmailID2;
         $scope.vatNo = pushTextSupplier.VATNumber;
         $scope.tinNo = pushTextSupplier.TINNumber;
         $scope.street = pushTextSupplier.Street;
         $scope.area = pushTextSupplier.Area;
         $scope.pincode = pushTextSupplier.Pincode;
         $scope.note = pushTextSupplier.Note;

         $scope.btnsave = false;
         $scope.btnupdate = true;

     })
         .success(function (responce) {


             //further code will refresh the current database data on page

             $http.get('http://localhost:3200/api/supplier_view')
        .success(function (res) {
            $scope.getSuppliers = res;
        });

         })
    }

    //PUT
    $scope.update = function () {
        var supplier_Id = this.id;


        var Name = this.name;
        var City_Id = this.city;
        var ContactNo = this.contactNo;
        var ContactNo2 = this.contactNo2;
        var EmailId = this.emailId;
        var EmailId2 = this.emailId2;
        var VatNo = this.vatNo;
        var TinNo = this.tinNo;
        var Street = this.street;
        var Area = this.area;
        var Pincode = this.pincode;
        var Note = this.note;
        var Status = true;


        if (Name == null || City_Id == null || City_Id == "" || ContactNo == null || ContactNo2 == null || EmailId == null || EmailId2 == null || VatNo == null || TinNo == null || Street == null || Area == null || Pincode == null || Note == null) {
            alert("fill the info");
            return;
        }
        else {
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/suppliers/" + supplier_Id,
                crossDomain: true,
                data: {
                    ID: supplier_Id,


                    Name: Name,
                    City_ID: City_Id,
                    ContactNumber: ContactNo,
                    ContactNumber2: ContactNo2,
                    EmailID: EmailId,
                    EmailID2: EmailId2,
                    VATNumber: VatNo,
                    TINNumber: TinNo,
                    Street: Street,
                    Area: Area,
                    Pincode: Pincode,
                    Note: Note,
                    Status: Status,


                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {

                 alert('data updated successfully...');


                 //further code will refresh the current database data on page

                 $http.get('http://localhost:3200/api/supplier_view')
         .success(function (res) {
            // console.log(res);
             $scope.getSuppliers = res;



             $scope.btnsave = true;
             $scope.btnupdate = false;
         });
             })

        }
        this.id = null;
        this.name = null;
        this.city = "";
        this.contactNo = null;
        this.contactNo2 = null;
        this.emailId = null;
        this.emailId2 = null;
        this.vatNo = null;
        this.tinNo = null;
        this.street = null;
        this.area = null;
        this.pincode = null;
        this.note = null;
        $scope.signup1.$setPristine();
    };

    //DELETE
    $scope.deleteSupplier = function () {
        var supplier_Id = this.id;


        $http.get('http://localhost:3200/api/Supplier_view/' + supplier_Id)
   .success(function (res) {
       //console.log(res);
       $scope.getSupplier = res;
       var getSupplier = $scope.getSupplier;


       var Name = getSupplier.Name;
       var City_ID = getSupplier.City_ID;
       var ContactNo = getSupplier.ContactNumber;
       var ContactNo2 = getSupplier.ContactNumber2;
       var EmailId = getSupplier.EmailID;
       var EmailId2 = getSupplier.EmailID2;
       var VatNo = getSupplier.VATNumber;
       var TinNo = getSupplier.TINNumber;
       var Street = getSupplier.Street;
       var Area = getSupplier.Area;
       var Pincode = getSupplier.Pincode;
       var Note = getSupplier.Note;
       var Status = false;


       var request = $http({
           method: "put",
           url: "http://localhost:3200/api/suppliers/" + supplier_Id,
           crossDomain: true,
           data: {
               ID: supplier_Id,
               Name: Name,
               City_ID: City_ID,
               ContactNumber: ContactNo,
               ContactNumber2: ContactNo2,
               EmailID: EmailId,
               EmailID2: EmailId2,
               VATNumber: VatNo,
               TINNumber: TinNo,
               Street: Street,
               Area: Area,
               Pincode: Pincode,
               Note: Note,
               Status: Status,


           },
           headers: { 'Content-Type': 'application/json' }
       })
              .success(function (responce) {

                  alert('Data Deleted Successfully...');


                  //further code will refresh the current database data on page

                  $http.get('http://localhost:3200/api/supplier_view')
          .success(function (res) {
             // console.log(res);
              $scope.getSuppliers = res;



              $scope.btnsave = true;
              $scope.btnupdate = false;
          });
              })

   })

    }

    //Empty fields
    $scope.cancelAndNew = function () {

        this.id = null;
        this.name = null;
        this.city = "";
        this.contactNo = null;
        this.contactNo2 = null;
        this.emailId = null;
        this.emailId2 = null;
        this.vatNo = null;
        this.tinNo = null;
        this.street = null;
        this.area = null;
        this.pincode = null;
        this.note = null;

        $scope.btnsave = true;
        $scope.btnupdate = false;

        $scope.signup1.$setPristine();


        $http.get('http://localhost:3200/api/supplier_view')
     .success(function (res) {
        // console.log(res);
         $scope.getSuppliers = res;
     })

    };

});