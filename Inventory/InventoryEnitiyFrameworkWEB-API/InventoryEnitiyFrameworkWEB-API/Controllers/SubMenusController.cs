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
    public class SubMenusController : ApiController
    {
        private InventoryEntities db = new InventoryEntities();

        // GET: api/SubMenus
        public IQueryable<SubMenu> GetSubMenus()
        {
            return db.SubMenus;
        }

        // GET: api/SubMenus/5
        [ResponseType(typeof(SubMenu))]
        public IHttpActionResult GetSubMenu(int id)
        {
            SubMenu subMenu = db.SubMenus.Find(id);
            if (subMenu == null)
            {
                return NotFound();
            }

            return Ok(subMenu);
        }

        // PUT: api/SubMenus/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubMenu(int id, SubMenu subMenu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subMenu.Id)
            {
                return BadRequest();
            }

            db.Entry(subMenu).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubMenuExists(id))
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

        // POST: api/SubMenus
        [ResponseType(typeof(SubMenu))]
        public IHttpActionResult PostSubMenu(SubMenu subMenu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SubMenus.Add(subMenu);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = subMenu.Id }, subMenu);
        }

        // DELETE: api/SubMenus/5
        [ResponseType(typeof(SubMenu))]
        public IHttpActionResult DeleteSubMenu(int id)
        {
            SubMenu subMenu = db.SubMenus.Find(id);
            if (subMenu == null)
            {
                return NotFound();
            }

            db.SubMenus.Remove(subMenu);
            db.SaveChanges();

            return Ok(subMenu);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubMenuExists(int id)
        {
            return db.SubMenus.Count(e => e.Id == id) > 0;
        }
    }
}