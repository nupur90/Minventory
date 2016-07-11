/// <reference path="../pages/purchases/supplierInvoices/supplierInvoices.html" />
/// <reference path="bootstrap-datepicker.js" />
/// <reference path="bootstrap-datepicker.js" />
/// <reference path="bootstrap-datepicker.js" />
/// <reference path="../pages/purchase/invoices/invoices.html" />
/// <reference path="../pages/purchase/invoices/invoices.html" />

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute',
    'scotchApp.items',
    'scotchApp.units',
    'scotchApp.customers',
    'scotchApp.suppliers',
    'scotchApp.supplierInvoice',
    'scotchApp.categories',
    'scotchApp.services',
    'scotchApp.taxs',
    'scotchApp.countryStateCitys',

    'scotchApp.deliveryChallan',
    'scotchApp.stockInHand',

    'scotchApp.users',



    'scotchApp.company',
    'scotchApp.Uconversion',
    'scotchApp.custPayment',
    'scotchApp.supplierPayment',
    'scotchApp.invoicesNew',
    'scotchApp.percentage',
    'scotchApp.expenses',
    'scotchApp.generalLedger',
    'scotchApp.customerLedger',
    'scotchApp.supplierLedger',
    'scotchApp.customerCheque',
    'scotchApp.supplierCheque',
    'scotchApp.bankDetails',
    'scotchApp.bankAccountDetails',
    'scotchApp.contraEntry',
    'scotchApp.partyPaymentsS',


    
    'scotchApp.reportDetails',
    'scotchApp.dailySalesRegister',
    'scotchApp.customerAndItemWiseSale',
    'scotchApp.customerWiseSale',
    'scotchApp.dailyProfitAndLoss',
    'scotchApp.dayEndReport',
    'scotchApp.expenseReport',
    'scotchApp.monthlyProfitAndLoss',
    'scotchApp.stockReconciliation',
    'scotchApp.vatReport',
    'scotchApp.invoicesNew',
    'scotchApp.supplierWiseSale',



     'scotchApp.settingsSales',
    'scotchApp.settingsPurchase',
    'scotchApp.print',
    'scotchApp.settingsItem',
    'scotchApp.PrinterConfiguration',
    'scotchApp.TaxPolicy',


]);


// configure our routes
scotchApp.config(function ($routeProvider, $httpProvider) {
    $routeProvider

        // route for the login page
        .when('/', {
            templateUrl: 'pages/masters/items/items.html',
            controller: 'mainController'
        })

        // route for the search_agent page                                                                                                                                                                                                                                                                                                                                                                                                                        
        .when('/search_agent', {
            templateUrl: 'pages/search/search_agent.html',
            controller: 'mainController',
        })


     // route for the unit page
        .when('/Units', {
            templateUrl: 'pages/masters/units/units.html',
            controller: 'mainController'
        })

    // route for the Customers page
        .when('/Customers', {
            templateUrl: 'pages/masters/customers/customers.html',
            controller: 'mainController'
        })

    // route for the Suppliers page
        .when('/Suppliers', {
            templateUrl: 'pages/masters/suppliers/suppliers.html',
            controller: 'mainController'
        })


    // route for the Purchase Invoice page
        .when('/PurchaseInvoice', {
            templateUrl: 'pages/purchases/supplierInvoices/supplierInvoices.html',
            controller: 'mainController'
        })

         .when('/Supplierpayment', {
             templateUrl: 'pages/purchases/supplier_payments/supplier_payments.html',
             controller: 'mainController'
         })

    // route for the Coategories page
        .when('/Category', {
            templateUrl: 'pages/masters/categories/categories.html',
            controller: 'mainController'
        })

    // route for the Services page
        .when('/Services', {
            templateUrl: 'pages/masters/services/services.html',
            controller: 'mainController'
        })

     // route for the Tax page
        .when('/Taxes', {
            templateUrl: 'pages/masters/taxes/taxs.html',
            controller: 'mainController'
        })


    // route for the Users page
        .when('/Users', {
            templateUrl: 'pages/masters/user/user.html',
            controller: 'mainController'
        })

     // route for the Company page
        .when('/Company', {
            templateUrl: 'pages/masters/company/company.html',
            controller: 'mainController'
        })

     // route for the UnitConversion page
        .when('/UnitConversion', {
            templateUrl: 'pages/masters/unit_conversion/unit_conversion.html',
            controller: 'mainController'
        })


    // route for the CustomerPayment page
        .when('/CustomerPayment', {
            templateUrl: 'pages/sales/customer_payments/cust_payments.html',
            controller: 'mainController'
        })

     // route for the invoices page
        .when('/Invoices', {
            templateUrl: 'pages/sales/invoices/invoices.html',
            controller: 'mainController'
        })

     // route for the Percentage page
        .when('/ProfitPercentage', {
            templateUrl: 'pages/masters/percentage/percentage.html',
            controller: 'mainController'
        })

     // route for the Expenses page
        .when('/Expenses', {
            templateUrl: 'pages/expenses/expenses.html',
            controller: 'mainController'

        })


          // route for the accounting General Ledger page
        .when('/GeneralLedger', {
            templateUrl: 'pages/accounting/general_ledger/general_ledger.html',
            controller: 'mainController'
        })

         // route for the accounting Customer Ledger page
        .when('/CustomerLedger', {
            templateUrl: 'pages/accounting/customer_ledger/customer_ledger.html',
            controller: 'mainController'
        })

      // route for the accounting Supplier Ledger page
        .when('/SupplierLedger', {
            templateUrl: 'pages/accounting/supplier_ledger/supplier_ledger.html',
            controller: 'mainController'
        })

    // route for the accounting Customer Cheque page
        .when('/CustomerCheque', {
            templateUrl: 'pages/accounting/customer_cheque/customer_cheque.html',
            controller: 'mainController'
        })

          // route for the accounting Supplier Cheque page
        .when('/SupplierCheque', {
            templateUrl: 'pages/accounting/supplier_cheque/supplier_cheque.html',
            controller: 'mainController'
        })

         // route for the accounting Bank Details page
        .when('/BankDetails', {
            templateUrl: 'pages/accounting/bank_details/bank_details.html',
            controller: 'mainController'
        })

     // route for the accounting Bank Account Details page
        .when('/BankAccountDetails', {
            templateUrl: 'pages/accounting/bank_account_details/bank_account.html',
            controller: 'mainController'
        })

    // route for the accounting Contra Entry page
        .when('/ContraEntry', {
            templateUrl: 'pages/accounting/contra_entry/contra_entry.html',
            controller: 'mainController'
        })

     // route for the accounting Party Payment page
        .when('/partyPayments', {
            templateUrl: 'pages/accounting/party_payments/party_payments.html',
            controller: 'mainController'
        })

     // route for the  Reports page
        .when('/reports', {
            templateUrl: 'pages/reports/report.html',
            controller: 'mainController'
        })
        // route for the customer_and_item_wise_sale Reports page
        .when('/customerItemWiseSale', {
            templateUrl: 'pages/reports/customer_and_item_wise_sale/customer_and_item_wise_sale.html',
            controller: 'mainController'
        })
         // route for the day_end_report Reports page
        .when('/dayEndReport', {
            templateUrl: 'pages/reports/day_end_report/day_end_report.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/dailySalesRegister', {
            templateUrl: 'pages/reports/daily_sales_register/daily_sales_register.html',
            controller: 'mainController'
        })
         // route for the customer_wise_sale Reports page
        .when('/customerWiseSale', {
            templateUrl: 'pages/reports/customer_wise_sale/customer_wise_sale.html',
            controller: 'mainController'
        })
         // route for the daily_profit_and_loss Reports page
        .when('/dailyProfitAndLoss', {
            templateUrl: 'pages/reports/daily_profit_and_loss/daily_profit_and_loss.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/expenseReport', {
            templateUrl: 'pages/reports/expense_report/expense_report.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/monthlyProfitAndLoss', {
            templateUrl: 'pages/reports/monthly_profit_and_loss/monthly_profit_and_loss.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/stockReconciliation', {
            templateUrl: 'pages/reports/stock_reconciliation/stock_reconciliation.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/supplierWiseSale', {
            templateUrl: 'pages/reports/supplier_wise_sale/supplier_wise_sale.html',
            controller: 'mainController'
        })
         // route for the customer_and_item_wise_sale Reports page
        .when('/vat_report', {
            templateUrl: 'pages/reports/vat_report/vat_report.html',
            controller: 'mainController'
        })

     // route for the accounting Party Payment page
        .when('/CountryStateCity', {
            templateUrl: 'pages/masters/countryStateCity/countryStateCity.html',
            controller: 'mainController'
        })

     // route for the accounting Party Payment page
        .when('/StockInHand', {
            templateUrl: 'pages/stock/stockInHand/stockInHand.html',
            controller: 'mainController'
        })
     // route for the accounting Party Payment page
        .when('/DeliveryChallan', {
            templateUrl: 'pages/stock/deliveryChallan/deliveryChallan.html',
            controller: 'mainController'
        })

     // route for the Settings Sales Data page
        .when('/SettingsSales', {
            templateUrl: 'pages/settings/sales/settings_sale.html',
            controller: 'mainController'
        })

     // route for the Settings Purchase Data page
        .when('/SettingsPurchase', {
            templateUrl: 'pages/settings/purchase/settings_purchase.html',
            controller: 'mainController'
        })

    // route for the Settings tax_policy Data page
        .when('/TaxPolicy', {
            templateUrl: 'pages/settings/tax_policy/tax_policy.html',
            controller: 'mainController'
        })

    // route for the Settings print Data page
        .when('/Print', {
            templateUrl: 'pages/settings/print/print.html',
            controller: 'mainController'
        })

    // route for the Settings item Data page
        .when('/SettingsItem', {
            templateUrl: 'pages/settings/item/settings_item.html',
            controller: 'mainController'
        })

    // route for the Settings PrinterConfiguration Data page
        .when('/PrinterConfiguration', {
            templateUrl: 'pages/settings/printer_configuration/printer_configuration.html',
            controller: 'mainController'
        })


});
// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($rootScope, $scope, $http, $location, $routeParams, $filter) {




    var doParseInt = function (val) {
        if (val && val != "")
            return parseInt(val);
    }
});






