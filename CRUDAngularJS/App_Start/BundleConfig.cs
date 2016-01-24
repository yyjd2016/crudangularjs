using System.Web;
using System.Web.Optimization;

namespace CRUDAngularJS
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // 21/12/2015 Yunier: Added for use AngularJS
            bundles.Add(new ScriptBundle("~/bundles/angularJS").Include(
                "~/Scripts/angular.js"));

            bundles.Add(new ScriptBundle("~/bundles/customJS").Include(
                // Application files 
                "~/app/app.js",
                "~/app/mvccrud/mvccrudCtrl.js",
                "~/app/country/countryCtrl.js",

                // Application Services
                "~/app/services/Book.js",

                // Application Directives
                "~/app/directives/modal.js"));
        }
    }
}
