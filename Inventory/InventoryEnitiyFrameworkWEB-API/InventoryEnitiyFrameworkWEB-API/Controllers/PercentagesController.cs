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
    public class PercentagesController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Percentages
        public IQueryable<Percentage> GetPercentages()
        {
            return db.Percentages;
        }

        // GET: api/Percentages/5
        [ResponseType(typeof(Percentage))]
        public IHttpActionResult GetPercentage(int id)
        {
            Percentage percentage = db.Percentages.Find(id);
            if (percentage == null)
            {
                return NotFound();
            }

            return Ok(percentage);
        }

        // PUT: api/Percentages/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPercentage(int id, Percentage percentage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != percentage.Id)
            {
                return BadRequest();
            }

            db.Entry(percentage).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PercentageExists(id))
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

        // POST: api/Percentages
        [ResponseType(typeof(Percentage))]
        public IHttpActionResult PostPercentage(Percentage percentage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Percentages.Add(percentage);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = percentage.Id }, percentage);
        }

        // DELETE: api/Percentages/5
        [ResponseType(typeof(Percentage))]
        public IHttpActionResult DeletePercentage(int id)
        {
            Percentage percentage = db.Percentages.Find(id);
            if (percentage == null)
            {
                return NotFound();
            }

            db.Percentages.Remove(percentage);
            db.SaveChanges();

            return Ok(percentage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PercentageExists(int id)
        {
            return db.Percentages.Count(e => e.Id == id) > 0;
        }
    }
}