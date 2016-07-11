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
    public class NewUnitsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/NewUnits
        public IQueryable<NewUnit> GetNewUnits()
        {
            return db.NewUnits;
        }

        // GET: api/NewUnits/5
        [ResponseType(typeof(NewUnit))]
        public IHttpActionResult GetNewUnit(int id)
        {
            NewUnit newUnit = db.NewUnits.Find(id);
            if (newUnit == null)
            {
                return NotFound();
            }

            return Ok(newUnit);
        }

        // PUT: api/NewUnits/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutNewUnit(int id, NewUnit newUnit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != newUnit.Id)
            {
                return BadRequest();
            }

            db.Entry(newUnit).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewUnitExists(id))
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

        // POST: api/NewUnits
        [ResponseType(typeof(NewUnit))]
        public IHttpActionResult PostNewUnit(NewUnit newUnit)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NewUnits.Add(newUnit);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = newUnit.Id }, newUnit);
        }

        // DELETE: api/NewUnits/5
        [ResponseType(typeof(NewUnit))]
        public IHttpActionResult DeleteNewUnit(int id)
        {
            NewUnit newUnit = db.NewUnits.Find(id);
            if (newUnit == null)
            {
                return NotFound();
            }

            db.NewUnits.Remove(newUnit);
            db.SaveChanges();

            return Ok(newUnit);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NewUnitExists(int id)
        {
            return db.NewUnits.Count(e => e.Id == id) > 0;
        }
    }
}