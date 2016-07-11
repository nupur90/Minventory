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
    public class RoleOfUsersController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/RoleOfUsers
        public IQueryable<RoleOfUser> GetRoleOfUsers()
        {
            return db.RoleOfUsers;
        }

        // GET: api/RoleOfUsers/5
        [ResponseType(typeof(RoleOfUser))]
        public IHttpActionResult GetRoleOfUser(int id)
        {
            RoleOfUser roleOfUser = db.RoleOfUsers.Find(id);
            if (roleOfUser == null)
            {
                return NotFound();
            }

            return Ok(roleOfUser);
        }

        // PUT: api/RoleOfUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoleOfUser(int id, RoleOfUser roleOfUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != roleOfUser.Id)
            {
                return BadRequest();
            }

            db.Entry(roleOfUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoleOfUserExists(id))
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

        // POST: api/RoleOfUsers
        [ResponseType(typeof(RoleOfUser))]
        public IHttpActionResult PostRoleOfUser(RoleOfUser roleOfUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RoleOfUsers.Add(roleOfUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = roleOfUser.Id }, roleOfUser);
        }

        // DELETE: api/RoleOfUsers/5
        [ResponseType(typeof(RoleOfUser))]
        public IHttpActionResult DeleteRoleOfUser(int id)
        {
            RoleOfUser roleOfUser = db.RoleOfUsers.Find(id);
            if (roleOfUser == null)
            {
                return NotFound();
            }

            db.RoleOfUsers.Remove(roleOfUser);
            db.SaveChanges();

            return Ok(roleOfUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RoleOfUserExists(int id)
        {
            return db.RoleOfUsers.Count(e => e.Id == id) > 0;
        }
    }
}