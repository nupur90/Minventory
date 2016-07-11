var scotchApp = angular.module('scotchApp.countryStateCitys', ['ngRoute']);
scotchApp.controller('countryStateCitysController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    //$scope.user = "Masters User Data";

    //code for GET CountryStateCity
    $http.get('http://localhost:3200/api/country_State_City_view')
       .success(function (res) {

           //console.log(res);
           $scope.getcountryStateCity = res;

           $scope.upbtn = false;
           $scope.savebtn = false;         // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
          // $scope.saveCountrybtn = true;         // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.saveStatebtn = false;
           $scope.saveCitybtn = false;
       })

    //Get Country
    $http.get('http://localhost:3200/api/View_country')
         .success(function (res) {

             //console.log(res);
             $scope.getCountry = res;
         })


    //Get States
    $http.get('http://localhost:3200/api/View_State')
         .success(function (res) {

             //console.log(res);
             $scope.getState = res;
         })

    //Get City
    //$http.get('http://localhost:3200/api/View_City')
    //     .success(function (res) {

    //         //console.log(res);
    //         $scope.getCity = res;
    //     })


    //Blank Fields
    $scope.BlankFields = function () {
        var country = $scope.country;
       // var state = $scope.state;
        if (country == "" || country == null) {
            $scope.state = "";
            $scope.city = "";
            $scope.stateDiv = false;
            $scope.cityDiv = false;
            $scope.stateNameDiv = false;
            $scope.cityNameDiv = false;
            $scope.saveCountrybtn = false;

        }
        else {
            $scope.stateDiv = true;
            // this.state = "";
            $scope.stateNameDiv = false;
            // alert('state');
            $http.get('http://localhost:3200/api/View_state?country_Id=' + country)
            //$http.get('http://localhost:3200/api/View_State/' + country)
             .success(function (res) {
                 $scope.getState = res;
             })


        }
    }
    //check Other Country
    $scope.checkOtherCountry = function () {
        var country = $scope.country;
        if (country == "other") {
            $scope.countryNameDiv = true;
            $scope.stateDiv = false;
            $scope.cityDiv = false;
            $scope.cityNameDiv = false;
            $scope.saveCountrybtn = true;
            $scope.saveStatebtn = false;
            $scope.saveCitybtn = false;
        }
        else {
            $scope.countryNameDiv = false;
            $scope.saveStatebtn = false;
            $scope.saveCitybtn = false;
            $scope.saveCountrybtn = false;
        }

    }

    // check Other State
    $scope.checkOtherState = function () {
        //var country_ID = $scope.country;
        ////  alert(country);
        //$http.get('http://localhost:3200/api/View_State/' + country_ID)
        // .success(function (res) {
        //     $scope.getState = res;
        // })

        var state = $scope.state;
        var city = $scope.city;
        if (state == "other") {
            $scope.stateNameDiv = true;
            $scope.cityDiv = false;
            $scope.cityNameDiv = false;

            $scope.saveStatebtn = true;
            $scope.saveCountrybtn = false;
            $scope.saveCitybtn = false;

            if (city == "other") {
                //$scope.saveStatebtn = false;
               // $scope.saveStatebtn = true;
            }
            // alert('IFFFFF');
           
        }
        else if (state == "" || state == null) {
            $scope.stateNameDiv = false;
            $scope.cityDiv = false;
            $scope.cityDiv = false;
            $scope.cityNameDiv = false;
            $scope.saveCitybtn = false;
           // alert('else if');
        }
        else {
            $scope.stateNameDiv = false;
            $scope.cityDiv = true;
            //alert('else ');
            $scope.saveStatebtn = false;
        }

    }

    // check Other City
    $scope.checkOtherCity = function () {
        var city = $scope.city;
        if (city == "other") {
            $scope.cityNameDiv = true;
            // alert('other City');
            $scope.saveCountrybtn = false;
            $scope.saveStatebtn = false;
            $scope.saveCitybtn = true;
        }
        else if (city == null || city == "") {
            $scope.cityNameDiv = false;
            $scope.saveCitybtn = false;
        }
        else {
            $scope.cityNameDiv = false;
            $scope.saveCitybtn = false;
            $scope.saveCountrybtn = false;
        }
    }

    //POST
    //code for save controller
    $scope.saveCountry = function () {
        var country = $scope.country;
        if (country == "other") {
            var countryName = $scope.countryName;

            if ($scope.countryName == null || $scope.countryName == "") {
                alert('Please Enter country');
            } else {
                var request = $http({
                    method: "post",
                    url: "http://localhost:3200/api/countries",
                    crossDomain: true,
                    data: {

                        CountryName: countryName,
                        Status: true


                    },
                    headers: { 'Content-Type': 'application/json' }
                })
            .success(function (responce) {
                alert('Country Added successfully....');

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/country_State_City_view')
.success(function (res) {
    $scope.getcountryStateCity = res;
});

            })
                $scope.country = "";
                $scope.countryNameDiv = false;
                $scope.saveCountrybtn = false;
                $scope.signup1.$setPristine();


            }
        }

    }



        $scope.saveState = function () {
            var country = $scope.country;
            var countryName = $scope.countryName;
            var state = $scope.state;
            var stateName = $scope.stateName;

            if (country == "" || country == null) {
                alert('Please Select the Country First');

            }
            else if (state == "other") 
                if (stateName==null)
                {
                    alert("Enter the State");
                    return;
                }
                else{


                var request = $http({
                    method: "post",
                    url: "http://localhost:3200/api/states",
                    crossDomain: true,
                    data: {
                        StateName: stateName,
                        Country_ID:country,
                        Status: true


                    },
                    headers: { 'Content-Type': 'application/json' }
                })
            .success(function (responce) {
                alert('State Added successfully....');

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/country_State_City_view')
    .success(function (res) {
        $scope.getcountryStateCity = res;
    });
                $http.get('http://localhost:3200/api/View_state?country_Id=' + country)
                //$http.get('http://localhost:3200/api/View_State/' + country)
                 .success(function (res) {
                     $scope.getState = res;
                 })

            })
                $scope.country = "";
                $scope.state = "";
                $scope.saveStatebtn = false;
                $scope.stateNameDiv = false;
                $scope.signup1.$setPristine();
            }
        }


   


//    $scope.saveState = function () {
//        var country = $scope.country;
//        var countryName = $scope.countryName;
//        var state = $scope.state;
//        var stateName = $scope.stateName;

//        if (country == "" || country == null) {
//            alert('Please Select the Country First');

//        }
//        else if (state == "other") {
//            var request = $http({
//                method: "post",
//                url: "http://localhost:3200/api/states",
//                crossDomain: true,
//                data: {
//                    StateName: stateName,
//                    Country_ID:country,
//                    Status: true


//                },
//                headers: { 'Content-Type': 'application/json' }
//            })
//        .success(function (responce) {
//            alert('State Added successfully....');

//            //further code will refresh the current database data on page
//            $http.get('http://localhost:3200/api/country_State_City_view')
//.success(function (res) {
//    $scope.getcountryStateCity = res;
//});
//            $http.get('http://localhost:3200/api/View_state?country_Id=' + country)
//            //$http.get('http://localhost:3200/api/View_State/' + country)
//             .success(function (res) {
//                 $scope.getState = res;
//             })

//        })
//            $scope.stateName = "";
//            $scope.signup1.$setPristine();
//        }
//    }



        $scope.saveCity = function () {
            var country = $scope.country;
            var state = $scope.state;
            var cityName = $scope.cityName;
            //  alert(cityName);
            var city = $scope.city;
            if (cityName == null || cityName == "") {
                alert('Please Add the City');
            }
            else if (state == null || state == "") {
                alert('Please Select the State');
            }
            else if (city == "other") {
                var cityName = $scope.cityName;

                // alert('otherrrrrrrrrrr');
                //  alert(cityName);

                var request = $http({
                    method: "post",
                    url: "http://localhost:3200/api/cities",
                    crossDomain: true,
                    data: {
                        City1: cityName,
                        State_ID: state,
                        Status: true


                    },
                    headers: { 'Content-Type': 'application/json' }
                })
            .success(function (responce) {
                alert('City Added Successfully....');

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/country_State_City_view')
    .success(function (res) {
        $scope.getcountryStateCity = res;
    });
                $http.get('http://localhost:3200/api/View_state?country_Id=' + country)
                .success(function (res) {
                    $scope.getState = res;
                })

            })
                $scope.country = "";
                $scope.state = "";
                $scope.city = ""; 
                $scope.saveCitybtn = false;
                $scope.cityNameDiv = false;
                $scope.signup1.$setPristine();
            }
        }





//    $scope.saveCity = function () {
//        var country = $scope.country;
//        var state = $scope.state;
//        var cityName = $scope.cityName;
//      //  alert(cityName);
//        var city=$scope.city;
//        if(cityName==null||cityName==""){
//            alert('Please Add the City');
//        }
//        else if (state == null || state == "") {
//            alert('Please Select the State');
//        }
//        else if (city == "other") {
//            var cityName = $scope.cityName;

//           // alert('otherrrrrrrrrrr');
//          //  alert(cityName);

//            var request = $http({
//                method: "post",
//                url: "http://localhost:3200/api/cities",
//                crossDomain: true,
//                data: {
//                    City1:cityName,
//                    State_ID: state,
//                    Status: true


//                },
//                headers: { 'Content-Type': 'application/json' }
//            })
//        .success(function (responce) {
//            alert('City Added Successfully....');

//            //further code will refresh the current database data on page
//            $http.get('http://localhost:3200/api/country_State_City_view')
//.success(function (res) {
//    $scope.getcountryStateCity = res;
//});
//            $http.get('http://localhost:3200/api/View_state?country_Id=' + country)
//            .success(function (res) {
//                 $scope.getState = res;
//             })

//        })
//            $scope.cityName = "";
//            $scope.signup1.$setPristine();
//        }
//    }


    $scope.save = function () {
        var Uname = this.username;
        var Fname = this.fname;
        var Lname = this.lname;
        var Role = this.role;
        var Company_ID = this.company;
        var Contact = this.contact;
        var Email = this.email;
        var Birth = this.birth;

        // alert(Role)
        //condition will check if user has left any field vacant
        if (Uname == null || Fname == null || Lname == null || Role == null || Role == "" || Company_ID == null || Company_ID == "" || Contact == null || Email == null || Birth == null) {
            alert("Insert all Field");
            return;
        }

        else

            var request = $http({
                method: "post",
                url: "http://localhost:3200/api/Users",
                crossDomain: true,
                data: {

                    UserName: Uname,
                    FirstName: Fname,
                    LastName: Lname,
                    Role_ID: Role,
                    Company_ID: Company_ID,
                    ContactNumber: Contact,
                    EmailID: Email,
                    BirthDay: Birth,


                },
                headers: { 'Content-Type': 'application/json' }
            })
             .success(function (responce) {
                 alert('data added successfully');

                 //further code will refresh the current database data on page
                 $http.get('http://localhost:3200/api/View_Users')
     .success(function (res) {
         var x = res.length;
         $scope.x = x;
         // console.log(res);
         $scope.getUser = res;
     });

             })
        this.username = "";
        this.fname = "";
        this.lname = "";
        this.role = "";
        this.company = "";
        this.contact = "";
        this.email = "";
        this.birth = "";
        $scope.signup1.$setPristine();

    };


    //DELETE
    //CODE FOR DELETE CONTROLLER
    $scope.deleteuser = function () {
        //$scope.textbox ngmodel=this
        var user_Id = this.id;
        //  alert(user_Id);

        $http.get('http://localhost:3200/api/View_Users/' + user_Id)
    .success(function (res) {
        // console.log(res);

        $scope.getUserss = res;
        var getUser = $scope.getUserss;


        var ID = getUser.Id;

        var userName = getUser.UserName;
        var firstName = getUser.FirstName;
        var lastName = getUser.LastName;
        var role_ID = getUser.Role_ID;
        var company_ID = getUser.Company_ID;
        var contactNumber = getUser.ContactNumber;
        var emailID = getUser.EmailID;
        var birthDay = getUser.BirthDay;

        var status = false;
        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Users/" + ID,
            crossdomain: true,
            data: {

                //db=var

                ID: ID,
                UserName: userName,
                FirstName: firstName,
                LastName: lastName,
                Role_ID: role_ID,
                Company_ID: company_ID,
                ContactNumber: contactNumber,
                EmailID: emailID,
                BirthDay: birthDay,
                Status: status
            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_Users')
      .success(function (res) {
          $scope.getUser = res;
      })
            })

    })
        $scope.signup1.$setPristine();
    }

    //PUT
    //CODE FOR UPDATE CONTROLLER
    //this code will get the values from table of page and show them in textbox of same page
    $scope.update = function () {
        var user_Id = this.i;

        // alert(user_Id)
        $http.get('http://localhost:3200/api/View_Users/' + user_Id)
    .success(function (res) {
        console.log(res);
        $scope.getupusers = res;

        var pushTextUser = $scope.getupusers;
        $scope.ID = pushTextUser.Id;
        $scope.username = pushTextUser.UserName;
        $scope.fname = pushTextUser.FirstName;
        $scope.lname = pushTextUser.LastName;
        $scope.role = pushTextUser.Role_ID;
        $scope.company = pushTextUser.Company_ID;
        //alert($scope.company);
        $scope.contact = pushTextUser.ContactNumber;
        $scope.email = pushTextUser.EmailID;
        $scope.birth = pushTextUser.BirthDay;
        $scope.upbtn = true;
        $scope.savebtn = false;



    });


    };

    //CODE FOR UPDATESAVE CONTROLLER
    $scope.updateSave = function () {
        var ID = this.ID;
        var Uname = this.username;
        var Fname = this.fname;
        var Lname = this.lname;
        var Role = this.role;
        var Company_ID = this.company;
        var Contact = this.contact;
        var Email = this.email;
        var Birth = this.birth;

        //condition will check if user has left any field vacant
        if (Uname == null || Fname == null || Lname == null || Role == null || Role == "" || Company_ID == null || Company_ID == "" || Contact == null || Email == null || Birth == null) {
            alert("Insert all Field");
            return;
        }
        else
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/Users/" + ID,
                crossdomain: true,
                data: {
                    ID: ID,
                    UserName: Uname,
                    FirstName: Fname,
                    LastName: Lname,
                    Role_ID: Role,
                    Company_ID: Company_ID,
                    ContactNumber: Contact,
                    EmailID: Email,
                    BirthDay: Birth,

                },
                headers: { 'content-type': 'application/json' }
            })
            .success(function (responce) {
                alert('Record updated successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_Users')
                   .success(function (res) {
                       var x = res.length;
                       $scope.x = x;
                       console.log(res);
                       $scope.getUser = res;
                       $scope.upbtn = false;
                       $scope.savebtn = true;
                   })
            })
        this.username = "";
        this.fname = "";
        this.lname = "";
        this.role = "";
        this.company = "";
        this.contact = "";
        this.email = "";
        this.birth = "";

        $scope.signup1.$setPristine();

    };

    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        $scope.country = "";
        $scope.state = "";
        $scope.city = "";
        $scope.saveCountrybtn = false;
        $scope.saveStatebtn = false;
        $scope.saveCitybtn = false;
        $scope.stateDiv = false;
        $scope.cityDiv = false;
        $scope.stateNameDiv = false;
        $scope.cityNameDiv = false;
        $scope.countryNameDiv = false;
        $scope.savebtn = false;

        $http.get('http://localhost:3200/api/country_State_City_view')
            .success(function (res) {
                $scope.getcountryStateCity = res;

                $scope.savebtn = false;
                $scope.upbtn = false;
                $scope.signup1.$setPristine();
            })
        $http.get('http://localhost:3200/api/View_country')
        .success(function (res) {

            //console.log(res);
            $scope.getCountry = res;
        })
    }



});
