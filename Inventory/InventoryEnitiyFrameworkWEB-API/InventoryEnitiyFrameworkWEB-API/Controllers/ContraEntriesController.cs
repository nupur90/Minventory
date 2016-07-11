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
    public class ContraEntriesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/ContraEntries
        public IQueryable<ContraEntry> GetContraEntries()
        {
            return db.ContraEntries;
        }

        // GET: api/ContraEntries/5
        [ResponseType(typeof(ContraEntry))]
        public IHttpActionResult GetContraEntry(int id)
        {
            ContraEntry contraEntry = db.ContraEntries.Find(id);
            if (contraEntry == null)
            {
                return NotFound();
            }

            return Ok(contraEntry);
        }

        // PUT: api/ContraEntries/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContraEntry(int id, ContraEntry contraEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contraEntry.Id)
            {
                return BadRequest();
            }

            db.Entry(contraEntry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContraEntryExists(id))
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

        // POST: api/ContraEntries
        [ResponseType(typeof(ContraEntry))]
        public IHttpActionResult PostContraEntry(ContraEntry contraEntry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContraEntries.Add(contraEntry);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = contraEntry.Id }, contraEntry);
        }

        // DELETE: api/ContraEntries/5
        [ResponseType(typeof(ContraEntry))]
        public IHttpActionResult DeleteContraEntry(int id)
        {
            ContraEntry contraEntry = db.ContraEntries.Find(id);
            if (contraEntry == null)
            {
                return NotFound();
            }

            db.ContraEntries.Remove(contraEntry);
            db.SaveChanges();

            return Ok(contraEntry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContraEntryExists(int id)
        {
            return db.ContraEntries.Count(e => e.Id == id) > 0;
        }
    }
}