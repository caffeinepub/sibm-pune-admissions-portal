import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "About SIBM",
    links: [
      "History & Legacy",
      "Vision & Mission",
      "Leadership",
      "Accreditations",
      "Rankings",
    ],
  },
  {
    title: "Programmes",
    links: [
      "MBA Full-Time",
      "MBA Executive",
      "PhD Programme",
      "Short Courses",
      "Summer School",
    ],
  },
  {
    title: "Admissions",
    links: [
      "Apply Now",
      "Eligibility",
      "Selection Process",
      "Fee Structure",
      "Scholarships",
    ],
  },
  {
    title: "Student Life",
    links: [
      "Campus Facilities",
      "Clubs & Activities",
      "Sports",
      "Events",
      "Hostel",
    ],
  },
  {
    title: "Contact",
    links: [
      "admissions@sibmpune.edu.in",
      "+91-20-39116200",
      "Lavale, Pune - 412115",
    ],
  },
];

const socialLinks = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-footer text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-sm text-gold mb-3 tracking-wide uppercase">
                {col.title}
              </h3>
              <ul className="space-y-1.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-xs text-white/70">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {year}. Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white/80"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, label }) => (
              <span key={label} className="text-white/50">
                <Icon className="w-4 h-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
