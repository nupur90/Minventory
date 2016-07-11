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
    
    public partial class Payment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Payment()
        {
            this.PaymentSuppliers = new HashSet<PaymentSupplier>();
            this.CustomerPayments = new HashSet<CustomerPayment>();
        }
    
        public int Id { get; set; }
        public string PaymentType { get; set; }
        public string ChequeNumber { get; set; }
        public Nullable<System.DateTime> PaymentDate { get; set; }
        public Nullable<double> TotalAmount { get; set; }
        public Nullable<double> PaidAmount { get; set; }
        public Nullable<double> BalanceAmount { get; set; }
        public Nullable<System.DateTime> DepositeDate { get; set; }
        public string DepositeTo { get; set; }
        public string BankName { get; set; }
        public string Note { get; set; }
        public Nullable<bool> Status { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PaymentSupplier> PaymentSuppliers { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CustomerPayment> CustomerPayments { get; set; }
    }
}
