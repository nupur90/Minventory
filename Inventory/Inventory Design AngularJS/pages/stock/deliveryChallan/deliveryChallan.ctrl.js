var scotchApp = angular.module('scotchApp.deliveryChallan', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('deliveryChallanController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {


    $scope.IsHidden = true;
    $scope.IsShowdiv = true;
    var grandquantity;   
    //rout for print payment

    var todayDate = $filter('date')(new Date(), "shortDate");
    $scope.challanDate = $filter('date')(todayDate, "dd-MM-yyyy");

    //set initial value 0
    $scope.totaldiscount = parseInt(0);
    $scope.shippingcost = parseInt(0);
    $scope.amount = parseInt(0);
    $scope.roundoff = parseInt(0);
    $scope.netamount = parseInt(0);

    $scope.showModal = false;
    $scope.additem = [];
    var removeItem = [];

    var tot_price;
    $scope.getgrandtotal = 0;
    $scope.quant = 0;
    var count = 0;
    var cust_id;




    //$scope.savepayment = function () {

    //    $location.path('/Savepayment/' + cust_id);
    //}
    //get taxes

    $http.get('http://localhost:3200/api/Taxes')
     .success(function (res) {
         console.log(res);
         $scope.getTaxes = res;

     });
    $scope.QuantityLimit = function () {
        if (this.quantity > this.getavailablestock) {


            alert("Available Stock is" + this.getavailablestock);
            this.quantity = null;

        }
    }

    var totQuantity = 0;

    $scope.toggleModal = function () {
        if (this.CustomerName == null || this.CustomerName == "") {
            alert('Please Select The Customer ');
            $scope.selecteditem = "";
        } else {

            var getitem_id = this.selecteditem;
            var customer_id = this.CustomerName;

            var insertedDate = $filter('date')(new Date(), "shortDate");
            $http.get('http://localhost:3200/api/view_Item_for_delivery_Challan/' + getitem_id)
           .success(function (res) {
               // console.log(res);
               $scope.getItemstocks = res;
               var itemstock = $scope.getItemstocks;

               $scope.getavailablestock = itemstock.TotalQuantity;
               $scope.getsaleprice = itemstock.SalePrice;
               $scope.getcostprice = itemstock.CostPrice;
               $scope.mrp = itemstock.MRP;
               $scope.percent = itemstock.ProfitPercentage;
               $scope.getItemId = itemstock.Id;
               $scope.getCode = itemstock.Code;
               $scope.itemname = itemstock.ItemName;
               $scope.manufacturer = itemstock.Manufacturer;
               $scope.saleprice = itemstock.SalePrice;
               $scope.getCostPrice = itemstock.CostPrice;
               $scope.getPurchasePrice = itemstock.PurchasePrice;
               $scope.getStandardUnit_ID = itemstock.StandardUnit_ID;
               $scope.getStandardUniName = itemstock.StandardUniName;
               $scope.getPurchaseUnit_ID = itemstock.PurchaseUnit_ID;
               $scope.getPurchaseUnitName = itemstock.PurchaseUnitName;
               $scope.getCategory_ID = itemstock.Category_ID;
               $scope.getCategoryName = itemstock.CategoryName;
               $scope.getPurchaseTax = itemstock.PurchaseTax;
               $scope.getPurchaseTaxName = itemstock.PurchaseTaxName;
               $scope.getSalesTax = itemstock.SalesTax;
               $scope.getSalesTaxName = itemstock.SalesTaxName;
               $scope.getOpeningStock = itemstock.OpeningStock;
               $scope.getIdealQuantity = itemstock.IdealQuantity;
               $scope.getReorderQuantity = itemstock.ReorderQuantity;
               $scope.getMaxQuantity = itemstock.MaxQuantity;
               $scope.getTotalQuantity = itemstock.TotalQuantity;
               $scope.getAllowSales = itemstock.AllowSales;
               $scope.getAllowPurchase = itemstock.AllowPurchase;
               $scope.getAllowInword = itemstock.AllowInword;
               $scope.getAllowOutword = itemstock.AllowOutword;
               $scope.getDescription = itemstock.Description;
               $scope.getManufacturingDate = itemstock.ManufacturingDate;
               $scope.getStatus = itemstock.Status;
               $scope.percevtage = itemstock.ProfitPercentage;
               $scope.expirydate = itemstock.ExpiryDate;


               //add item in list
               $scope.additeminlist = function () {

                   var qty = this.quantity;
                   this.quantity = null;
                   $scope.selecteditem = "";
                   if (qty == null || qty == "") {

                       alert('Please Add the Quantity..');

                   }

                   else {

                       // alert('else');
                       var sprice = $scope.saleprice;
                       tot_price = (qty * sprice);
                       var batchNo = this.getbatchno;


                       //insert Item Quantity to CustomerItemQuantity
                       var request = $http({

                           method: "post",
                           url: "http://localhost:3200/api/Customer_Item_Invoice",
                           crossDomain: true,
                           data: {

                               Item_Id: getitem_id,
                               Customer_Id: customer_id,
                               Quantity: qty,
                               TotalAmount:0,
                               BatchNumber: 0,
                               InsertedDate: insertedDate

                           }
                       }).success(function (responce) {
                           $http.get('http://localhost:3200/api/View_Customer_Item_Invoice?customer_Id=' + customer_id + '&insertedDate=' + insertedDate)
                              .success(function (res) {
                                  $scope.additem = res;
                              })
                       });

                       totQuantity = parseInt(totQuantity) + parseInt(qty);
                       $scope.totalQuantity = totQuantity;
                       //// alert('Total Quantity:-' + $scope.totalQuantity);


                       ////code for reduce quantity from database table
                       grandquantity = parseInt($scope.getTotalQuantity) - parseInt(qty);

                       //alert('Cid '+customer_id);
                       //alert('iDt ' + insertedDate);
                       //alert('TQ' + $scope.getTotalQuantity);

                       //alert('GTQ ' + grandquantity);
                       //alert('Cid ' + customer_id);
                       //alert('itemID ' + getitem_id);
                       var request = $http({

                           method: "put",
                           url: "http://localhost:3200/api/Items/" + getitem_id,
                           crossDomain: true,
                           data: {
                               //DataFiledName:VariableName
                               Id: $scope.getItemId,
                               ItemName: $scope.itemname,
                               Code: $scope.getCode,
                               Manufacturer: $scope.manufacturer,
                               SalePrice: $scope.getsaleprice,
                               CostPrice: $scope.getCostPrice,
                               PurchasePrice: $scope.getPurchasePrice,
                               MRP: $scope.mrp,
                               StandardUnit_ID: $scope.getStandardUnit_ID,
                               PurchaseUnit_ID: $scope.getPurchaseUnit_ID,
                               Category_ID: $scope.getCategory_ID,
                               CategoryName: $scope.getCategoryName,
                               PurchaseTax: $scope.getPurchaseTax,
                               SalesTax: $scope.getSalesTax,
                               OpeningStock: $scope.getOpeningStock,
                               IdealQuantity: $scope.getIdealQuantity,
                               ReorderQuantity: $scope.getReorderQuantity,
                               MaxQuantity: $scope.getMaxQuantity,
                               TotalQuantity: grandquantity,
                               AllowSales: $scope.getAllowSales,
                               AllowPurchase: $scope.getAllowPurchase,
                               AllowInword: $scope.getAllowInword,
                               AllowOutword: $scope.getAllowOutword,
                               Description: $scope.getDescription,
                               ManufacturingDate: $scope.getManufacturingDate,
                               ExpiryDate: $scope.expirydate,
                               ProfitPercentage: $scope.percevtage,
                               Status: $scope.getStatus

                           },
                           headers: { 'Content-Type': 'application/json' }
                       })
                   }
               }
               //delete row from table
               $scope.deleteitemfrmlist = function (index, aitem) {

                   $scope.selecteditem = "";
                   var itemid = aitem.Id;

                   $http.get('http://localhost:3200/api/view_Item_for_delivery_Challan/' + aitem.Item_Id)
                  .success(function (res) {
                      // console.log(res);
                      $scope.getItemstocks1 = res;
                      var itemstock1 = $scope.getItemstocks1;
                      $scope.getItemId1 = itemstock1.Id;
                      $scope.getCode1 = itemstock1.Code;
                      $scope.itemname1 = itemstock1.ItemName;
                      $scope.manufacturer1 = itemstock1.Manufacturer;
                      $scope.getsaleprice1 = itemstock1.SalePrice;
                      $scope.getCostPrice1 = itemstock1.CostPrice;
                      $scope.getPurchasePrice1 = itemstock1.PurchasePrice;
                      $scope.getStandardUnit_ID1 = itemstock1.StandardUnit_ID;
                      $scope.getStandardUniName1 = itemstock1.StandardUniName;
                      $scope.getPurchaseUnit_ID1 = itemstock1.PurchaseUnit_ID;
                      $scope.getPurchaseUnitName1 = itemstock1.PurchaseUnitName;
                      $scope.mrp1 = itemstock1.MRP;
                      $scope.percent1 = itemstock1.ProfitPercentage;
                      $scope.getCategory_ID1 = itemstock1.Category_ID;
                      $scope.getCategoryName1 = itemstock1.CategoryName;
                      $scope.getPurchaseTax1 = itemstock1.PurchaseTax;
                      $scope.getPurchaseTaxName1 = itemstock1.PurchaseTaxName;
                      $scope.getSalesTax1 = itemstock1.SalesTax;
                      $scope.getSalesTaxName1 = itemstock1.SalesTaxName;
                      $scope.getOpeningStock1 = itemstock1.OpeningStock;
                      $scope.getIdealQuantity1 = itemstock1.IdealQuantity;
                      $scope.getReorderQuantity1 = itemstock1.ReorderQuantity;
                      $scope.getMaxQuantity1 = itemstock1.MaxQuantity;
                      // $scope.getTotalQuantity = itemstock1.TotalQuantity;
                      $scope.getAllowSales1 = itemstock1.AllowSales;
                      $scope.getAllowPurchase1 = itemstock1.AllowPurchase;
                      $scope.getAllowInword1 = itemstock1.AllowInword;
                      $scope.getAllowOutword1 = itemstock1.AllowOutword;
                      $scope.getDescription1 = itemstock1.Description;
                      $scope.getManufacturingDate1 = itemstock1.ManufacturingDate;
                      $scope.getStatus1 = itemstock1.Status;
                      $scope.percevtage1 = itemstock1.ProfitPercentage;
                      $scope.expirydate1 = itemstock1.ExpiryDate;





                      $scope.additem.splice(index, 1);
                      $scope.getgrandtotal = $scope.getgrandtotal - aitem.totalprice1;
                      $scope.amount = (($scope.getgrandtotal + $scope.calculatedtax) - this.totaldiscount) - this.shippingcost;
                      $scope.netamount = Math.round($scope.amount);
                      $scope.roundoff = this.netamount - this.amount;

                      var totalqty = parseInt(itemstock1.TotalQuantity) + parseInt(aitem.Quantity);

                      // put on to the item table

                      var request = $http({

                          method: "put",
                          url: "http://localhost:3200/api/Items/" + aitem.Item_Id,
                          crossDomain: true,
                          data: {
                              //DataFiledName:VariableName
                              Id: $scope.getItemId1,
                              ItemName: $scope.itemname1,
                              Code: $scope.getCode1,
                              Manufacturer: $scope.manufacturer1,
                              SalePrice: $scope.getsaleprice1,
                              CostPrice: $scope.getCostPrice1,
                              PurchasePrice: $scope.getPurchasePrice1,
                              MRP: $scope.mrp1,
                              StandardUnit_ID: $scope.getStandardUnit_ID1,
                              PurchaseUnit_ID: $scope.getPurchaseUnit_ID1,
                              Category_ID: $scope.getCategory_ID1,
                              CategoryName: $scope.getCategoryName1,
                              PurchaseTax: $scope.getPurchaseTax1,
                              SalesTax: $scope.getSalesTax1,
                              OpeningStock: $scope.getOpeningStock1,
                              IdealQuantity: $scope.getIdealQuantity1,
                              ReorderQuantity: $scope.getReorderQuantity1,
                              MaxQuantity: $scope.getMaxQuantity1,
                              TotalQuantity: totalqty,
                              AllowSales: $scope.getAllowSales1,
                              AllowPurchase: $scope.getAllowPurchase1,
                              AllowInword: $scope.getAllowInword1,
                              AllowOutword: $scope.getAllowOutword1,
                              Description: $scope.getDescription1,
                              ManufacturingDate: $scope.getManufacturingDate1,
                              ExpiryDate: $scope.expirydate1,
                              ProfitPercentage: $scope.percevtage1,
                              Status: $scope.getStatus1

                          },
                          headers: { 'Content-Type': 'application/json' }
                      })

                      //delete item from Customer Invoice table
                      var request = $http({

                          method: "delete",
                          url: "http://localhost:3200/api/Customer_Item_Invoice/" + itemid,
                          crossDomain: true,
                          data: {

                          }
                      })
                      //for calculating total Quantity after deleting
                      totQuantity = parseInt(totQuantity) - parseInt(aitem.Quantity);
                      $scope.totalQuantity = totQuantity;
                  })
               }


               $scope.discountchange = function () {

                   $scope.PrintDiscount = this.totaldiscount;


                   // alert(this.tax );


                   if ($scope.getgrandtotal < this.totaldiscount) {
                       alert('Discount not be more than Amount..');
                       this.totaldiscount = null;


                       $scope.amount = (($scope.getgrandtotal - this.totaldiscount) + this.shippingcost);
                       $scope.netamount = Math.round($scope.amount);
                       $scope.roundoff = (this.netamount - this.amount);

                       //Print Page
                       $scope.PrintAmount = this.amount;
                       $scope.PrintRoundOff = this.roundoff;
                       $scope.PrintNetAmount = this.netamount;


                   }
                   else {

                       if (this.tax == '' || this.tax == null) {

                           //alert('hiii');
                           //$scope.gettotaldiscount = this.totaldiscount;
                           //$scope.getshippingcost = this.shippingcost;

                           $scope.amount = (($scope.getgrandtotal - this.totaldiscount) + this.shippingcost);
                           $scope.netamount = Math.round($scope.amount);
                           $scope.roundoff = (this.netamount - this.amount);

                           //Print Page
                           $scope.PrintAmount = this.amount;
                           $scope.PrintRoundOff = this.roundoff;
                       }
                       else {


                           var amt = parseFloat(($scope.getgrandtotal / 100) * parseFloat(this.tax));
                           $scope.calculatedtax = amt;
                           var amount = $scope.getgrandtotal + amt;
                           var netamount = Math.round(amount);
                           $scope.roundoff = (this.netamount - this.amount);
                           $scope.amount = (amount - this.totaldiscount);
                           $scope.netamount = Math.round($scope.amount);

                           //Print Page
                           $scope.PrintAmount = this.amount;
                           $scope.PrintRoundOff = this.roundoff;
                           $scope.PrintNetAmount = this.netamount;


                       }

                   }



               }


               //Shipping Cost
               //code for delete item from list

               $scope.clearAll = function () {

                   // $scope.additem = "";

                   $scope.getgrandtotal = parseInt(0);
                   $scope.tax = "";
                   $scope.additem = [];
                   count = 0;
                   $scope.totaldiscount = parseInt(0);
                   $scope.shippingcost = parseInt(0);
                   $scope.amount = $scope.getgrandtotal
                   $scope.roundoff = parseInt(0);
                   $scope.netamount = parseInt(0);
                   $scope.calculatedtax = parseInt(0);
               }


               this.quantity = null;
               this.getbatchno = null;


               //Clear All Fields
               $scope.ClearAllFields = function () {

                   this.CustomerName = "";
                   this.challanDate = "";
                   this.cityName = "";
                   this.Customercontactno = "";
                   this.selecteditem = "";
                   this.totalQuantity = "";
                   this.note = "";
                   $scope.totalQuantity = 0;
                   totQuantity = 0;
                   removeItem = $scope.additem;
                   $scope.additem = [];

                   var count = removeItem.length;
                   //  alert('count  ' + count);
                   for (var i = 0; i <= count; i++) {

                       $scope.removeItemFromItemList(removeItem[i].Id, removeItem[i].Quantity, removeItem[i].Item_Id);
                   }

                   $scope.removeItem = [];

               }


           });


            $scope.showModal = !$scope.showModal;
        }


    };


    //get customer 

    $scope.custid = function (CustomerName) {
        cust_id = CustomerName;
        $http.get('http://localhost:3200/api/customer_view/' + cust_id)
       .success(function (res) {
           console.log(res);
           $scope.getCustomerscitycno = res;
           var cust = $scope.getCustomerscitycno;
           $scope.Customercontactno = cust.ContactNumber;
           $scope.Customern = cust.Name;
           $scope.cityName = cust.City;
           var cityid = cust.City_ID;
           var cust_name = cust.Name;
           $scope.PrintCustName=cust.Name;
           $scope.PrintCustContactNo = cust.ContactNumber;
       })

    }

    //Get itme
    $http.get('http://localhost:3200/api/view_Item')
         .success(function (res) {
             //   console.log(res);
             $scope.getItemsname = res;
         });



    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    //code for save customer
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




    //Push Customer
    $scope.savecustomer = function () {
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

    $scope.resetinvoice = function () {

        $scope.calculatedtax = parseInt(0);
        $scope.tax = "";
        this.DueDate = "";
        this.ResContact = "";
        this.city = "";
        this.Ref = "";
        this.InvoiceDate = "";
        this.CustomerName = "";
        this.Customercontactno = "";
        this.InvoceNo = "";
        $scope.getgrandtotal = parseInt(0);
        $scope.additem = [];
        count = 0;
        $scope.totaldiscount = parseInt(0);
        $scope.shippingcost = parseInt(0);
        $scope.amount = parseInt(0);
        $scope.roundoff = parseInt(0);
        $scope.netamount = parseInt(0);

    }

    $scope.CancelQuantity = function () {

        this.quantity = null;
        this.getbatchno = null;
    }

    $scope.CancelCustomer = function () {
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
    }


    //Save Challan 
    $scope.saveChallan = function () {

        var customer_Id = this.CustomerName;

        $scope.IsHidden = false;
        $scope.IsShowdiv = false;
        $scope.IsTextHide = true;
        $scope.IsShowLbl = true;
        $scope.IsEditHide = false;
        $scope.IsSaveHide = false;
        $scope.PrintBtn = false;

        $scope.PrintOutwordDate = $filter('date')($scope.challanDate, "dd-MM-yyyy");
        $scope.PrintNote = $scope.note;
        //// $scope.totalQuantity =$scope.totalQuantity;


        $http.get('http://localhost:3200/api/customer_view/' + customer_Id)
       .success(function (res) {
           console.log(res);
           $scope.getCustomerscitycno = res;
           var cust = $scope.getCustomerscitycno;

           var customerName = cust.Name;;
           var city_Id = cust.City_ID;
           var contactNo = $scope.Customercontactno;
           var deliceryChallanDate = $scope.challanDate;
           var note = $scope.note;
           var totQuantity = $scope.totalQuantity;
           var status = true;

           alert('Con ' + contactNo);
           alert('DCD  ' + deliceryChallanDate);
           alert('Note ' + note);
           alert('TQ ' + totQuantity);

           var request = $http({
               method: "post",
               url: "http://localhost:3200/api/DeliveryChallans",
               crossDomain: true,
               data: {
                   // DataFiledName:VariableName

                   Customer_ID: customer_Id,
                   CustomerName: customerName,
                   City_ID: city_Id,
                   ContactNumber: contactNo,
                   DeliceryChallanDate: deliceryChallanDate,
                   Note: note,
                   TotalQuantity: totQuantity,
                   Status: status

               }, headers: { 'Content-Type': 'application/json' }
           })
              .success(function (responce) {

                  alert('Challan Added successfully....');
              })
           $scope.ClearAllFields();
       })
    }


    

    //Remove Item From List
    $scope.removeItemFromItemList = function (id, quantity, itemId) {


        //   alert('inner id '+id);
        //   alert('inner qty ' + quantity);

        $http.get('http://localhost:3200/api/view_Item_for_delivery_Challan/' + itemId)
       .success(function (res) {
           // console.log(res);
           $scope.getItemstocks1 = res;
           var itemstock1 = $scope.getItemstocks1;
           $scope.getItemId1 = itemstock1.Id;
           $scope.getCode1 = itemstock1.Code;
           $scope.itemname1 = itemstock1.ItemName;
           $scope.manufacturer1 = itemstock1.Manufacturer;
           $scope.getsaleprice1 = itemstock1.SalePrice;
           $scope.getCostPrice1 = itemstock1.CostPrice;
           $scope.getPurchasePrice1 = itemstock1.PurchasePrice;
           $scope.getStandardUnit_ID1 = itemstock1.StandardUnit_ID;
           $scope.getStandardUniName1 = itemstock1.StandardUniName;
           $scope.getPurchaseUnit_ID1 = itemstock1.PurchaseUnit_ID;
           $scope.getPurchaseUnitName1 = itemstock1.PurchaseUnitName;
           $scope.mrp1 = itemstock1.MRP;
           $scope.percent1 = itemstock1.ProfitPercentage;
           $scope.getCategory_ID1 = itemstock1.Category_ID;
           $scope.getCategoryName1 = itemstock1.CategoryName;
           $scope.getPurchaseTax1 = itemstock1.PurchaseTax;
           $scope.getPurchaseTaxName1 = itemstock1.PurchaseTaxName;
           $scope.getSalesTax1 = itemstock1.SalesTax;
           $scope.getSalesTaxName1 = itemstock1.SalesTaxName;
           $scope.getOpeningStock1 = itemstock1.OpeningStock;
           $scope.getIdealQuantity1 = itemstock1.IdealQuantity;
           $scope.getReorderQuantity1 = itemstock1.ReorderQuantity;
           $scope.getMaxQuantity1 = itemstock1.MaxQuantity;
           //$scope.getTotalQuantity = itemstock1.TotalQuantity;
           $scope.getAllowSales1 = itemstock1.AllowSales;
           $scope.getAllowPurchase1 = itemstock1.AllowPurchase;
           $scope.getAllowInword1 = itemstock1.AllowInword;
           $scope.getAllowOutword1 = itemstock1.AllowOutword;
           $scope.getDescription1 = itemstock1.Description;
           $scope.getManufacturingDate1 = itemstock1.ManufacturingDate;
           $scope.getStatus1 = itemstock1.Status;
           $scope.percevtage1 = itemstock1.ProfitPercentage;
           $scope.expirydate1 = itemstock1.ExpiryDate;





           var totalqty = parseInt(itemstock1.TotalQuantity) + parseInt(quantity);



           //grandquantity = totalqty;
           var request = $http({

               method: "put",
               url: "http://localhost:3200/api/Items/" + itemId,
               crossDomain: true,
               data: {
                   //DataFiledName:VariableName
                   Id: itemId,
                   ItemName: $scope.itemname1,
                   Code: $scope.getCode1,
                   Manufacturer: $scope.manufacturer1,
                   SalePrice: $scope.getsaleprice1,
                   CostPrice: $scope.getCostPrice1,
                   PurchasePrice: $scope.getPurchasePrice1,
                   MRP: $scope.mrp1,
                   StandardUnit_ID: $scope.getStandardUnit_ID1,
                   PurchaseUnit_ID: $scope.getPurchaseUnit_ID1,
                   Category_ID: $scope.getCategory_ID1,
                   CategoryName: $scope.getCategoryName1,
                   PurchaseTax: $scope.getPurchaseTax1,
                   SalesTax: $scope.getSalesTax1,
                   OpeningStock: $scope.getOpeningStock1,
                   IdealQuantity: $scope.getIdealQuantity1,
                   ReorderQuantity: $scope.getReorderQuantity1,
                   MaxQuantity: $scope.getMaxQuantity1,
                   TotalQuantity: totalqty,
                   AllowSales: $scope.getAllowSales1,
                   AllowPurchase: $scope.getAllowPurchase1,
                   AllowInword: $scope.getAllowInword1,
                   AllowOutword: $scope.getAllowOutword1,
                   Description: $scope.getDescription1,
                   ManufacturingDate: $scope.getManufacturingDate1,
                   ExpiryDate: $scope.expirydate1,
                   ProfitPercentage: $scope.percevtage1,
                   Status: $scope.getStatus1

               },
               headers: { 'Content-Type': 'application/json' }
           })
           var request = $http({

               method: "delete",
               url: "http://localhost:3200/api/Customer_Item_Invoice/" + id,
               crossDomain: true,
               data: {

               }
           })
       })
    }


})


scotchApp.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };
            var options = {
                dateFormat: "dd/mm/yy",
                onSelect: function (dateText) {
                    updateModel(dateText);
                }
            };
            elem.datepicker(options);
        }
    }
});