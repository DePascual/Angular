using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Login.Models;
using MongoDB.Driver.Linq;

namespace Login.Controllers
{
    public class HomeController : Controller
    {

        private MongoDBcontext _dbContext;
        public HomeController()
        {
            _dbContext = new MongoDBcontext();
        }



        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult View1()
        {
            return View();
        }
        public ActionResult View2()
        {
            return View();
        }
        public ActionResult View3()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public bool Login(Usuario usuario)
        {
            var existeUsu = false;
            var collection = _dbContext.GetDatabase().GetCollection<Usuario>("login");

             return existeUsu = collection.AsQueryable().Where(x => x.username == usuario.username && x.password == usuario.password).Any() ? existeUsu = true : existeUsu = false;
        }
    }
}