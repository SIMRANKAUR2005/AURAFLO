import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const pages = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Reviews", path: "/reviews" },
        { name: "Team", path: "/team" },
        { name: "About Us", path: "/about" },
        { name: "Support & FAQ", path: "/support" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "AuraFlo 1.0", path: "/product/auraflo-1" },
        { name: "AuraFlo 2.0", path: "/product/auraflo-2" },
        { name: "AuraFlo 3.0", path: "/product/auraflo-3" },
        { name: "Accessories", path: "/accessories" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Sitemap</h1>
      
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Website Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pages.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="text-muted-foreground hover:text-aura-purple transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sitemap; 