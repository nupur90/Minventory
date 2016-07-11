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
    public class Supplier_ViewController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Supplier_View
        public IQueryable<Supplier_View> GetSupplier_View()
        {
            return db.Supplier_View;
        }

        // GET: api/Supplier_View/5
        [ResponseType(typeof(Supplier_View))]
        public IHttpActionResult GetSupplier_View(int id)
        {
            Supplier_View supplier_View = db.Supplier_View.Find(id);
            if (supplier_View == null)
            {
                return NotFound();
            }

            return Ok(supplier_View);
        }

        // PUT: api/Supplier_View/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSupplier_View(int id, Supplier_View supplier_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplier_View.Id)
            {
                return BadRequest();
            }

            db.Entry(supplier_View).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Supplier_ViewExists(id))
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

        // POST: api/Supplier_View
        [ResponseType(typeof(Supplier_View))]
        public IHttpActionResult PostSupplier_View(Supplier_View supplier_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Supplier_View.Add(supplier_View);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Supplier_ViewExists(supplier_View.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = supplier_View.Id }, supplier_View);
        }

        // DELETE: api/Supplier_View/5
        [ResponseType(typeof(Supplier_View))]
        public IHttpActionResult DeleteSupplier_View(int id)
        {
            Supplier_View supplier_View = db.Supplier_View.Find(id);
            if (supplier_View == null)
            {
                return NotFound();
            }

            db.Supplier_View.Remove(supplier_View);
            db.SaveChanges();

            return Ok(supplier_View);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Supplier_ViewExists(int id)
        {
            return db.Supplier_View.Count(e => e.Id == id) > 0;
        }
    }
}