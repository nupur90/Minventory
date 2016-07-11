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
    public class ExpensController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Expens
        public IQueryable<Expens> GetExpenses()
        {
            return db.Expenses;
        }

        // GET: api/Expens/5
        [ResponseType(typeof(Expens))]
        public IHttpActionResult GetExpens(int id)
        {
            Expens expens = db.Expenses.Find(id);
            if (expens == null)
            {
                return NotFound();
            }

            return Ok(expens);
        }

        // PUT: api/Expens/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExpens(int id, Expens expens)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expens.Id)
            {
                return BadRequest();
            }

            db.Entry(expens).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpensExists(id))
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

        // POST: api/Expens
        [ResponseType(typeof(Expens))]
        public IHttpActionResult PostExpens(Expens expens)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expenses.Add(expens);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = expens.Id }, expens);
        }

        // DELETE: api/Expens/5
        [ResponseType(typeof(Expens))]
        public IHttpActionResult DeleteExpens(int id)
        {
            Expens expens = db.Expenses.Find(id);
            if (expens == null)
            {
                return NotFound();
            }

            db.Expenses.Remove(expens);
            db.SaveChanges();

            return Ok(expens);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpensExists(int id)
        {
            return db.Expenses.Count(e => e.Id == id) > 0;
        }
    }
}