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
    public class View_Bank_AccountsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Bank_Accounts
        public IQueryable<View_Bank_Accounts> GetView_Bank_Accounts()
        {
            return db.View_Bank_Accounts;
        }

        // GET: api/View_Bank_Accounts/5
        [ResponseType(typeof(View_Bank_Accounts))]
        public IHttpActionResult GetView_Bank_Accounts(int id)
        {
            View_Bank_Accounts view_Bank_Accounts = db.View_Bank_Accounts.Find(id);
            if (view_Bank_Accounts == null)
            {
                return NotFound();
            }

            return Ok(view_Bank_Accounts);
        }

        // PUT: api/View_Bank_Accounts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Bank_Accounts(int id, View_Bank_Accounts view_Bank_Accounts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Bank_Accounts.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Bank_Accounts).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Bank_AccountsExists(id))
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

        // POST: api/View_Bank_Accounts
        [ResponseType(typeof(View_Bank_Accounts))]
        public IHttpActionResult PostView_Bank_Accounts(View_Bank_Accounts view_Bank_Accounts)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Bank_Accounts.Add(view_Bank_Accounts);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Bank_Accounts.Id }, view_Bank_Accounts);
        }

        // DELETE: api/View_Bank_Accounts/5
        [ResponseType(typeof(View_Bank_Accounts))]
        public IHttpActionResult DeleteView_Bank_Accounts(int id)
        {
            View_Bank_Accounts view_Bank_Accounts = db.View_Bank_Accounts.Find(id);
            if (view_Bank_Accounts == null)
            {
                return NotFound();
            }

            db.View_Bank_Accounts.Remove(view_Bank_Accounts);
            db.SaveChanges();

            return Ok(view_Bank_Accounts);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Bank_AccountsExists(int id)
        {
            return db.View_Bank_Accounts.Count(e => e.Id == id) > 0;
        }
    }
}