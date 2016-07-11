var scotchApp = angular.module('scotchApp.customers', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('customerController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Customers = "Customers";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.btnsave = true;
    $scope.btnupdate = false;
    //code for GET
    $http.get('http://localhost:3200/api/customer_view')
       .success(function (res) {
          // console.log(res);
           $scope.getCustomers = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })


    //code for GET CITY
    $http.get('http://localhost:3200/api/Country_State_City_View')
       .success(function (res) {
           console.log(res);
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
                url: "http://localhost:3200/api/customers",
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


                 $http.get('http://localhost:3200/api/customer_view')
            .success(function (res) {
                $scope.getCustomers = res;
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
    $scope.editCustomer = function () {


        var customer_Id = this.id;



        $http.get('http://localhost:3200/api/customer_view/' + customer_Id)
     .success(function (res) {
         console.log(res);
         $scope.pushTextCustomer = res;


         var pushTextCustomer = $scope.pushTextCustomer;


         $scope.id = pushTextCustomer.Id;
         $scope.name = pushTextCustomer.Name;
         $scope.city = pushTextCustomer.City_ID;
         $scope.contactNo = pushTextCustomer.ContactNumber;
         $scope.contactNo2 = pushTextCustomer.ContactNumber2;
         $scope.emailId = pushTextCustomer.EmailID;
         $scope.emailId2 = pushTextCustomer.EmailID2;
         $scope.vatNo = pushTextCustomer.VATNumber;
         $scope.tinNo = pushTextCustomer.TINNumber;
         $scope.street = pushTextCustomer.Street;
         $scope.area = pushTextCustomer.Area;
         $scope.pincode = pushTextCustomer.Pincode;
         $scope.note = pushTextCustomer.Note;

         $scope.btnsave = false;
         $scope.btnupdate = true;

     })
         .success(function (responce) {


             //further code will refresh the current database data on page

             $http.get('http://localhost:3200/api/customer_view')
        .success(function (res) {
            $scope.getCustomers = res;
        });

         })
    }

    //PUT
    $scope.update = function () {
        var customer_Id = this.id;


        var Name = this.name;
        var City_ID = this.city;
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


       

        ////condition will check if user has left any field vacant
        //if (this.city == null) {
        //    alert("Please Select the City");
        //    return;
        //}
        //condition will check if user has left any field vacant
        if (Name == null || City_ID == null || City_ID == "" || ContactNo == null || ContactNo2 == null || EmailId == null || EmailId2 == null || VatNo == null || TinNo == null || Street == null || Area == null || Pincode == null || Note == null) {
            alert("fill the info");
            return;
        }
        else
        {
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/customers/" + customer_Id,
                crossDomain: true,
                data: {
                    ID: customer_Id,


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

                 alert('data updated successfully...');

                
                 //further code will refresh the current database data on page

                 $http.get('http://localhost:3200/api/customer_view')
         .success(function (res) {
             console.log(res);
             $scope.getCustomers = res;



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
        $scope.deleteCustomer = function () {
        var customer_Id = this.id;


        $http.get('http://localhost:3200/api/customer_view/' + customer_Id)
   .success(function (res) {
       //console.log(res);
       $scope.getCustomer = res;


       var getCustomer = $scope.getCustomer;

       var Name = getCustomer.Name;;
       var City_ID = getCustomer.City_ID;
       var ContactNo = getCustomer.ContactNumber;
       var ContactNo2 = getCustomer.ContactNumber2;
       var EmailId = getCustomer.EmailID;
       var EmailId2 = getCustomer.EmailID2;
       var VatNo = getCustomer.VATNumber;
       var TinNo = getCustomer.TINNumber;
       var Street = getCustomer.Street;
       var Area = getCustomer.Area;
       var Pincode = getCustomer.Pincode;
       var Note = getCustomer.Note;
       var Status = false;





       var request = $http({
           method: "put",
           url: "http://localhost:3200/api/customers/" + customer_Id,
           crossDomain: true,
           data: {
               ID: customer_Id,


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

            $http.get('http://localhost:3200/api/customer_view')
    .success(function (res) {
        console.log(res);
        $scope.getCustomers = res;


        $scope.btnsave = true;
        $scope.btnupdate = false;
    });
        })

       //}

   })
    }
       
    //Empty fields
        $scope.cancelAndNew = function () {

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

            $http.get('http://localhost:3200/api/customer_view')
       .success(function (res) {
           console.log(res);
           $scope.getCustomers = res;
       });


        }

});