//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InventoryEnitiyFrameworkWEB_API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class View_Customer_Item_Invoice
    {
        public int Id { get; set; }
        public Nullable<int> Item_Id { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<double> TotalAmount { get; set; }
        public string BatchNumber { get; set; }
        public Nullable<System.DateTime> InsertedDate { get; set; }
        public Nullable<int> Customer_Id { get; set; }
        public string CustomerName { get; set; }
        public string ItemName { get; set; }
        public Nullable<int> Code { get; set; }
        public string Manufacturer { get; set; }
        public Nullable<double> SalePrice { get; set; }
        public Nullable<double> CostPrice { get; set; }
        public Nullable<double> PurchasePrice { get; set; }
        public Nullable<double> MRP { get; set; }
        public Nullable<int> StandardUnit_ID { get; set; }
        public Nullable<int> StandardUniName { get; set; }
        public Nullable<int> PurchaseUnit_ID { get; set; }
        public Nullable<int> PurchaseUnitName { get; set; }
        public Nullable<int> Category_ID { get; set; }
        public string CategoryName { get; set; }
        public Nullable<int> PurchaseTax { get; set; }
        public string PurchaseTaxName { get; set; }
        public Nullable<int> SalesTax { get; set; }
        public string SalesTaxName { get; set; }
        public Nullable<int> OpeningStock { get; set; }
        public Nullable<int> IdealQuantity { get; set; }
        public Nullable<int> ReorderQuantity { get; set; }
        public Nullable<int> MaxQuantity { get; set; }
        public Nullable<int> TotalQuantity { get; set; }
        public Nullable<System.DateTime> ManufacturingDate { get; set; }
        public Nullable<System.DateTime> ExpiryDate { get; set; }
        public Nullable<int> ProfitPercentage { get; set; }
        public Nullable<bool> AllowSales { get; set; }
        public Nullable<bool> AllowPurchase { get; set; }
        public Nullable<bool> AllowInword { get; set; }
        public Nullable<bool> AllowOutword { get; set; }
        public string Description { get; set; }
    }
}
