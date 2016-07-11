//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AzureInventoryEntityFrameworkWebAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Company
    {
        public int Id { get; set; }
        public Nullable<int> City_ID { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public string EmailID { get; set; }
        public string TelephoneNumber { get; set; }
        public string Address { get; set; }
        public Nullable<int> State_ID { get; set; }
        public string PinCode { get; set; }
        public Nullable<int> Country_ID { get; set; }
        public string Website { get; set; }
        public string VATNumber { get; set; }
        public string LBTNumber { get; set; }
        public string PANNumber { get; set; }
        public string LicenseNumber { get; set; }
        public string TINNo { get; set; }
        public string STNo { get; set; }
        public string TANNumber { get; set; }
        public string CINNumber { get; set; }
        public string Other { get; set; }
        public string Service { get; set; }
        public Nullable<System.DateTime> FinancialYearFrom { get; set; }
        public Nullable<System.DateTime> BookingBeginigFrom { get; set; }
        public string CurrencyChar { get; set; }
        public string CurrencySymbol { get; set; }
        public Nullable<bool> AgreeTermsAndCondition { get; set; }
        public Nullable<bool> Status { get; set; }
    
        public virtual City City { get; set; }
        public virtual Country Country { get; set; }
        public virtual State State { get; set; }
    }
}