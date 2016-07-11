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
    public class ServicesViewsController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/ServicesViews
        public IQueryable<ServicesView> GetServicesViews()
        {
            return db.ServicesViews;
        }

        // GET: api/ServicesViews/5
        [ResponseType(typeof(ServicesView))]
        public IHttpActionResult GetServicesView(int id)
        {
            ServicesView servicesView = db.ServicesViews.Find(id);
            if (servicesView == null)
            {
                return NotFound();
            }

            return Ok(servicesView);
        }

        // PUT: api/ServicesViews/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutServicesView(int id, ServicesView servicesView)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != servicesView.Id)
            {
                return BadRequest();
            }

            db.Entry(servicesView).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicesViewExists(id))
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

        // POST: api/ServicesViews
        [ResponseType(typeof(ServicesView))]
        public IHttpActionResult PostServicesView(ServicesView servicesView)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ServicesViews.Add(servicesView);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ServicesViewExists(servicesView.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = servicesView.Id }, servicesView);
        }

        // DELETE: api/ServicesViews/5
        [ResponseType(typeof(ServicesView))]
        public IHttpActionResult DeleteServicesView(int id)
        {
            ServicesView servicesView = db.ServicesViews.Find(id);
            if (servicesView == null)
            {
                return NotFound();
            }

            db.ServicesViews.Remove(servicesView);
            db.SaveChanges();

            return Ok(servicesView);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ServicesViewExists(int id)
        {
            return db.ServicesViews.Count(e => e.Id == id) > 0;
        }
    }
}