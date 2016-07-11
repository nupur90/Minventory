using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using InventoryEnitiyFrameworkWEB_API.Models;

namespace InventoryEnitiyFrameworkWEB_API.Controllers
{
    public class view_CustomerPaymentController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/view_CustomerPayment
        public IQueryable<view_CustomerPayment> Getview_CustomerPayment()
        {
            return db.view_CustomerPayment;
        }

        // GET: api/view_CustomerPayment/5
        [ResponseType(typeof(view_CustomerPayment))]
        public IHttpActionResult Getview_CustomerPayment(int id)
        {
            //view_CustomerPayment view_CustomerPayment = db.view_CustomerPayment.Find(id);
            view_CustomerPayment[] view_CustomerPayment = db.view_CustomerPayment.Where(cp=>cp.Customer_ID==id).ToArray();
            if (view_CustomerPayment == null)
            {
                return NotFound();
            }

            return Ok(view_CustomerPayment);
        }


        // GET: api/View_Customer_Ledger/5?paymentType=cash
        [ResponseType(typeof(string))]
        //[HttpGet]
        public IHttpActionResult GetView_Customer_LedgerRecord(string paymentType, int id)
        {
            view_CustomerPayment[] view_CustomerPayment = db.view_CustomerPayment.Where(a => a.Customer_ID == id && a.PaymentType == paymentType).ToArray();
            if (view_CustomerPayment == null)
            {
                return NotFound();
            }

            return Ok(view_CustomerPayment);
        }


        // GET: api/View_Customer_Ledger?paymentType=cash
        [ResponseType(typeof(string))]
        //[HttpGet]
        public IHttpActionResult GetView_Customer_LedgerRecord(string paymentType)
        {
            view_CustomerPayment[] view_CustomerPayment = db.view_CustomerPayment.Where(a =>a.PaymentType == paymentType).ToArray();
            if (view_CustomerPayment == null)
            {
                return NotFound();
            }

            return Ok(view_CustomerPayment);
        }

        // PUT: api/view_CustomerPayment/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putview_CustomerPayment(int id, view_CustomerPayment view_CustomerPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_CustomerPayment.Customer_ID)
            {
                return BadRequest();
            }

            db.Entry(view_CustomerPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!view_CustomerPaymentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/view_CustomerPayment
        [ResponseType(typeof(view_CustomerPayment))]
        public IHttpActionResult Postview_CustomerPayment(view_CustomerPayment view_CustomerPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.view_CustomerPayment.Add(view_CustomerPayment);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (view_CustomerPaymentExists(view_CustomerPayment.Customer_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_CustomerPayment.Customer_ID }, view_CustomerPayment);
        }

        // DELETE: api/view_CustomerPayment/5
        [ResponseType(typeof(view_CustomerPayment))]
        public IHttpActionResult Deleteview_CustomerPayment(int id)
        {
            view_CustomerPayment view_CustomerPayment = db.view_CustomerPayment.Find(id);
            if (view_CustomerPayment == null)
            {
                return NotFound();
            }

            db.view_CustomerPayment.Remove(view_CustomerPayment);
            db.SaveChanges();

            return Ok(view_CustomerPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool view_CustomerPaymentExists(int id)
        {
            return db.view_CustomerPayment.Count(e => e.Customer_ID == id) > 0;
        }
    }
}