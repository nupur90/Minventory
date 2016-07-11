var scotchApp = angular.module('scotchApp.users', ['ngRoute']);
scotchApp.controller('userController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.user = "Masters User Data";
    $scope.upbtn = false;
    $scope.savebtn = true;
    //code for GET
    $http.get('http://localhost:3200/api/View_Users')
       .success(function (res) {
           $scope.upbtn = false;
           $scope.savebtn = true;
           //console.log(res);
           $scope.getUser = res;

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
       })

    //code for GET Role
    $http.get('http://localhost:3200/api/View_Role')
       .success(function (res) {
           //console.log(res);
           $scope.getRole = res;

           var x = res.length;
                  // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.upbtn = false;
           $scope.savebtn = true;

       })

    //code for GET City
    $http.get('http://localhost:3200/api/View_Companies')
       .success(function (res) {
           console.log(res);
           $scope.getCompany = res;

           var x = res.length;
                // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.upbtn = false;
           $scope.savebtn = true;

       })

    //POST
    //code for save controller

     
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
                Status:status
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
        this.username = "";
        this.fname = "";
        this.lname = "";
        this.role = "";
        this.company = "";
        this.contact = "";
        this.email = "";
        this.birth = "";


        $http.get('http://localhost:3200/api/View_Users_Role')
     .success(function (res) {
         $scope.getUser = res;

         $scope.savebtn = true;
         $scope.upbtn = false;
         $scope.signup1.$setPristine();
     })
    }


   
});
