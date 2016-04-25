using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Menu1.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            BundleTable.EnableOptimizations = true;

            bundles.Add(new ScriptBundle("~/bundles/Menu1")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/Menu1.js"));

     
        }
    }
}