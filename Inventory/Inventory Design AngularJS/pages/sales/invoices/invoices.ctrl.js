var scotchApp = angular.module('scotchApp.invoicesNew', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('invoicesController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

  
    $scope.IsHidden = true;
    $scope.IsShowdiv = true;

    //rout for print payment
    $scope.exact_log = $routeParams.cust_id;


    $scope.changeInvoice = function () {
        // alert("hsgdhsgdhsd");
        $scope.PrintInvoice = this.InvoceNo;
    }

    $scope.changeInvoiceDate = function () {
        $scope.PrintInvoiceDate = $filter('date')(this.InvoiceDate, "dd-MM-yyyy");

    }

    $scope.changeDueDate = function () {

        $scope.PrintDueDate = $filter('date')(this.DueDate, "dd-MM-yyyy");
    }

    $scope.editInvoice = function () {
        $scope.IsTextHide = false;
        $scope.IsShowLbl = false;

    }

    $scope.saveInvoice = function () {
        $scope.IsTextHide = true;
        $scope.IsShowLbl = true;

    }

    //invoice edit save button
    $scope.PrintHide = function () {
        $scope.IsEditHide = false;
        $scope.IsSaveHide = false;
    }

    $scope.ShowMaindiv = function () {

        $scope.IsEditHide = true;
        $scope.IsSaveHide = true;
        $scope.PrintBtn = true;
        $scope.IsShowdiv = true;
        $scope.IsHidden = true;


        $scope.calculatedtax = parseInt(0);
        this.Note = "";
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
        window.print(); return false;

    }
    //set initial value 0
    $scope.totaldiscount = parseInt(0);
    $scope.shippingcost = parseInt(0);
    $scope.amount = parseInt(0);
    $scope.roundoff = parseInt(0);
    $scope.netamount = parseInt(0);

    $scope.showModal = false;
    $scope.additem = [];
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


    $scope.toggleModal = function () {
        if (this.CustomerName == null || this.CustomerName == "") {
            alert('Please Select The Customer ');
            $scope.selecteditem = "";
        } else {

            var getitem_id = this.selecteditem;
            var customer_id = this.CustomerName;
            var id1;
            var itemname1;
            var manufacturer1;
            var availablestock1;
            var quantities1;
            var expirydate1;
            var mrp1;
            var saleprice1;
            var totalprice1;
            var percent1;
            var counts;
            var batchNo1;

            $http.get('http://localhost:3200/api/View_Item/' + getitem_id)
           .success(function (res) {
               console.log(res);
               $scope.getItemstocks = res;
               var itemstock = $scope.getItemstocks;

               $scope.getavailablestock = itemstock.TotalQuantity;
               $scope.getsaleprice = itemstock.SalePrice;
               $scope.itemname = itemstock.ItemName;
               $scope.manufacturer = itemstock.Manufacturer;
               $scope.saleprice = itemstock.SalePrice;
               $scope.getcostprice = itemstock.CostPrice;
               $scope.quantity = this.quantity;
               //  $scope.expeiryDate = itemstock.ExpiryDate;
               $scope.mrp = itemstock.MRP;
               $scope.percent = itemstock.ProfitPercentage;

               ///////
               $scope.getItemId = itemstock.Id;
               $scope.getCode = itemstock.Code;
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
               //////
               //add item in list
               $scope.additeminlist = function () {


                   var qty = this.quantity;


                   var dateInserted = $filter('date')(new Date(), "yyyy-MM-dd");

                   this.quantity = null;
                   $scope.selecteditem = "";
                   if (qty == null || qty == "") {

                       alert('Please Add the Quantity..');

                   }

                   else {

                       var sprice = $scope.saleprice;
                       tot_price = (qty * sprice);
                       var batchNo = this.getbatchno;
                       $scope.add = [];
                       var request = $http({
                           method: "post",
                           url: "http://localhost:3200/api/Customer_Item_Invoice",
                           crossDomain: true,
                           data: {
                               Item_Id: getitem_id,
                               Customer_Id: cust_id,
                               Quantity: qty,
                               TotalAmount: tot_price,
                               BatchNumber: batchNo,
                               InsertedDate: dateInserted
                           },
                           headers: { 'Content-Type': 'application/json' }
                       }).success(function (responce) {
                           $http.get('http://localhost:3200/api/View_Customer_Item_Invoice?cust_id=' + customer_id + '&insertedDate=' + dateInserted)
                              .success(function (res) {
                                  $scope.additem = res;
                                  var item = $scope.additem;
                                  var count = item.length;
                                  var Id;
                                  var Item_ID;
                                  var tot_prics;
                                  $scope.additem = [];

                                  for (var i = 0; i < count; i++) {

                                      tot_prics = (item[i].Quantity) * (item[i].SalePrice);

                                    //  alert($scope.TotalPrice);
                                      $scope.additem.push({
                                          Id: item[i].Id,
                                          Item_ID: item[i].Item_Id,
                                          itemname1: item[i].ItemName,
                                          manufacturer1: item[i].Manufacturer,
                                          percent1: item[i].ProfitPercentage,
                                          quantities1: item[i].Quantity,
                                          expirydate1: item[i].ExpiryDate,
                                          mrp1: item[i].MRP,
                                          saleprice1: item[i].SalePrice,
                                          totalprice1: tot_prics,
                                          batchNo1: item[i].BatchNumber
                                      });
                                  }
                              })
                       });


                       //$scope.additem.push({
                       //    id1: $scope.getItemId,
                       //    itemname1: $scope.itemname,
                       //    manufacturer1: $scope.manufacturer,
                       //    percent1: $scope.percevtage,
                       //    quantities1: this.quantity,
                       //    expirydate1: $scope.expirydate,
                       //    mrp1: $scope.mrp,
                       //    saleprice1: $scope.saleprice,
                       //    totalprice1: tot_price,
                       //    batchNo1: batchNo
                       //});


                       //code for reduce quantity from database table
                       var grandquantity = parseInt($scope.getTotalQuantity) - parseInt(qty);

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
                               .success(function (responce) {
                                   //  alert('data added successfully');
                               });




                       //calculation code
                       $scope.getgrandtotal = $scope.getgrandtotal + tot_price;

                       $scope.amount = $scope.getgrandtotal;
                       var disshiammount = $scope.amount;
                       $scope.netamount = Math.round($scope.amount);
                       $scope.roundoff = this.netamount - this.amount;
                   }//end if

                   //delete row from table
                   $scope.deleteitemfrmlist = function (index, aitem) {
                       var invoiceId = aitem.Id;
                       var aId = aitem.Item_ID;
                       $http.get('http://localhost:3200/api/View_Item/' + aId)
                         .success(function (res) {
                             console.log(res);
                             $scope.getItemstocks = res;
                             var itemstock = $scope.getItemstocks;

                             $scope.getavailablestock = itemstock.TotalQuantity;
                             $scope.getsalepricesss = itemstock.SalePrice;
                             $scope.itemname = itemstock.ItemName;
                             $scope.manufacturersss = itemstock.Manufacturer;
                             $scope.saleprice = itemstock.SalePrice;
                             $scope.getcostprice = itemstock.CostPrice;
                             $scope.quantity = this.quantity;
                             //  $scope.expeiryDate = itemstock.ExpiryDate;
                             $scope.mrpsss = itemstock.MRP;
                             $scope.percent = itemstock.ProfitPercentage;

                             $scope.getCodesss = itemstock.Code;
                             $scope.getCostPricesss = itemstock.CostPrice;
                             $scope.getPurchasePricesss = itemstock.PurchasePrice;
                             $scope.getStandardUnit_IDsss = itemstock.StandardUnit_ID;
                             $scope.getStandardUniName = itemstock.StandardUniName;
                             $scope.getPurchaseUnit_IDsss = itemstock.PurchaseUnit_ID;
                             $scope.getPurchaseUnitName = itemstock.PurchaseUnitName;
                             $scope.getCategory_IDsss = itemstock.Category_ID;
                             $scope.getCategoryNamesss = itemstock.CategoryName;
                             $scope.getPurchaseTaxsss = itemstock.PurchaseTax;
                             $scope.getPurchaseTaxName = itemstock.PurchaseTaxName;
                             $scope.getSalesTaxsss = itemstock.SalesTax;
                             $scope.getSalesTaxName = itemstock.SalesTaxName;
                             $scope.getOpeningStocksss = itemstock.OpeningStock;
                             $scope.getIdealQuantitysss = itemstock.IdealQuantity;
                             $scope.getReorderQuantitysss = itemstock.ReorderQuantity;
                             $scope.getMaxQuantitysss = itemstock.MaxQuantity;
                             $scope.getTotalQuantity = itemstock.TotalQuantity;
                             $scope.getAllowSalessss = itemstock.AllowSales;
                             $scope.getAllowPurchasesss = itemstock.AllowPurchase;
                             $scope.getAllowInwordsss = itemstock.AllowInword;
                             $scope.getAllowOutwordsss = itemstock.AllowOutword;
                             $scope.getDescriptionsss = itemstock.Description;
                             $scope.getManufacturingDatesss = itemstock.ManufacturingDate;
                             $scope.getStatussss = itemstock.Status;
                             $scope.percevtagesss = itemstock.ProfitPercentage;
                             $scope.expirydatesss = itemstock.ExpiryDate;



                             // alert("this.total=" + index);

                             //alert(aId);

                             $scope.additem.splice(index, 1);
                             $scope.getgrandtotal = $scope.getgrandtotal - aitem.totalprice1;
                             //$scope.amount = (($scope.getgrandtotal + $scope.calculatedtax) - this.totaldiscount) - this.shippingcost;
                             $scope.amount = $scope.getgrandtotal;
                             $scope.netamount = Math.round($scope.amount);
                             $scope.roundoff = this.netamount - this.amount;
                             var totalqty = parseInt($scope.getTotalQuantity) + parseInt(aitem.quantities1);
                             var request = $http({

                                 method: "put",
                                 url: "http://localhost:3200/api/Items/" + aId,
                                 crossDomain: true,
                                 data: {
                                     //DataFiledName:VariableName
                                     Id: aId,
                                     ItemName: $scope.itemname,
                                     Code: $scope.getCodesss,
                                     Manufacturer: $scope.manufacturersss,
                                     SalePrice: $scope.getsalepricesss,
                                     CostPrice: $scope.getCostPricesss,
                                     PurchasePrice: $scope.getPurchasePricesss,
                                     MRP: $scope.mrpsss,
                                     StandardUnit_ID: $scope.getStandardUnit_IDsss,
                                     PurchaseUnit_ID: $scope.getPurchaseUnit_IDsss,
                                     Category_ID: $scope.getCategory_IDsss,
                                     CategoryName: $scope.getCategoryNamesss,
                                     PurchaseTax: $scope.getPurchaseTaxsss,
                                     SalesTax: $scope.getSalesTaxsss,
                                     OpeningStock: $scope.getOpeningStocksss,
                                     IdealQuantity: $scope.getIdealQuantitysss,
                                     ReorderQuantity: $scope.getReorderQuantitysss,
                                     MaxQuantity: $scope.getMaxQuantitysss,
                                     TotalQuantity: totalqty,
                                     AllowSales: $scope.getAllowSalessss,
                                     AllowPurchase: $scope.getAllowPurchasesss,
                                     AllowInword: $scope.getAllowInwordsss,
                                     AllowOutword: $scope.getAllowOutwordsss,
                                     Description: $scope.getDescriptionsss,
                                     ManufacturingDate: $scope.getManufacturingDatesss,
                                     ExpiryDate: $scope.expirydatesss,
                                     ProfitPercentage: $scope.percevtagesss,
                                     Status: $scope.getStatussss

                                 },
                                 headers: { 'Content-Type': 'application/json' }
                             })
                                 .success(function (responce) {
                                     //alert('data added successfully');
                                 });
                         })

                       var request = $http({

                           method: "delete",
                           url: "http://localhost:3200/api/Customer_Item_Invoice/" + invoiceId,
                           crossDomain: true,
                           data: {

                           }
                       })

                   }//end delete function



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
                   $scope.shippingchange = function () {


                       $scope.PrintShipping = this.shippingcost;
                       // alert(this.tax );


                       if ($scope.getgrandtotal < this.totaldiscount) {
                           alert('Shipping Cost not be more than Amount..');
                           this.totaldiscount = null;

                           $scope.roundoff = (this.netamount - this.amount);
                           $scope.amount = (($scope.getgrandtotal - this.totaldiscount) + this.shippingcost);
                           $scope.netamount = Math.round($scope.amount);

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
                               $scope.PrintNetAmount = this.netamount;
                           }
                           else {


                               var amt = parseFloat(($scope.getgrandtotal / 100) * parseFloat(this.tax));
                               $scope.calculatedtax = amt;
                               var amount = $scope.getgrandtotal + amt;
                               //var netamount = Math.round(amount);

                               $scope.amount = ((amount - this.totaldiscount) + this.shippingcost);
                               $scope.netamount = Math.round($scope.amount);
                               $scope.roundoff = (this.netamount - this.amount);

                               //Print Page
                               $scope.PrintAmount = this.amount;
                               $scope.PrintRoundOff = this.roundoff;
                               $scope.PrintNetAmount = this.netamount;

                           }

                       }

                   }


                   //change on selecte tax
                   $scope.selecttax = function () {

                       if (this.tax == '') {
                           $scope.calculatedtax = null;
                           //$scope.netamount = $scope.getgrandtotal;
                           $scope.amount = (($scope.getgrandtotal - this.totaldiscount) + this.shippingcost);
                           // $scope.netamount = Math.round($scope.amount);
                           $scope.netamount = Math.round($scope.amount);
                           $scope.roundoff = (this.netamount - this.amount);

                           //Print Page
                           $scope.PrintAmount = this.amount;
                           $scope.PrintRoundOff = this.roundoff;
                           $scope.PrintNetAmount = this.netamount;

                           // alert($scope.getgrandtotal);
                       }
                       else {
                           var amt = parseFloat(($scope.getgrandtotal / 100) * this.tax);
                           $scope.calculatedtax = amt;
                           $scope.amount = ((($scope.getgrandtotal + amt) - this.totaldiscount) + this.shippingcost);
                           $scope.netamount = Math.round($scope.amount);
                           $scope.roundoff = (this.netamount - this.amount);

                           //Print Page
                           $scope.PrintAmount = this.amount;
                           $scope.PrintRoundOff = this.roundoff;
                           $scope.PrintNetAmount = this.netamount;
                       }
                       $scope.PrintTax = this.calculatedtax;
                   }

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

               }

           });


            $scope.showModal = !$scope.showModal;
        }//end 1st if
    };//end toggel method

    //payment modal open
    $scope.showpaymentmodal = function () {

        $scope.makePaymentModal = !$scope.makePaymentModal;
    }

    //Code for Print Page
    $scope.amountChanges = function () {

        $scope.BalanceAmount = this.txtAmount - this.txtPaidAmount;
        $scope.PrintPaidAmount = this.txtPaidAmount;
        $scope.PrintBalanceAmount = $scope.BalanceAmount;
    }

    $scope.NoteChange = function () {

        $scope.PrintNote = this.Note;
    }

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
           $scope.city = cust.City;
           var cityid = cust.City_ID;
           var cust_name = cust.Name;


           //For Print Page
           $scope.PrintCustName = cust_name;
           //alert("$scope.PrintCustName=" + $scope.PrintCustName);
           $scope.PrintCustContactNo = $scope.Customercontactno;


           $scope.PrintDueDate = this.DueDate;

           $scope.payment = function (netamount) {

               var Customer_Id = this.CustomerName;
               // alert(Customer_Id);
               var CustomerNames = cust_name;
               var City_ID = cityid;
               var ContactNumber = $scope.Customercontactno;
               var InvoiceDate = this.InvoiceDate;
               var Ref = this.Ref;
               var DueDate = this.DueDate;
               var Note = this.Note;
               var TotalTaxAmount = $scope.getgrandtotal;
               var ShippingCost = this.shippingcost;
               var Amount = this.amount;
               var RoundOff = this.roundoff;
               var NetAmount = this.netamount;
               var SalesReturn = 0;
               var Status = true;




               // console.log("CustomerName: " + CustomerName);
               var request = $http({
                   method: "post",
                   url: "http://localhost:3200/api/SalesInvoices",
                   crossDomain: true,
                   data: {
                       // DataFiledName:VariableName
                       Customer_ID: Customer_Id,
                       CustomerName: CustomerNames,
                       City_ID: City_ID,
                       ContactNumber: ContactNumber,
                       InvoiceDate: InvoiceDate,
                       Ref: Ref,
                       DueDate: DueDate,
                       Note: Note,
                       TotalTaxAmount: TotalTaxAmount,
                       ShippingCost: ShippingCost,
                       Amount: Amount,
                       RoundOff: RoundOff,
                       NetAmount: NetAmount,
                       SalesReturn: SalesReturn,
                       Status: Status
                   }, headers: { 'Content-Type': 'application/json' }
               })
            .success(function (responce) {

                //  alert('data added successfully');
            })



               $scope.txtReferenceNo = this.Ref;
               $scope.txtAmount = netamount;
               $scope.txtCustomerName = $scope.Customern;
               $scope.txtCityPayment = $scope.city;
               $scope.txtContactPayment = $scope.Customercontactno;
               $scope.txtNotePaymentDetails = this.Note;



           }


           $scope.savePayment = function () {

               //$scope.IsHidden = $scope.IsHidden ? false : true;
               //$scope.IsShowdiv = $scope.IsShowdiv ? false : true;

               $scope.IsHidden = false;
               $scope.IsShowdiv = false;
               $scope.IsTextHide = true;
               $scope.IsShowLbl = true;
               $scope.IsEditHide = false;
               $scope.IsSaveHide = false;
               $scope.PrintBtn = false;

               var Customer_Id = this.CustomerName;

               var paymenttype = this.ddlPaymentType;
               var chequenumber = this.txtChequenoS;
               var PaymentDate = this.PaymentDate;
               var issueDate = this.txtIssueDate;
               var DepositeDate = this.txtDepositeDate;
               var BankName = this.txtBankName;
               var depositeto = this.ddlDepositeTo;
               var Note = this.txtNotePaymentDetails;
               var TotalAmount = this.txtAmount;
               var PaidAmount = this.txtPaidAmount;
               var balanceAmt = this.BalanceAmount;
               var chequeStatus;

               this.CustomerName = "";

               this.ddlPaymentType = "";
               this.txtChequenoS = "";
               this.PaymentDate = "";
               this.txtIssueDate = "";
               this.txtDepositeDate = "";
               this.txtBankName = "";
               this.ddlDepositeTo = "";
               this.txtNotePaymentDetails = "";
               this.txtAmount = "";
               this.txtPaidAmount = "";
               this.BalanceAmount = "";
               var Status = true;
               if (paymenttype == 'Cheque') {
                   chequeStatus = "Pending";
                   var request = $http({
                       method: "post",
                       url: "http://localhost:3200/api/CustomerPayments",
                       crossDomain: true,
                       data: {
                           Customer_ID: Customer_Id,
                           PaymentType: paymenttype,
                           ChequeNumber: chequenumber,
                           PaymentDate: PaymentDate,
                           TotalAmount: TotalAmount,
                           PaidAmount: PaidAmount,
                           BalanceAmount: balanceAmt,
                           IssueDate: issueDate,
                           DepositeDate: DepositeDate,
                           DepositeTo: depositeto,
                           BankName: BankName,
                           Note: Note,
                           ChequeStatus: chequeStatus,
                           Status: Status
                       },
                       headers: { 'Content-Type': 'application/json' }
                   })
                      .success(function (responce) {
                          //alert('data added successfully');
                      });
               }
               else {
                   var request = $http({
                       method: "post",
                       url: "http://localhost:3200/api/CustomerPayments",
                       crossDomain: true,
                       data: {
                           Customer_ID: Customer_Id,
                           PaymentType: paymenttype,
                           ChequeNumber: chequenumber,
                           PaymentDate: PaymentDate,
                           TotalAmount: TotalAmount,
                           PaidAmount: PaidAmount,
                           BalanceAmount: balanceAmt,
                           IssueDate: issueDate,
                           DepositeDate: DepositeDate,
                           DepositeTo: depositeto,
                           BankName: BankName,
                           Note: Note,
                           ChequeStatus: chequeStatus,
                           Status: Status

                       },
                       headers: { 'Content-Type': 'application/json' }
                   })
                .success(function (responce) {
                    //alert('data added successfully');
                });
               }
               //  $scope.IsHidden = false;

               // $location.path('/Savepayment');

           }
       })

    }


    //Get customer name
    $http.get('http://localhost:3200/api/customer_view')
      .success(function (res) {
          console.log(res);
          $scope.getCustomers = res;

      });


    //Get itme
    $http.get('http://localhost:3200/api/view_Item')
         .success(function (res) {
             console.log(res);
             $scope.getItemsname = res;
         });

    $scope.doSomethingWithDate = function (date) {
        alert(date);
    }

    $scope.percent = function (percentage) {
        if (this.costPrice == null) {
            alert('Please Add the Cost Price');
        }
        else {
            var salesPrice = parseFloat((this.costPrice * this.percentage) / 100);
            var costPrice = parseFloat(this.costPrice);
            var TotalSalesPrice = parseFloat(costPrice + salesPrice);
            $scope.salesPrice = TotalSalesPrice;
            $scope.MRP = TotalSalesPrice;
            $scope.purchasePrice = TotalSalesPrice;
        }
    }

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }

    //code for GET
    $http.get('http://localhost:3200/api/view_Item')
       .success(function (res) {
           // console.log(res);
           $scope.getItems = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";
           $scope.btnsave = true;
           $scope.btnupdate = false;
       })

    //code for GET UNIT TABLE VALUE
    $http.get('http://localhost:3200/api/units')
       .success(function (res) {
           //  console.log(res);
           $scope.getUnits = res;


       })


    //code for GET Categories
    $http.get('http://localhost:3200/api/View_Categories')
       .success(function (res) {
           // console.log(res);
           $scope.getCategories = res;

           //to get number of records


       })

    //code for GET TAX
    $http.get('http://localhost:3200/api/Taxes')
       .success(function (res) {
           //console.log(res);
           $scope.getTaxs = res;
       })

    //code for GET Percentage
    $http.get('http://localhost:3200/api/Percentages')
       .success(function (res) {
           //console.log(res);
           $scope.getPercentage = res;

       })

    //POST
    //code for save controller
    //save item
    $scope.saveItem = function () {

        var ItemName = this.itemName;
        var Code = this.code;
        var Manufacturer = this.manufacturer;
        var SalePrice = this.salesPrice;

        var CostPrice = this.costPrice;
        //if (this.manuFacturingDate == null) {
        //    alert('Please add the Manufacturing Date');
        //}
        //else {
        //var ManufacturingDate = $filter('date')(this.manuFacturingDate, "dd-MM-yyyy");
        // var ManufacturingDate = "12-12-2015";
        //}
        //// var ManufacturingDate = this.manuFacturingDate;
        //if (this.expeiryDate == null) {
        //    alert('Please add the Expeiry Date');
        //}
        //else {
        //var ExpiryDate = $filter('date')(this.expeiryDate, "dd-MM-yyyy");
        // var ExpiryDate = "12-05-2016";

        //}

        var ProfitPercentage = this.percentage;

        //  alert(ProfitPercentage);

        var PurchasePrice = this.purchasePrice;
        var MRP = parseInt(this.MRP);

        var StanderdUnit = this.standardUnit;
        var PurchaseUnit = this.purchaseUnit;

        // alert(StanderdUnit);
        //alert(PurchaseUnit);
        var Category = this.category;
        var PurchaseTax = this.purchaseTax;
        var SalesTax = this.salesTax;
        var OpeningStock = this.openingStock;
        var IdealQuantity = this.idealQuantity;
        var ReorderQuantity = this.reorderQuantity;

        var MaxQuatity = this.maxQuantity;
        var TotalQuatity = this.totalQuantity;
        //alert(MaxQuatity);
        //alert(TotalQuatity);
        var AllowSales = this.allowSales;
        var AllowPurchase = this.allowPurchase;
        var AllowInword = this.allowInword;
        var AllowOutword = this.allowOutword;
        var Description = this.description;
        var Status = true;

        // alert(ManufacturingDate );
        //alert(ExpiryDate);





        //condition will check if user has left any field vacant
        //if (ItemName == null || Code == null || Manufacturer == null || SalePrice == null || PurchasePrice == null || MRP == null || StanderdUnit == null || PurchaseUnit == null || Category == null || PurchaseTax == null || SalesTax == null || OpeningStock == null || IdealQuantity == null || ReorderQuantity == null || MaxQuatity == null || TotalQuatity == null || AllowSales == null || AllowPurchase == null || AllowInword == null || AllowOutword == null || Description == null) {
        //    alert("fill the fields");
        //    return;
        //}

        //else


        var request = $http({
            method: "post",
            url: "http://localhost:3200/api/items",
            crossDomain: true,
            data: {
                Code: Code,
                ItemName: ItemName,

                Manufacturer: Manufacturer,
                SalePrice: SalePrice,

                CostPrice: CostPrice,
                ////ManufacturingDate: ManufacturingDate,
                ////ExpiryDate: ExpiryDate,
                ProfitPercentage: ProfitPercentage,


                PurchasePrice: PurchasePrice,
                MRP: MRP,
                StandardUnit_ID: StanderdUnit,
                PurchaseUnit_ID: PurchaseUnit,
                Category_ID: Category,

                PurchaseTax: PurchaseTax,
                SalesTax: SalesTax,
                OpeningStock: OpeningStock,
                IdealQuantity: IdealQuantity,
                ReorderQuantity: ReorderQuantity,

                MaxQuantity: MaxQuatity,
                TotalQuantity: TotalQuatity,

                AllowSales: AllowSales,
                AllowPurchase: AllowPurchase,
                AllowInword: AllowInword,
                AllowOutword: AllowOutword,
                Description: Description,
                Status: Status,

            },
            headers: { 'Content-Type': 'application/json' }
        })
         .success(function (responce) {

             alert('data added successfully');
             //further code will refresh the current database data on page
             $http.get('http://localhost:3200/api/view_Item')
 .success(function (res) {
     var x = res.length;
     $scope.x = x;
     // console.log(res);
     $scope.getItems = res;
 });
         })
        this.itemName = null;
        this.code = null;
        this.manufacturer = null;
        this.salesPrice = null;

        this.costPrice = null;
        this.manuFacturingDate = null;
        this.expeiryDate = null;
        this.percentage = "";


        this.purchasePrice = null;
        this.MRP = null;
        this.standardUnit = "";
        this.purchaseUnit = "";
        this.category = "";
        this.purchaseTax = "";
        this.salesTax = "";
        this.openingStock = null;
        this.idealQuantity = null;
        this.reorderQuantity = null;
        this.maxQuantity = null;
        this.totalQuantity = null;
        this.allowSales = "";
        this.allowPurchase = "";
        this.allowInword = "";
        this.allowOutword = "";
        this.description = null;
    };


    //end new code



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


    //code for GET CITY
    $http.get('http://localhost:3200/api/County_State_City_View')
       .success(function (res) {
           console.log(res);
           $scope.getCity = res;

           //to get number of records

           var x = res.length;
           $scope.x = x;               // document.getElementById("demo").innerHTML = "Found " + x + " tr elements in the table.";

           $scope.btnsave = true;
           $scope.btnupdate = false;
       })

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

    $scope.updateItemOnreset = function (id, txtqty) {
        var aId = id;
        var gettxtqty = txtqty;

        var qtytoal = 0;
        $http.get('http://localhost:3200/api/View_Item/' + aId)
                    .success(function (res) {
                        console.log(res);
                        $scope.getItemstocks = res;
                        var itemstock = $scope.getItemstocks;

                        $scope.getavailablestock = itemstock.TotalQuantity;
                        $scope.getsalepricesss = itemstock.SalePrice;
                        $scope.itemname = itemstock.ItemName;
                        $scope.manufacturersss = itemstock.Manufacturer;
                        $scope.saleprice = itemstock.SalePrice;
                        $scope.getcostprice = itemstock.CostPrice;
                        $scope.quantity = this.quantity;
                        //  $scope.expeiryDate = itemstock.ExpiryDate;
                        $scope.mrpsss = itemstock.MRP;
                        $scope.percent = itemstock.ProfitPercentage;

                        $scope.getCodesss = itemstock.Code;
                        $scope.getCostPricesss = itemstock.CostPrice;
                        $scope.getPurchasePricesss = itemstock.PurchasePrice;
                        $scope.getStandardUnit_IDsss = itemstock.StandardUnit_ID;
                        $scope.getStandardUniName = itemstock.StandardUniName;
                        $scope.getPurchaseUnit_IDsss = itemstock.PurchaseUnit_ID;
                        $scope.getPurchaseUnitName = itemstock.PurchaseUnitName;
                        $scope.getCategory_IDsss = itemstock.Category_ID;
                        $scope.getCategoryNamesss = itemstock.CategoryName;
                        $scope.getPurchaseTaxsss = itemstock.PurchaseTax;
                        $scope.getPurchaseTaxName = itemstock.PurchaseTaxName;
                        $scope.getSalesTaxsss = itemstock.SalesTax;
                        $scope.getSalesTaxName = itemstock.SalesTaxName;
                        $scope.getOpeningStocksss = itemstock.OpeningStock;
                        $scope.getIdealQuantitysss = itemstock.IdealQuantity;
                        $scope.getReorderQuantitysss = itemstock.ReorderQuantity;
                        $scope.getMaxQuantitysss = itemstock.MaxQuantity;
                        $scope.getTotalQuantity = itemstock.TotalQuantity;
                        $scope.getAllowSalessss = itemstock.AllowSales;
                        $scope.getAllowPurchasesss = itemstock.AllowPurchase;
                        $scope.getAllowInwordsss = itemstock.AllowInword;
                        $scope.getAllowOutwordsss = itemstock.AllowOutword;
                        $scope.getDescriptionsss = itemstock.Description;
                        $scope.getManufacturingDatesss = itemstock.ManufacturingDate;
                        $scope.getStatussss = itemstock.Status;
                        $scope.percevtagesss = itemstock.ProfitPercentage;
                        $scope.expirydatesss = itemstock.ExpiryDate;

                        qtytoal = parseInt($scope.getTotalQuantity) + parseInt(txtqty);



                      //  alert("vidyaghjgkj" + qtytoal);
                        var request = $http({

                            method: "put",
                            url: "http://localhost:3200/api/Items/" + aId,
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
                                TotalQuantity: qtytoal,
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
                                 .success(function (responce) {
                                     //  alert('data added successfully');
                                 });
                    })

    }

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

        var resetArryItem = $scope.additem;
        $scope.additem = [];
        var count = resetArryItem.length;
        // alert("count="+count);
        for (var i = 0; i <= count; i++) {

            var id = resetArryItem[i].id1;
            var txtqty = resetArryItem[i].quantities1;
            $scope.updateItemOnreset(id, txtqty);

        }

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

    $scope.ItemCacel = function () {

        this.code = null;
        this.itemName = null;
        this.manufacturer = null;
        this.manuFacturingDate = null;
        this.expeiryDate = null;
        this.costPrice = null;
        this.salesPrice = null;
        this.percentage = null;
        this.purchasePrice = null;
        this.standardUnit = null;
        this.MRP = null;
        this.standardUnit = null;
        this.purchaseUnit = null;
        this.category = null;
        this.purchaseTax = null;
        this.salesTax = null;
        this.openingStock = null;
        this.idealQuantity = null;
        this.reorderQuantity = null;
        this.maxQuantity = null;
        this.totalQuantity = null;
        this.allowSales = null;
        this.allowPurchase = null;
        this.allowInword = null;
        this.allowOutword = null;
        this.description = null;


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
})

scotchApp.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                  '<h4 class="modal-title">{{ title }}</h4>' +
                '</div>' +
                '<div class="modal-body" ng-transclude></div>' +
              '</div>' +
            '</div>' +
          '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function (value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
})
