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
    public class View_Users_RoleController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Users_Role
        public IQueryable<View_Users_Role> GetView_Users_Role()
        {
            return db.View_Users_Role;
        }

        // GET: api/View_Users_Role/5
        [ResponseType(typeof(View_Users_Role))]
        public IHttpActionResult GetView_Users_Role(int id)
        {
            View_Users_Role view_Users_Role = db.View_Users_Role.Find(id);
            if (view_Users_Role == null)
            {
                return NotFound();
            }

            return Ok(view_Users_Role);
        }

        // PUT: api/View_Users_Role/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Users_Role(int id, View_Users_Role view_Users_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Users_Role.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Users_Role).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_Users_RoleExists(id))
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

        // POST: api/View_Users_Role
        [ResponseType(typeof(View_Users_Role))]
        public IHttpActionResult PostView_Users_Role(View_Users_Role view_Users_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Users_Role.Add(view_Users_Role);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_Users_RoleExists(view_Users_Role.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Users_Role.Id }, view_Users_Role);
        }

        // DELETE: api/View_Users_Role/5
        [ResponseType(typeof(View_Users_Role))]
        public IHttpActionResult DeleteView_Users_Role(int id)
        {
            View_Users_Role view_Users_Role = db.View_Users_Role.Find(id);
            if (view_Users_Role == null)
            {
                return NotFound();
            }

            db.View_Users_Role.Remove(view_Users_Role);
            db.SaveChanges();

            return Ok(view_Users_Role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_Users_RoleExists(int id)
        {
            return db.View_Users_Role.Count(e => e.Id == id) > 0;
        }
    }
}