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
    public class ForgetPasswordsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/ForgetPasswords
        public IQueryable<ForgetPassword> GetForgetPasswords()
        {
            return db.ForgetPasswords;
        }

        // GET: api/ForgetPasswords/5
        [ResponseType(typeof(ForgetPassword))]
        public IHttpActionResult GetForgetPassword(int id)
        {
            ForgetPassword forgetPassword = db.ForgetPasswords.Find(id);
            if (forgetPassword == null)
            {
                return NotFound();
            }

            return Ok(forgetPassword);
        }

        // PUT: api/ForgetPasswords/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutForgetPassword(int id, ForgetPassword forgetPassword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != forgetPassword.Id)
            {
                return BadRequest();
            }

            db.Entry(forgetPassword).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForgetPasswordExists(id))
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

        // POST: api/ForgetPasswords
        [ResponseType(typeof(ForgetPassword))]
        public IHttpActionResult PostForgetPassword(ForgetPassword forgetPassword)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ForgetPasswords.Add(forgetPassword);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = forgetPassword.Id }, forgetPassword);
        }

        // DELETE: api/ForgetPasswords/5
        [ResponseType(typeof(ForgetPassword))]
        public IHttpActionResult DeleteForgetPassword(int id)
        {
            ForgetPassword forgetPassword = db.ForgetPasswords.Find(id);
            if (forgetPassword == null)
            {
                return NotFound();
            }

            db.ForgetPasswords.Remove(forgetPassword);
            db.SaveChanges();

            return Ok(forgetPassword);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ForgetPasswordExists(int id)
        {
            return db.ForgetPasswords.Count(e => e.Id == id) > 0;
        }
    }
}