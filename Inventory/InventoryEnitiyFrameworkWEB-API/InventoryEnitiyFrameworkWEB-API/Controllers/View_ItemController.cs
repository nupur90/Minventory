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
    public class View_ItemController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/View_Item
        public IQueryable<View_Item> GetView_Item()
        {
            return db.View_Item;
        }

        // GET: api/View_Item/5
        [ResponseType(typeof(View_Item))]
        public IHttpActionResult GetView_Item(int id)
        {
            View_Item view_Item = db.View_Item.Find(id);
            if (view_Item == null)
            {
                return NotFound();
            }

            return Ok(view_Item);
        }

        // PUT: api/View_Item/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutView_Item(int id, View_Item view_Item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != view_Item.Id)
            {
                return BadRequest();
            }

            db.Entry(view_Item).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!View_ItemExists(id))
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

        // POST: api/View_Item
        [ResponseType(typeof(View_Item))]
        public IHttpActionResult PostView_Item(View_Item view_Item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.View_Item.Add(view_Item);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (View_ItemExists(view_Item.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = view_Item.Id }, view_Item);
        }

        // DELETE: api/View_Item/5
        [ResponseType(typeof(View_Item))]
        public IHttpActionResult DeleteView_Item(int id)
        {
            View_Item view_Item = db.View_Item.Find(id);
            if (view_Item == null)
            {
                return NotFound();
            }

            db.View_Item.Remove(view_Item);
            db.SaveChanges();

            return Ok(view_Item);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool View_ItemExists(int id)
        {
            return db.View_Item.Count(e => e.Id == id) > 0;
        }
    }
}