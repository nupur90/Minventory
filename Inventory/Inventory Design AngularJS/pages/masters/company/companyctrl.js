var scotchApp = angular.module('scotchApp.company', ['ngRoute']);
scotchApp.filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (dt2) {
            var key = dt2[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(dt2);
            }
        });
        return output;
    };
})
scotchApp.controller('companyController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.user = "Masters Company Data";
      $scope.savebtn = true;

 
      $scope.upbtn = false;
      $scope.savebtn = true;

    
    //code for GET City
    $http.get('http://localhost:3200/api/Country_State_City_View')
       .success(function (res) {
           console.log(res);
           $scope.getCity = res;
         //  alert(res)
           var x = res.length;
           $scope.x = x;
           $scope.upbtn = false;
           $scope.savebtn = true;
           
       })



    //POST
    //code for save controller


    $scope.save = function () {
        var Username = this.username;
        var Address = this.address;
        var City = this.city;
        var State = this.state;
        var Contact = this.contact;
        var Pin = this.pin;
        var Email = this.email;
        var Country = this.country;
        var Tel = this.tel;
        var Website = this.website;
        var Vat = this.vat;
        var Tin = this.tin;
        var Lbt = this.lbt;
        var St = this.st;
        var Pan = this.pan;
        var Tan = this.tan;
        var License = this.license;
        var Cin = this.cin;
        var Other = this.other;
        var Service = this.service;
        var Financial = this.financial;
        var Booking = this.booking;
        var Symbol = this.symbol;
        var Char = this.char;

        var status = true;
        if (this.checkTerm == true) {
            var agreeTermsAndCondition = true;
        }
        else
            var agreeTermsAndCondition = false;
       //alert(License);

       // condition will check if user has left any field vacant
        if (Username == null || Address == null || City == null || City == "" || State == null || State == "" || Contact == null || Pin == null || Email == null || Country == null || Country == "" || Tel == null || Website == null || Vat == null || Tin == null || Lbt == null || St == null || Pan == null || Tan == null || License == null || Cin == null || Other == null || Service == null || Financial == null || Booking == null || Symbol == null || Char == null) {
            alert("Fill the info");
        }

        else {
            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Companies",
                crossDomain: true,
                data: {

                    City_ID: City,
                    Name: Username,
                    ContactNumber: Contact,
                    EmailID: Email,
                    TelephoneNumber: Tel,
                    Address: Address,
                    State_ID: State,
                    PinCode: Pin,
                    Country_ID: Country,
                    Website: Website,
                    VATNumber: Vat,
                    LBTNumber: Lbt,
                    PANNumber: Pan,
                    LicenseNumber: License,
                    TINNo: Tin,
                    STNo: St,
                    TANNumber: Tan,
                    CINNumber: Cin,
                    Other: Other,
                    Service: Service,
                    Financial: Financial,
                    Booking: Booking,
                    CurrencySymbol: Symbol,
                    CurrencyChar: Char,
                    AgreeTermsAndCondition: agreeTermsAndCondition,
                    Status: status,

                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/Companies')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         console.log(res);
         $scope.getCompany = res;



     });

             })
        }
            this.username = "";
            this.address = "";
            this.city = "";
            this.state = "";
            this.contact = "";
            this.pin = "";
            this.email = "";
            this.country = "";
            this.tel = "";
            this.website = "";
            this.vat = "";
            this.tin = "";
            this.lbt = "";
            this.st = "";
            this.pan = "";
            this.tan = "";
            this.license = "";
            this.cin = "";
            this.other = "";
            this.service = "";
            this.financial = "";
            this.booking = "";
            this.symbol = "";
            this.char = "";
            $scope.checkTerm =false;
            $scope.signup1.$setPristine();
    };





    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        this.username = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.contact = "";
        this.pin = "";
        this.email = "";
        this.country = "";
        this.tel = "";
        this.website = "";
        this.vat = "";
        this.tin = "";
        this.lbt = "";
        this.st = "";
        this.pan = "";
        this.tan = "";
        this.license = "";
        this.cin = "";
        this.other = "";
        this.service = "";
        this.financial = "";
        this.booking = "";
        this.symbol = "";
        this.char = "";

        $scope.checkTerm = false;


        $http.get('http://localhost:3200/api/Taxes')
     .success(function (res) {
         $scope.getCategories = res;

         $scope.savebtn = true;
         $scope.upbtn = false;

         $scope.signup1.$setPristine();
     })
    }
   
});
