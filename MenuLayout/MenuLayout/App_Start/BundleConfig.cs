using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace MenuLayout.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(
                new ScriptBundle("~/bundles/libraries")
                    .Include("~/Scripts/angular/angular.js")
                    .Include("~/Scripts/angular/angular-route.js")
                    .Include("~/Scripts/angular/angular-resource.js")
                    .Include("~/Scripts/bootstrap.js")
                    .Include("~/Scripts/jquery-1.10.2.js")
                );

            //including all the css used in our app
            bundles.Add(
                new StyleBundle("~/bundles/css")
                    .Include("~/Content/bootstrap/bootstrap.css")
                    .Include("~/Content/bootstrap/bootstrap-theme.css")
                    .Include("~/Content/MenuLayout.css")
                );

            //including the javascript files in our app
            //bundles.Add(
            //    new ScriptBundle("~/bundles/MenuLayout")
            //        .Include("~/Scripts/MenuLayout/MenuLayout.js")
            //        .IncludeDirectory("~/Scripts/Controllers", "*.js")
            //    );

            bundles.Add(new ScriptBundle("~/bundles/MenuLayout")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/MenuLayout/MenuLayout.js"));

        }
    }
}