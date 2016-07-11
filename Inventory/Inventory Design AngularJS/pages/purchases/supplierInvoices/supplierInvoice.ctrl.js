var scotchApp = angular.module('scotchApp.supplierInvoice', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('supplierInvoicesController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    //code for Print Page

    $scope.IsHidden = true;
    $scope.IsShowdiv = true;
    var totQuantity = 0;


    //code for GET CITY
    $http.get('http://localhost:3200/api/Country_State_City_View')
       .success(function (res) {
           console.log(res);
           $scope.getCity = res;
 })

    //code for GET Percentage
    $http.get('http://localhost:3200/api/Percentages')
       .success(function (res) {
           //console.log(res);
           $scope.getPercentage = res;

       })

    //code for GET UNIT TABLE VALUE
    $http.get('http://localhost:3200/api/View_Unit')
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

    $scope.ItemCacel = function () {

        this.id = null;
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


        $scope.btnsave = true;
        $scope.btnupdate = false;
        //$scope.signup1.$setPristine();

    }

    $scope.percent = function (percentage) {
        if (this.costPrice == null) {
            this.percentage = "";
            alert('Please Add the Cost Price');
        }
        else if (this.percentage == null || this.percentage == "") {
            this.salesPrice = null;
            this.MRP = null;
            this.purchasePrice = null;
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

    $scope.changeInvoice = function () {

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

    $scope.NoteChange = function () {

        $scope.PrintNote = this.Note;
    }

    $scope.amountChanges = function () {

        $scope.BalanceAmount = this.txtAmount - this.txtPaidAmount;
        $scope.PrintPaidAmount = this.txtPaidAmount;
        $scope.PrintBalanceAmount = $scope.BalanceAmount;
    }

    $scope.ShowMaindiv = function () {

        // $location.path("/PurchaseInvoice");

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
    var removeItem = [];
    //Get customer 
    $http.get('http://localhost:3200/api/Supplier_View')
      .success(function (res) {
          //  console.log(res);
          $scope.getCustomers = res;

      });
    //get customer by id
    $scope.custid = function (CustomerName) {
        var id = CustomerName;
        $http.get('http://localhost:3200/api/Supplier_View/' + id)
     .success(function (res) {
         // console.log(res);
         $scope.getCustomerscitycno = res;
         var supplier = $scope.getCustomerscitycno;
         $scope.Customercontactno = supplier.ContactNumber;
         $scope.Customern = supplier.Name;

         $scope.city = supplier.City;
         var cityid = supplier.City_ID;
         var supplier_name = supplier.Name;


         $scope.PrintSupplierName = supplier_name;
         //alert("$scope.PrintCustName=" + $scope.PrintCustName);
         $scope.PrintSupplierContactNo = $scope.Customercontactno;

         // $scope.PrintDueDate = this.DueDate;

         //For making a payment

         $scope.payment = function (netamount) {


             var Supplier_id = this.CustomerName;
             // alert("Supplier_id=" + Supplier_id);
             var CustomerName = supplier_name;
             // alert(CustomerName);
             var City_ID = cityid;
             //   alert(City_ID);
             var ContactNumber = String($scope.Customercontactno);
             // alert(CustomerName);
             var InvoiceDate = this.InvoiceDate;
             // alert(InvoiceDate);
             var Ref = String(this.Ref);
             // alert(Ref);
             var DueDate = this.DueDate;
             //alert(DueDate);
             var Note = String(this.Note);
             // alert(Note);

             var TotalTaxAmount = $scope.getgrandtotal;
             //alert(TotalTaxAmount);

             var ShippingCost = this.shippingcost;
             //   alert("ShippingCost=" + ShippingCost);

             var Amount = this.amount;
             // alert(Amount);

             var RoundOff = this.roundoff;
             //alert(RoundOff);

             var NetAmount = this.netamount;
             //alert(NetAmount);

             var PurchaseReturn = true;
             //alert(PurchaseReturn);
             var Status = true;
             //alert(Status);

             ////console.log("CustomerName: " + CustomerName);
             //*********
             var request = $http({
                 method: "post",
                 url: "http://localhost:3200/api/PurchaseInvoices",
                 crossDomain: true,
                 data: {
                     //DataFiledName:VariableName
                     Supplier_ID: Supplier_id,
                     SupplyerName: CustomerName,
                     City_ID: City_ID,
                     ContactNumber: ContactNumber,
                     InvoiceDate: InvoiceDate,
                     DueDate: DueDate,
                     Note: Note,
                     PurchaseReturn: PurchaseReturn,
                     TotalTaxAmount: TotalTaxAmount,
                     ShippingCost: ShippingCost,
                     Amount: Amount,
                     RoundOff: RoundOff,
                     NetAmount: NetAmount,

                     Status: Status
                 },
                 headers: { 'Content-Type': 'application/json' }
             })
                  .success(function (responce) {

                      alert('data added successfully');
                  });


             $scope.txtAmount = this.netamount;

             $scope.txtCustomerName = $scope.Customern;
             $scope.txtCityPayment = $scope.city;
             $scope.txtContactPayment = $scope.Customercontactno;
             $scope.txtNotePaymentDetails = this.Note;
         }


         ///////////For Save payment in payment form
         $scope.savePayment = function () {



             $scope.IsHidden = false;
             $scope.IsShowdiv = false;
             $scope.IsTextHide = true;
             $scope.IsShowLbl = true;
             $scope.IsEditHide = false;
             $scope.IsSaveHide = false;
             $scope.PrintBtn = false;


             var Supplier_Id = this.CustomerName;
             //  alert(Supplier_Id);
             var paymenttype = this.ddlPaymentType;
             var chequenumber = this.txtChequeno;
             var PaymentDate = this.PaymentDate;
             var totalAmount = this.txtAmount;
             var Paidamount = this.txtPaidAmount;
             var balanceamount = this.BalanceAmount;

             var BankName = this.txtBankName;
             var depositeto = this.ddlDepositeTo;
             var Note = this.txtNotePaymentDetails;
             var chequeNo = this.txtChequenoS;
             var depositeDate = this.txtDepositeDate;
             var issueDate = this.txtIssueDate;

             var Status = true;

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

             if (this.ddlPaymentType == 'Cheque') {
                 var chequeStatus = "Pending";
                 var request = $http({
                     method: "post",
                     url: "http://localhost:3200/api/SupplierPayments",
                     crossDomain: true,
                     data: {
                         Supplier_ID: Supplier_Id,
                         PaymentType: paymenttype,
                         ChequeNumber: chequenumber,
                         PaymentDate: PaymentDate,
                         TotalAmount: totalAmount,
                         PaidAmount: Paidamount,
                         BalanceAmount: balanceamount,
                         DepositeDate: depositeDate,
                         IssueDate: issueDate,
                         ChequeNumber: chequeNo,

                         DepositeTo: depositeto,
                         BankName: BankName,
                         Note: Note,
                         ChequeStatus: chequeStatus,
                         Status: Status

                     },
                     headers: { 'Content-Type': 'application/json' }
                 })
               .success(function (responce) {
                   //  alert('data added successfully');
               });

             }

             //********
             if (this.ddlPaymentType == 'Cash' || this.ddlPaymentType == 'CreditCard' || this.ddlPaymentType == 'DebitCard') {
                 var request = $http({
                     method: "post",
                     url: "http://localhost:3200/api/SupplierPayments",
                     crossDomain: true,
                     data: {
                         Supplier_ID: Supplier_Id,
                         PaymentType: paymenttype,
                         ChequeNumber: chequenumber,
                         PaymentDate: PaymentDate,
                         TotalAmount: totalAmount,
                         PaidAmount: Paidamount,
                         BalanceAmount: balanceamount,
                         DepositeDate: depositeDate,
                         IssueDate: issueDate,
                         ChequeNumber: chequeNo,

                         DepositeTo: depositeto,
                         BankName: BankName,
                         Note: Note,
                         Status: Status

                     },
                     headers: { 'Content-Type': 'application/json' }
                 })
                    .success(function (responce) {
                        //alert('data added successfully');
                    });
             }
         }

         // $location.path('/Savepayment');




     })
    }

    //Get itme
    $http.get('http://localhost:3200/api/view_Item')
         .success(function (res) {
             // console.log(res);
             $scope.getItemsname = res;
         });


    //code for GET
    $http.get('http://localhost:3200/api/Taxes')
       .success(function (res) {
           // console.log(res);
           $scope.getTaxs = res;
       })


    //Use For selecting a particular item from the item list 
    $scope.toggleModal = function (selecteditem) {
        if (this.CustomerName == null || this.CustomerName == "") {
            alert('Please Select The Customer ');
            $scope.selecteditem = "";
        }
        else {
            $scope.id = selecteditem;

            var getitem_id = this.selecteditem;
            var supplier_id = this.CustomerName;
            var insertedDate = $filter('date')(new Date(), "shortDate");

            $http.get('http://localhost:3200/api/view_Item/' + getitem_id)
           .success(function (res) {
               $scope.getItemstocks = res;
               var itemstock = $scope.getItemstocks;

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

               $scope.manuFacturingDate = itemstock.ManufacturingDate;

               //code for delete item from list
               
               //add item in list
               var grandquantity;
               $scope.additeminlist = function () {

                   var qty = this.quantity;
                   var batchNumber = this.batchNo;
                   var getitem_id = this.selecteditem;

                   this.batchNo = null;
                   this.quantity = null;
                   $scope.selecteditem = "";

                   if (qty == null || qty == "") {

                       alert('Please Add the Quantity..');

                   }
                   else {
                       var cprice = $scope.getcostprice;
                       tot_price = (qty * cprice);
                       count = count + 1;
                       //  $scope.selecteditem = "";
                       //$scope.additem.push({

                       //    itemname1: $scope.itemname,
                       //    manufacturer1: $scope.manufacturer,

                       //    quantities1: this.quantity, //per
                       //    expirydate1: $scope.expeiryDate,
                       //    mrp1: $scope.mrp,
                       //    saleprice1: $scope.saleprice, //sales Price
                       //    costprice1: $scope.getcostprice,//cost Price
                       //    totalprice1: tot_price,
                       //    percent1: $scope.percent,
                       //    batchNo: this.batchNo,
                       //    counts: count

                       //});

                       //insert Item Quantity to CustomerItemQuantity
                       var request = $http({

                           method: "post",
                           url: "http://localhost:3200/api/Supplier_Item_Invoice",
                           crossDomain: true,
                           data: {

                               Item_Id: getitem_id,
                               Supplier_Id: supplier_id,
                               Quantity: qty,
                               TotalAmount: tot_price,
                               BatchNumber: batchNumber,
                               InsertedDate: insertedDate

                           }
                       }).success(function (responce) {
                           //api/View_Supplier_Item_Invoice?supplier_Id={supplier_Id}&insertedDate={insertedDate}
                           $http.get('http://localhost:3200/api/View_Supplier_Item_Invoice?supplier_Id=' + supplier_id + '&insertedDate=' + insertedDate)
                              .success(function (res) {
                                  $scope.additem = res;
                              })
                       });


                       //code for reduce quantity from database table
                       grandquantity = parseInt($scope.getavailablestock)  + parseInt( qty);
                      
                       var request = $http({

                           method: "put",
                           url: "http://localhost:3200/api/Items/" + getitem_id,
                           crossDomain: true,
                           data: {
                               //DataFiledName:VariableName
                               Id: getitem_id,
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
                                   //   alert('data added successfully');
                               });

                       this.quantity = null;
                       this.batchNo = null;


                       $scope.getgrandtotal = ($scope.getgrandtotal + tot_price);

                       $scope.amount = $scope.getgrandtotal;
                       var disshiammount = $scope.amount;
                       $scope.netamount = Math.round($scope.amount);
                       $scope.roundoff = this.netamount - this.amount;

                       //Print Page
                       $scope.PrintAmount = this.amount;
                       $scope.PrintRoundOff = this.roundoff;
                       $scope.PrintNetAmount = this.netamount;
                      

                       $scope.getdiscount;
                       //change discount
                       $scope.discountchange = function () {



                           // alert(this.tax );
                           $scope.PrintDiscount = this.totaldiscount;

                           if ($scope.getgrandtotal < this.totaldiscount) {
                               alert('Discount not be more than Amount..');
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


                           if ($scope.getgrandtotal < this.shippingcost) {
                               alert('Shipping Cost not be more than Amount..');
                               this.shippingcost = null;

                               $scope.roundoff = (this.netamount - this.amount);
                               $scope.amount = (($scope.getgrandtotal + this.shippingcost) - this.totaldiscount);
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

                                   $scope.amount = (($scope.getgrandtotal + this.shippingcost) - this.totaldiscount);
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
                                   var netamount = Math.round(amount);

                                   $scope.amount = (amount + this.shippingcost);
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
                               $scope.netamount = $scope.getgrandtotal;
                               $scope.amount = ($scope.getgrandtotal - this.totaldiscount);
                               $scope.netamount = Math.round($scope.amount);
                               $scope.roundoff = (this.netamount - this.amount);
                               $scope.netamount = Math.round($scope.amount);
                               // alert($scope.getgrandtotal);

                               //Print Page
                               $scope.PrintAmount = this.amount;
                               $scope.PrintRoundOff = this.roundoff;
                               $scope.PrintNetAmount = this.netamount;
                           }
                           else {
                               var amt = parseFloat(($scope.getgrandtotal / 100) * parseFloat(this.tax));
                               $scope.calculatedtax = amt;
                               $scope.amount = $scope.getgrandtotal + amt;
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
                   }
               }

               //delete item from list
               $scope.deleteitemfrmlist = function (index, aitem) {

                   $scope.selecteditem = "";
                   var itemid = aitem.Id;
                   var Id = $scope.id;
              
                   $http.get('http://localhost:3200/api/view_Item_for_delivery_Challan/' + aitem.Item_Id)
                  .success(function (res) {
                   
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
                      $scope.getTotalQuantity = itemstock1.TotalQuantity;
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
                   $scope.getgrandtotal = $scope.getgrandtotal - aitem.TotalAmount;
                   $scope.amount = (($scope.getgrandtotal + $scope.calculatedtax) - this.totaldiscount) - this.shippingcost;
                   $scope.netamount = Math.round($scope.amount);
                   $scope.roundoff = this.netamount - this.amount;
                   var totalqty = parseInt($scope.getTotalQuantity) - parseInt(aitem.Quantity);

                 
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
                       url: "http://localhost:3200/api/Supplier_Item_Invoice/" + itemid,
                       crossDomain: true,
                       data: {

                       }
                   })
                   ////for calculating total Quantity after deleting
                   //totQuantity = parseInt(totQuantity) - parseInt(aitem.Quantity);
                   //$scope.totalQuantity = totQuantity;
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
                  // $scope.additem = [];
                   count = 0;
                   $scope.totaldiscount = parseInt(0);
                   $scope.shippingcost = parseInt(0);
                   $scope.amount = parseInt(0);
                   $scope.roundoff = parseInt(0);
                   $scope.netamount = parseInt(0);

                   removeItem = $scope.additem;
                   $scope.additem = [];

                   var count = removeItem.length;
                    alert('count  ' + count);
                   for (var i = 0; i < count; i++) {

                       $scope.removeItemFromItemList(removeItem[i].Id, removeItem[i].Quantity, removeItem[i].Item_Id);
                   }
                   $scope.removeItem = [];

               }
           });


            $scope.showModal = !$scope.showModal;
        }



    };

    //print

   

   

    //Remove Item From List
    $scope.removeItemFromItemList = function (id, quantity, itemId) {


         //alert('inner id '+id);
         //alert('inner qty ' + quantity);
         alert('inner item id ' + itemId);

         $http.get('http://localhost:3200/api/view_Item_for_delivery_Challan/' + itemId)
        .success(function (res) {
            // console.log(res);
            $scope.getItemstocks1 = res;
            var itemstocks = $scope.getItemstocks1;
            $scope.getItemId1 = itemstocks.Id;
            $scope.getCode1 = itemstocks.Code;
            $scope.itemname1 = itemstocks.ItemName;
            $scope.manufacturer1 = itemstocks.Manufacturer;
            $scope.getsaleprice1 = itemstocks.SalePrice;
            $scope.getCostPrice1 = itemstocks.CostPrice;
            $scope.getPurchasePrice1 = itemstocks.PurchasePrice;
            $scope.getStandardUnit_ID1 = itemstocks.StandardUnit_ID;
            $scope.getStandardUniName1 = itemstocks.StandardUniName;
            $scope.getPurchaseUnit_ID1 = itemstocks.PurchaseUnit_ID;
            $scope.getPurchaseUnitName1 = itemstocks.PurchaseUnitName;
            $scope.mrp1 = itemstocks.MRP;
            $scope.percent1 = itemstocks.ProfitPercentage;
            $scope.getCategory_ID1 = itemstocks.Category_ID;
            $scope.getCategoryName1 = itemstocks.CategoryName;
            $scope.getPurchaseTax1 = itemstocks.PurchaseTax;
            $scope.getPurchaseTaxName1 = itemstocks.PurchaseTaxName;
            $scope.getSalesTax1 = itemstocks.SalesTax;
            $scope.getSalesTaxName1 = itemstocks.SalesTaxName;
            $scope.getOpeningStock1 = itemstocks.OpeningStock;
            $scope.getIdealQuantity1 = itemstocks.IdealQuantity;
            $scope.getReorderQuantity1 = itemstocks.ReorderQuantity;
            $scope.getMaxQuantity1 = itemstocks.MaxQuantity;
            $scope.getTotalQuantity1 = itemstocks.TotalQuantity;
            $scope.getAllowSales1 = itemstocks.AllowSales;
            $scope.getAllowPurchase1 = itemstocks.AllowPurchase;
            $scope.getAllowInword1 = itemstocks.AllowInword;
            $scope.getAllowOutword1 = itemstocks.AllowOutword;
            $scope.getDescription1 = itemstocks.Description;
            $scope.getManufacturingDate1 = itemstocks.ManufacturingDate;
            $scope.getStatus1 = itemstocks.Status;
            $scope.percevtage1 = itemstocks.ProfitPercentage;
            $scope.expirydate1 = itemstocks.ExpiryDate;





            var totalqty = parseInt($scope.getTotalQuantity1) - parseInt(quantity);

            //  alert(itemstocks.TotalQuantity);

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
            }).success(function (responce) {
                alert('data Updated successfully');
            })

        });
        var request = $http({

            method: "delete",
            url: "http://localhost:3200/api/Supplier_Item_Invoice/" + id,
            crossDomain: true,
            data: {

            }
        })
    }



    $scope.CancelMyModelFields = function () {

        this.quantity = null;
        this.getbatchno = null;
    }

});
