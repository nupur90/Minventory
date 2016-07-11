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
    public class View_UsersController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Users
        public IQueryable<View_Users> GetView_Users()
        {
            return db.View_Users;
        }

        // GET: api/View_Users/5
        [ResponseType(typeof(View_Users))]
        public IHttpActionResult GetView_Users(int id)
        {
            View_Users view_Users = db.View_Users.Find(id);
            if (view_Users == null)
            {
                return NotFound();
            }

            return Ok(view_Users);
        }

        // PUT: api/View_Users/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Users(int id, View_Users view_Users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Users.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Users).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_UsersExists(id))
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

        // POST: api/View_Users
        [ResponseType(typeof(View_Users))]
        public IHttpActionResult PostView_Users(View_Users view_Users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Users.Add(view_Users);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Users.Id }, view_Users);
        }

        // DELETE: api/View_Users/5
        [ResponseType(typeof(View_Users))]
        public IHttpActionResult DeleteView_Users(int id)
        {
            View_Users view_Users = db.View_Users.Find(id);
            if (view_Users == null)
            {
                return NotFound();
            }

            db.View_Users.Remove(view_Users);
            db.SaveChanges();

            return Ok(view_Users);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_UsersExists(int id)
        {
            return db.View_Users.Count(e => e.Id == id) > 0;
        }
    }
}