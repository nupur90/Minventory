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
    public class BusinessDetailsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/BusinessDetails
        public IQueryable<BusinessDetail> GetBusinessDetails()
        {
            return db.BusinessDetails;
        }

        // GET: api/BusinessDetails/5
        [ResponseType(typeof(BusinessDetail))]
        public IHttpActionResult GetBusinessDetail(int id)
        {
            BusinessDetail businessDetail = db.BusinessDetails.Find(id);
            if (businessDetail == null)
            {
                return NotFound();
            }

            return Ok(businessDetail);
        }

        // PUT: api/BusinessDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBusinessDetail(int id, BusinessDetail businessDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != businessDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(businessDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BusinessDetailExists(id))
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

        // POST: api/BusinessDetails
        [ResponseType(typeof(BusinessDetail))]
        public IHttpActionResult PostBusinessDetail(BusinessDetail businessDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BusinessDetails.Add(businessDetail);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = businessDetail.Id }, businessDetail);
        }

        // DELETE: api/BusinessDetails/5
        [ResponseType(typeof(BusinessDetail))]
        public IHttpActionResult DeleteBusinessDetail(int id)
        {
            BusinessDetail businessDetail = db.BusinessDetails.Find(id);
            if (businessDetail == null)
            {
                return NotFound();
            }

            db.BusinessDetails.Remove(businessDetail);
            db.SaveChanges();

            return Ok(businessDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BusinessDetailExists(int id)
        {
            return db.BusinessDetails.Count(e => e.Id == id) > 0;
        }
    }
}