import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { AlertCircle, Search } from "lucide-react";
import { useState } from "react";
import HeroBands from "../components/HeroBands";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const faqs = [
  {
    id: "faq-docs",
    q: "What documents do I need for admission?",
    a: "You will need your academic transcripts, entrance exam scorecard (SNAP/CAT/XAT/GMAT), work experience certificates (if applicable), and identity proof.",
  },
  {
    id: "faq-results",
    q: "When are results announced?",
    a: "Results are typically announced within 2-4 weeks after the Personal Interaction (PI) round. Candidates are notified via email and can check status on this portal.",
  },
  {
    id: "faq-process",
    q: "How is the selection process structured?",
    a: "The process includes: Written Ability Test (WAT), Group Exercise (GE), and Personal Interaction (PI). Each component carries specific weightage in the final selection.",
  },
  {
    id: "faq-format",
    q: "What is the application number format?",
    a: "Application numbers follow the format SIBM followed by the year and a 3-digit sequence, e.g., SIBM2026001. You can find it in your registration confirmation email.",
  },
  {
    id: "faq-update",
    q: "Can I update my application after submission?",
    a: "Once submitted, applications cannot be edited. Please contact the admissions office at admissions@sibmpune.edu.in for any corrections required.",
  },
];

export default function HomePage() {
  const [appNumber, setAppNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = appNumber.trim();
    if (!trimmed) {
      setError("Please enter your application number.");
      return;
    }
    setError("");
    navigate({ to: "/result/$appNumber", params: { appNumber: trimmed } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <HeroBands />

      <main className="flex-1 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-card border-border" data-ocid="home.card">
                <CardHeader className="border-b border-border pb-5">
                  <CardTitle className="text-2xl font-bold text-navy">
                    Check Your Admission Result
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-1">
                    Enter your application number to view your admission status
                    for Symbiosis Institute of Business Management MBA 2026-28.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8 pb-10 px-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="appNumber"
                        className="font-semibold text-foreground"
                      >
                        Application Number
                      </Label>
                      <Input
                        id="appNumber"
                        placeholder="e.g. SIBM2026001"
                        value={appNumber}
                        onChange={(e) => {
                          setAppNumber(e.target.value);
                          if (error) setError("");
                        }}
                        className="h-11 border-border focus-visible:ring-navy"
                        data-ocid="home.input"
                      />
                      {error && (
                        <p
                          className="flex items-center gap-1.5 text-sm text-destructive"
                          data-ocid="home.error_state"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {error}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-11 bg-navy hover:bg-navy-dark text-white font-semibold tracking-wide"
                      data-ocid="home.submit_button"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Check Result
                    </Button>
                  </form>

                  <div className="mt-8 p-4 bg-muted rounded-lg border border-border">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> Results
                      are only available for candidates who have completed all
                      stages of the selection process. For queries, contact{" "}
                      <a
                        href="mailto:admissions@sibmpune.edu.in"
                        className="text-navy underline"
                      >
                        admissions@sibmpune.edu.in
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: "Applications Received", value: "12,400+" },
                  { label: "Seats Available", value: "180" },
                  { label: "Selection Ratio", value: "1 in 69" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-lg border border-border shadow-xs p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-navy">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
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
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
