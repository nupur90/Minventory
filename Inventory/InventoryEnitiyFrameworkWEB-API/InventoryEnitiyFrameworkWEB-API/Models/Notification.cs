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
    
    public partial class Notification
    {
        public int Id { get; set; }
        public Nullable<int> ReorderItems { get; set; }
        public Nullable<int> OverdueCustomers { get; set; }
        public Nullable<int> OuverdueSuppliers { get; set; }
        public Nullable<bool> Status { get; set; }
    }
}
