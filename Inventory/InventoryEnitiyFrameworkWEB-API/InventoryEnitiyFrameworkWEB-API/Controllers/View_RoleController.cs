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
    public class View_RoleController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Role
        public IQueryable<View_Role> GetView_Role()
        {
            return db.View_Role;
        }

        // GET: api/View_Role/5
        [ResponseType(typeof(View_Role))]
        public IHttpActionResult GetView_Role(int id)
        {
            View_Role view_Role = db.View_Role.Find(id);
            if (view_Role == null)
            {
                return NotFound();
            }

            return Ok(view_Role);
        }

        // PUT: api/View_Role/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Role(int id, View_Role view_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Role.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Role).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_RoleExists(id))
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

        // POST: api/View_Role
        [ResponseType(typeof(View_Role))]
        public IHttpActionResult PostView_Role(View_Role view_Role)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Role.Add(view_Role);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = view_Role.Id }, view_Role);
        }

        // DELETE: api/View_Role/5
        [ResponseType(typeof(View_Role))]
        public IHttpActionResult DeleteView_Role(int id)
        {
            View_Role view_Role = db.View_Role.Find(id);
            if (view_Role == null)
            {
                return NotFound();
            }

            db.View_Role.Remove(view_Role);
            db.SaveChanges();

            return Ok(view_Role);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_RoleExists(int id)
        {
            return db.View_Role.Count(e => e.Id == id) > 0;
        }
    }
}