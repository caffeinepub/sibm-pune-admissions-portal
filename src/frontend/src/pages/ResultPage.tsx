import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import HeroBands from "../components/HeroBands";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const faqs = [
  {
    id: "faq-reapply",
    q: "Can I reapply next year?",
    a: "Yes, you are welcome to reapply in the next admission cycle. We encourage you to strengthen your profile and try again.",
  },
  {
    id: "faq-waitlist",
    q: "Is there a waitlist?",
    a: "The admissions committee maintains a waitlist. You will be contacted if a position becomes available.",
  },
  {
    id: "faq-feedback",
    q: "Can I request feedback on my application?",
    a: "Individual feedback is not provided, but you can contact the admissions office for general guidance on improving your application.",
  },
  {
    id: "faq-criteria",
    q: "What are the key selection criteria?",
    a: "Academic performance, entrance exam scores (SNAP/CAT/XAT/GMAT), work experience, and personal interview performance.",
  },
  {
    id: "faq-contact",
    q: "How can I contact the admissions office?",
    a: "Email: admissions@sibmpune.edu.in | Phone: +91-20-39116200 | Office hours: Mon-Fri, 9 AM to 5 PM.",
  },
];

const summaryRows = [
  { label: "Application No", key: "appno" },
  { label: "Status", key: "status" },
  { label: "Programme", key: "programme" },
];

export default function ResultPage() {
  const { appNumber } = useParams({ from: "/result/$appNumber" });
  const navigate = useNavigate();

  const displayName = "ANSH ARYA";

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const summaryValues: Record<string, React.ReactNode> = {
    appno: appNumber,
    status: (
      <span
        className="text-destructive font-bold uppercase tracking-wide"
        data-ocid="result.error_state"
      >
        NOT SELECTED
      </span>
    ),
    programme: "MBA 2026-28",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <HeroBands />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card
                className="shadow-card border-border"
                data-ocid="result.card"
              >
                <CardHeader className="border-b border-border pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-navy">
                        Admission Result: Application Status
                      </CardTitle>
                      <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        <span>
                          <span className="font-semibold text-foreground">
                            Application No:
                          </span>{" "}
                          {appNumber}
                        </span>
                        <span>
                          <span className="font-semibold text-foreground">
                            Applicant:
                          </span>{" "}
                          {displayName}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-destructive text-destructive-foreground shrink-0 font-bold px-3 py-1">
                      NOT SELECTED
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-6 px-6 pb-6">
                  <div
                    className="border-2 border-border rounded-lg p-8"
                    data-ocid="result.panel"
                  >
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center border-4 border-gold mb-3">
                        <div className="text-center">
                          <div className="text-white font-bold text-[9px] leading-tight px-1">
                            SIBM
                          </div>
                          <div className="text-gold text-[7px] tracking-widest">
                            PUNE
                          </div>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold text-navy uppercase tracking-widest text-center">
                        Admission Result
                      </h2>
                      <p className="text-sm text-muted-foreground text-center mt-0.5">
                        Symbiosis Institute of Business Management, Pune
                      </p>
                    </div>

                    <div className="border-t-2 border-gold mb-6" />

                    <div className="space-y-4 text-sm text-foreground leading-relaxed">
                      <p className="text-muted-foreground">Date: {today}</p>
                      <p>Dear {displayName},</p>
                      <p>
                        We regret to inform you that after careful evaluation of
                        your application{" "}
                        <strong>(Application No: {appNumber})</strong> for the
                        MBA Programme 2026-28, the Admissions Committee has
                        decided that your application has not been successful.
                      </p>
                      <p>
                        Our selection process is highly competitive, and we
                        receive applications from a large number of highly
                        qualified candidates. While your profile was given full
                        consideration, we are unable to offer you admission at
                        this time.
                      </p>
                      <p>
                        We appreciate your interest in Symbiosis Institute of
                        Business Management, Pune, and wish you the very best in
                        your future endeavors.
                      </p>
                      <div className="pt-4">
                        <p>Sincerely,</p>
                        <br />
                        <p className="font-semibold">
                          The Admissions Committee
                        </p>
                        <p>
                          Symbiosis Institute of Business Management (SIBM),
                          Pune
                        </p>
                        <p className="text-muted-foreground">
                          Symbiosis Knowledge Village, Lavale, Pune - 412115
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-border mt-6 pt-5">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        {summaryRows.map((row) => (
                          <div key={row.key} className="bg-muted rounded p-3">
                            <div className="text-xs text-muted-foreground mb-1">
                              {row.label}
                            </div>
                            <div className="text-sm font-semibold text-foreground">
                              {summaryValues[row.key]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="border-navy text-navy hover:bg-navy hover:text-white"
                      onClick={() => navigate({ to: "/" })}
                      data-ocid="result.secondary_button"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Go Back
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="shadow-card border-border" data-ocid="faq.card">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-lg font-bold text-navy">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 px-4">
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        data-ocid={`faq.item.${idx + 1}`}
                      >
                        <AccordionTrigger className="text-sm font-semibold text-foreground text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              <Card
                className="shadow-card border-border mt-4"
                data-ocid="contact.card"
              >
                <CardContent className="pt-5 pb-5 px-5">
                  <h3 className="font-bold text-navy text-sm mb-3">
                    Admissions Office
                  </h3>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>📧 admissions@sibmpune.edu.in</p>
                    <p>📞 +91-20-39116200</p>
                    <p>🏛 Symbiosis Knowledge Village, Lavale, Pune - 412115</p>
                    <p>🕘 Mon–Fri: 9:00 AM – 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
