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
    public class Country_State_City_ViewController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/Country_State_City_View
        public IQueryable<Country_State_City_View> GetCountry_State_City_View()
        {
            return db.Country_State_City_View;
        }

        // GET: api/Country_State_City_View/5
        [ResponseType(typeof(Country_State_City_View))]
        public IHttpActionResult GetCountry_State_City_View(int id)
        {
            Country_State_City_View country_State_City_View = db.Country_State_City_View.Find(id);
            if (country_State_City_View == null)
            {
                return NotFound();
            }

            return Ok(country_State_City_View);
        }

        // PUT: api/Country_State_City_View/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCountry_State_City_View(int id, Country_State_City_View country_State_City_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != country_State_City_View.Country_ID)
            {
                return BadRequest();
            }

            db.Entry(country_State_City_View).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Country_State_City_ViewExists(id))
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

        // POST: api/Country_State_City_View
        [ResponseType(typeof(Country_State_City_View))]
        public IHttpActionResult PostCountry_State_City_View(Country_State_City_View country_State_City_View)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Country_State_City_View.Add(country_State_City_View);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Country_State_City_ViewExists(country_State_City_View.Country_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = country_State_City_View.Country_ID }, country_State_City_View);
        }

        // DELETE: api/Country_State_City_View/5
        [ResponseType(typeof(Country_State_City_View))]
        public IHttpActionResult DeleteCountry_State_City_View(int id)
        {
            Country_State_City_View country_State_City_View = db.Country_State_City_View.Find(id);
            if (country_State_City_View == null)
            {
                return NotFound();
            }

            db.Country_State_City_View.Remove(country_State_City_View);
            db.SaveChanges();

            return Ok(country_State_City_View);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Country_State_City_ViewExists(int id)
        {
            return db.Country_State_City_View.Count(e => e.Country_ID == id) > 0;
        }
    }
}