var scotchApp = angular.module('scotchApp.supplierCheque', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('supplierChequeController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {

    $scope.Services = "Accounting Supplier Cheque Data";

    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
    $scope.totalch = 0;
    $scope.ishide = true;
  var ptype="Cheque"
    //code for GET
    $http.get('http://localhost:3200/api/View_SupplierCheque?PaymentType=' + ptype)
       .success(function (res) {
           $scope.totalch = 0;
           $scope.getSupplier = res;
           var sp = $scope.getSupplier;
           var count = sp.length;
         
           for (var i = 0; i < count; i++) {
               if (sp[i].Status==true) 
                   $scope.totalch = ($scope.totalch) + sp[i].PaidAmount;
                
               
           }

          
       })

    // Code For Get data By duration 
    $scope.changePaymentDate = function (Duration) {

        var duration = Duration;
       // alert("shbshbx");
        $scope.selectDuration = $filter('date')(this.selectDuration, "yyyy-MM-dd-HH:mm:ss");
        var today = "Today";

        if (duration == today) {
            //today date
            $scope.copyDuration = $filter('date')(new Date(), 'yyyy-MM-ddT00:00:00');
          //  alert(this.copyDuration);
            $http.get('http://localhost:3200/api/View_SupplierCheque?PaymentType=' + ptype)
            .success(function (res) {
                // console.log(res);
                $scope.getSupplier = res;
            })
        }
    }

    //checked
    $scope.checkboxModel = {
        value1: true,
        value:true
    };

     $scope.checkbox = [
    {
      selected: false
    },
    {
      selected: false
    },
    {
      selected: false
    }
  ];

    //all checked
    $scope.Allchecked=function(chk)
    {
       
        angular.forEach($scope.checkbox, function (obj) {
            obj.selected = $scope.select;
        });

       if(chk==true){

        var ID;
        var Supplier_ID;
        var PaymentType;
        var ChequeNumber;
        var PaymentDate;
        var TotalAmount;
        var PaidAmount;
        var BalanceAmount;
        var IssueDate;
        var DepositeDate;
        var DepositeTo;
        var BankName;
        var Note;
        var ChequeStatus="Cleared";
        var Status=true;
        $scope.arraySp = [];

       
        $http.get('http://localhost:3200/api/View_SupplierPayment?PaymentType=' + ptype)
            .success(function (res) {
                // console.log(res);
                $scope.getSupplierdt = res;
                var Spdata = $scope.getSupplierdt;
                var count = Spdata.length;
                console.log(Spdata);

                for (var i = 0; i < count; i++) {
                    Id = Spdata[i].Id;


                    $scope.arraySp.push({
                        ID: Spdata[i].Id,
                        Supplier_ID: Spdata[i].Supplier_ID,
                        PaymentType: Spdata[i].PaymentType,
                        ChequeNumber: Spdata[i].ChequeNumber,
                        PaymentDate: Spdata[i].PaymentDate,
                        TotalAmount: Spdata[i].TotalAmount,
                        PaidAmount: Spdata[i].PaidAmount,
                        BalanceAmount: Spdata[i].BalanceAmount,
                        IssueDate: Spdata[i].IssueDate,
                        DepositeDate: Spdata[i].DepositeDate,
                        DepositeTo: Spdata[i].DepositeTo,
                        BankName: Spdata[i].BankName,
                        Note: Spdata[i].Note,
                        //ChequeStatus: supplier.ChequeStatus,
                       // Status: Spdata[i].Status,
                    });

                }
            })

        
        var Arrayspcopy = [];
        Arrayspcopy = $scope.arraySp;
       // console.log("dsuhu=" + $scope.arraySp);

        $scope.Clear = function () {

            alert("ewfrrrrgteygt");
            var Sids = Arrayspcopy.length;
          
            for (var i = 0; i < Sids; i++) {

                var SpId = Arrayspcopy[i].ID;
                if (Arrayspcopy[i].Status==true){
                    
                    var request = $http({

                        method: "put",
                            url: "http://localhost:3200/api/SupplierPayments/" + SpId,
                        crossDomain: true,
                        data: {

                            Id: Arrayspcopy[i].ID,
                        Supplier_ID: Arrayspcopy[i].Supplier_ID,
                        PaymentType: Arrayspcopy[i].PaymentType,
                        ChequeNumber: Arrayspcopy[i].ChequeNumber,
                        PaymentDate: Arrayspcopy[i].PaymentDate,
                        TotalAmount: Arrayspcopy[i].TotalAmount,
                        PaidAmount: Arrayspcopy[i].PaidAmount,
                        BalanceAmount: Arrayspcopy[i].BalanceAmount,
                        IssueDate: Arrayspcopy[i].IssueDate,
                        DepositeDate: Arrayspcopy[i].DepositeDate,
                        DepositeTo: Arrayspcopy[i].DepositeTo,
                        BankName: Arrayspcopy[i].BankName,
                        Note: Arrayspcopy[i].Note,
                        ChequeStatus: ChequeStatus,
                        Status: Status

                        },
                        headers: { 'Content-Type': 'application/json' }
                    })
                       .success(function (responce) {

                           //alert('data added successfully');

                           $http.get('http://localhost:3200/api/View_SupplierCheque?PaymentType=' + ptype)
                                 .success(function (res) {
                                     $scope.totalch = 0;
                                     $scope.getSupplier = res;
                                     var sp = $scope.getSupplier;
                                     var count = sp.length;

                                         
                                             $scope.totalch = this.totalch;
                                        
                                  

                                 })
                    

                        
                       });
                }




            }//for loop end

             }
        }//if end
    }

    // single checked
    var Sid=0;
    $scope.CheckData = function (chk,data) {
      
        if (chk == true)
            {
        var d = data;
      //  alert(d.ChequeNumber);
        $scope.spdata = [];
        $scope.chequeNo = d.ChequeNumber;
       var chkno = "'" + $scope.fd + "'";
       Sid = Sid + 1;
        //alert(v);
        var ID;
        var Supplier_ID;
        var PaymentType;
        var ChequeNumber;
        var PaymentDate;
        var TotalAmount;
        var PaidAmount;
        var BalanceAmount;
        var IssueDate;
        var DepositeDate;
        var DepositeTo;
        var BankName;
        var Note;
        var ChequeStatus;
        var Status=true;
        var supplier;
       
        $http.get('http://localhost:3200/api/View_SupplierPayment?ChequeNumber=' + $scope.chequeNo)
            .success(function (res) {
                // console.log(res);
                $scope.getSupplierData = res;
                supplier = $scope.getSupplierData;
                var count = supplier.count;
                console.log(supplier);
                // alert(count);
                ChequeStatus = "Cleared";

                $scope.spdata.push({
                    ID: supplier.Id,
                    Supplier_ID: supplier.Supplier_ID,
                    PaymentType: supplier.PaymentType,
                    ChequeNumber: supplier.ChequeNumber,
                    PaymentDate: supplier.PaymentDate,
                    TotalAmount: supplier.TotalAmount,
                    PaidAmount: supplier.PaidAmount,
                    BalanceAmount: supplier.BalanceAmount,
                    IssueDate: supplier.IssueDate,
                    DepositeDate: supplier.DepositeDate,
                    DepositeTo: supplier.DepositeTo,
                    BankName: supplier.BankName,
                    Note: supplier.Note,
                    //ChequeStatus: supplier.ChequeStatus,
                    //Status: supplier.Status,
                });
            
              

             });

        }

        var arraydata = [];
        arraydata = $scope.spdata;

        $scope.Clear = function () {

           
            var Sids = arraydata.length;

            for (var i = 0; i < Sids; i++) {

                var SpId = arraydata[i].ID;
                if (d.ChequeStatus != ChequeStatus) {
                    var request = $http({

                        method: "put",
                        url: "http://localhost:3200/api/SupplierPayments/" + SpId,
                        crossDomain: true,
                        data: {
                            Id: arraydata[i].ID,
                            Supplier_ID: arraydata[i].Supplier_ID,
                            PaymentType: arraydata[i].PaymentType,
                            ChequeNumber: arraydata[i].ChequeNumber,
                            PaymentDate: arraydata[i].PaymentDate,
                            TotalAmount: arraydata[i].TotalAmount,
                            PaidAmount: arraydata[i].PaidAmount,
                            BalanceAmount: arraydata[i].BalanceAmount,
                            IssueDate: arraydata[i].IssueDate,
                            DepositeDate: arraydata[i].DepositeDate,
                            DepositeTo: arraydata[i].DepositeTo,
                            BankName: arraydata[i].BankName,
                            Note: arraydata[i].Note,
                            ChequeStatus: ChequeStatus,
                            Status: Status

                        },
                        headers: { 'Content-Type': 'application/json' }
                    })
                       .success(function (responce) {
                           $http.get('http://localhost:3200/api/View_SupplierCheque?PaymentType=' + ptype)
                                 .success(function (res) {
                                     $scope.totalch = 0;
                                     $scope.getSupplier = res;
                                     var sp = $scope.getSupplier;
                                     var count = sp.length;

                                    

                                 })
                           // alert('data added successfully');
                       });



                   
                }
                else {
                    alert("Please Select Pending Cheques Only")
                }
            }//for loop end
           
        }
   

     
    }

    //delete
    $scope.deleteCheque = function (data) {
        var d=data;
        var amt = d.PaidAmount;
        var ID;
        var Supplier_ID;
        var PaymentType;
        var ChequeNumber;
        var PaymentDate;
        var TotalAmount;
        var PaidAmount;
        var BalanceAmount;
        var IssueDate;
        var DepositeDate;
        var DepositeTo;
        var BankName;
        var Note;
        var ChequeStatus;
        var Status=false;
        var supplier;

        var chequeno = this.ChequeNumber;
        $http.get('http://localhost:3200/api/View_SupplierPayment?ChequeNumber=' +chequeno)
           .success(function (res) {
               // console.log(res);
               $scope.getSuppliers = res;
               supplier = $scope.getSuppliers;

               ID=supplier.Id;
               Supplier_ID =supplier.Supplier_ID;
               PaymentType = supplier.PaymentType;
               ChequeNumber = supplier.ChequeNumber;
               PaymentDate = supplier.PaymentDate;
               TotalAmount = supplier.TotalAmount;
               PaidAmount = supplier.PaidAmount;
               BalanceAmount = supplier.BalanceAmount;
               IssueDate = supplier.IssueDate;
               DepositeDate = supplier.DepositeDate;
               DepositeTo = supplier.DepositeTo;
               BankName = supplier.BankName;
               Note = supplier.Note;
               ChequeStatus = supplier.ChequeStatus;
               

               var request = $http({

                   method: "put",
                   url: "http://localhost:3200/api/SupplierPayments/" + ID,
                   crossDomain: true,
                   data: {
                       Id: ID,
                       Supplier_ID: Supplier_ID,
                       PaymentType: PaymentType,
                       ChequeNumber: ChequeNumber,
                       PaymentDate: PaymentDate,
                       TotalAmount: TotalAmount,
                       PaidAmount: PaidAmount,
                       BalanceAmount: BalanceAmount,
                       IssueDate: IssueDate,
                       DepositeDate: DepositeDate,
                       DepositeTo: DepositeTo,
                       BankName: BankName,
                       Note: Note,
                       ChequeStatus: ChequeStatus,
                       Status: Status

                   },
                   headers: { 'Content-Type': 'application/json' }
               })
                       .success(function (responce) {
                           $http.get('http://localhost:3200/api/View_SupplierCheque?PaymentType=' + ptype)
                                 .success(function (res) {
                                     $scope.totalch = 0;
                                     $scope.getSupplier = res;
                                     var sp = $scope.getSupplier;
                                     var count = sp.length;

                                     for (var i = 0; i < count; i++) {
                                       
                                             $scope.totalch = ($scope.totalch) + sp[i].PaidAmount;
                                         
                                     }
                                     $scope.totalch = this.totalch - PaidAmount;

                                 })
                       });

           })

    }


});//last