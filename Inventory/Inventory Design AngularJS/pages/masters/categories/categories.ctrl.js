var scotchApp = angular.module('scotchApp.categories', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('categoriesController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Masters Categories Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.btnSave = true;
    $scope.btnUpdate = false;

    //code for GET
    $http.get('http://localhost:3200/api/View_Categories')
       .success(function (res) {

           $scope.getCategories = res;

           if (res == 0) {
               $scope.parentCategory1 = false;
               //ParentCotegory_ID: 0;
               //alert("mser");
               //$scope.getCategories = [
               //  { ParentCotegory_ID: 0, enabled: false }]


           }
           else {
               $scope.parentCategory1 = true;
              
           }
           //to get number of records

           var x = res.length;
           $scope.x = x;

           $scope.btnSave = true;
           $scope.btnUpdate = false;
       })



    //POST
    //code for save controller

    $scope.save = function () {


        $http.get('http://localhost:3200/api/View_Categories')
      .success(function (res) {
          var m = res.length;
          console.log(res);
       

          var CategoryNames = $scope.name;
          var Descriptions = $scope.description;
              var status = true;

              if (m == 0) {
                  var parent = 0;
              }
              else {
                  var parent = $scope.parentCategory;
              }

              alert(parent);

              if (parent == 0) {
                  //condition will check if user has left any field vacant
                  if (CategoryNames == null || Descriptions == null) {
                      alert("Fill the info");
                      return;
                  }

                  else {
                      var request = $http({
                          method: "post",
                          url: "http://localhost:3200/api/categories",
                          crossDomain: true,
                          data: {
                              Name: CategoryNames,
                              Description: Descriptions,
                              ParentCotegory_ID: parent,
                              Status: status,
                          },
                          headers: { 'Content-Type': 'application/json' }
                      })
                       .success(function (responce) {
                           alert('Category added successfully');

                           $scope.parentCategory1 = true;
                           //further code will refresh the current database data on page
                           $http.get('http://localhost:3200/api/View_Categories')
                  .success(function (res) {

                      $scope.getCategories = res;
                  });
                       })
                  }
                  return;
              }
              else
              {
                  //condition will check if user has left any field vacant
                  if (CategoryNames == null || Descriptions == null || parent=="" || parent==null) {
                      alert("Fill the info 2");
                      return;
                  }

                  else {
                      var request = $http({
                          method: "post",
                          url: "http://localhost:3200/api/categories",
                          crossDomain: true,
                          data: {
                              Name: CategoryNames,
                              Description: Descriptions,
                              ParentCotegory_ID: parent,
                              Status: status,
                          },
                          headers: { 'Content-Type': 'application/json' }
                      })
                       .success(function (responce) {
                           alert('Category added successfully');

                           $scope.parentCategory1 = true;
                           //further code will refresh the current database data on page
                           $http.get('http://localhost:3200/api/View_Categories')
                  .success(function (res) {
                      $scope.getCategories = res;

                  });
                       })
                  }
              }
          


          $scope.name = null;
          $scope.description = null;
          $scope.parentCategory = "";

          $scope.signup1.$setPristine();

      })

    };




    ////POST
    ////code for save controller

    //$scope.save = function () {



    //    $http.get('http://localhost:3200/api/View_Categories')
    //  .success(function (res) {
    //      var m = res.length;
    //      $scope.getCategories = res;

    //      if (m == 0) {

    //          var parent = 0;

    //          var CategoryName = this.name;
    //          var Description = this.description;
    //          var status = true;



    //          //condition will check if user has left any field vacant
    //          if (CategoryName == null || Description == null) {
    //              alert("Fill the info");
    //              return;
    //          }

    //          else {
    //              var request = $http({
    //                  method: "post",
    //                  url: "http://localhost:3200/api/categories",
    //                  crossDomain: true,
    //                  data: {
    //                      Name: CategoryName,
    //                      Description: Description,
    //                      ParentCotegory_ID: parent,
    //                      Status: status,
    //                  },
    //                  headers: { 'Content-Type': 'application/json' }
    //              })
    //               .success(function (responce) {
    //                   alert('Category added successfully');

    //                   $scope.parentCategory1 = true;
    //                   //further code will refresh the current database data on page
    //                   $http.get('http://localhost:3200/api/View_Categories')
    //          .success(function (res) {
                
    //          });
    //               })
    //          }
    //      }
    //      else if (m > 0) {
    //          var CategoryNames = this.name;
    //          var Descriptions = this.description;
    //          var parents = this.parentCategory;


    //          var statuss = true;



    //          //condition will check if user has left any field vacant
    //          if (CategoryNames == null || Descriptions == null || parents==""|| parents==null) {
    //              alert("Fill the else");
                  

    //          }

    //          else {
    //              var request = $http({
    //                  method: "post",
    //                  url: "http://localhost:3200/api/categories",
    //                  crossDomain: true,
    //                  data: {
    //                      Name: CategoryNames,
    //                      Description: Descriptions,
    //                      ParentCotegory_ID: parents,
    //                      Status: statuss,
    //                  },
    //                  headers: { 'Content-Type': 'application/json' }
    //              })
    //               .success(function (responce) {
    //                   alert('Category added successfully');

    //                   $scope.parentCategory1 = true;
    //                   //further code will refresh the current database data on page
    //                   $http.get('http://localhost:3200/api/View_Categories')
    //          .success(function (res) {
    //              this.name = null;
    //              this.description = null;
    //              this.parentCategory = "";

    //              $scope.signup1.$setPristine();


    //          });
    //               })
    //          }
    //      }



    //  })
        
    //};


    //PUT
    //this code will get the values from table of page and show them in textbox of same page
    //code for update click icon
    $scope.editCategories = function () {
        //$scope.textbox ngmodel=this
        var categories_Id = this.id;

        $scope.btnSave = false;
        $scope.btnUpdate = true;

        $http.get('http://localhost:3200/api/View_Categories/' + categories_Id)
    .success(function (res) {
        ///console.log(res);

        $scope.pushTextCategories2 = res;
        var pushTextCategories = $scope.pushTextCategories2;

        //ngmodel=database
        $scope.ID = pushTextCategories.Id;
        $scope.name = pushTextCategories.Name;
        $scope.description = pushTextCategories.Description;
        $scope.parentCategory = pushTextCategories.Id;
    })
    }




    //code for update button
    $scope.updateCategories = function () {

        var ID = this.ID;
        var name = this.name;
        var description = this.description;
        var parentCategory = this.parentCategory;
    


        //condition will check if user has left any field vacant
        //if (name == null || description == null || parentCategory == null) {
        //    alert("fill the info");
        //    return;
        //}
        if (name == null || description == null || parentCategory == null || parentCategory == "") {
            alert("fill the info");
            return;
        }
        else
            var request = $http({
                method: "put",
                url: "http://localhost:3200/api/Categories/" + ID,
                crossdomain: true,
                data: {


                    Id: ID,
                    Name: name,
                    Description: description,
                    ParentCotegory_ID: parentCategory,
                },

                headers: { 'content-type': 'application/json' }
            })

            .success(function (responce) {
                alert('record updated successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_Categories/')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
       // console.log(res);
        $scope.getCategories = res;

        $scope.btnSave = true;
        $scope.btnUpdate = false;

    })
            })

        //this.name = null;
        //this.description = null;
        //this.parentCategory = null;
  
        this.name = " ";
        this.description = " ";
       

    };


    //code for CANCEL and NEW button
    $scope.cancelAndNew = function () {
        this.name = " ";
        this.description = " ";
       
        $http.get('http://localhost:3200/api/View_Categories')
     .success(function (res) {
         $scope.getCategories = res;

         $scope.btnSave = true;
         $scope.btnUpdate = false;
      })
    }


    //delete button
    $scope.deleteCategories = function () {
        //$scope.textbox ngmodel=this
        var categories_Id = this.id;

        $http.get('http://localhost:3200/api/View_Categories/' + categories_Id)
    .success(function (res) {
        ///console.log(res);

        $scope.getCategoriess = res;


        var getCategories = $scope.getCategoriess;


        var ID = getCategories.Id;
        var categoriesName = getCategories.Name;
        var description = getCategories.Description;
        var parentCategory = getCategories.ParentCotegory_ID;
        var status = false;

        var request = $http({
            method: "put",
            url: "http://localhost:3200/api/Categories/" + ID,
            crossdomain: true,
            data: {

                //db=var
                Id: ID,
                Name:categoriesName,
                Description:description,
                ParentCotegory_ID:parentCategory,
                Status:status,

            },

            headers: { 'content-type': 'application/json' }
        })

            .success(function (responce) {
                alert('record deleted successfully !!!')

                //further code will refresh the current database data on page
                $http.get('http://localhost:3200/api/View_Categories')
    .success(function (res) {
        var x = res.length;
        $scope.x = x;
        console.log(res);
        $scope.getCategories = res;
    })
            })

    })
    }

    

});//last