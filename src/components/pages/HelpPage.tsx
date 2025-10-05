import { motion } from "motion/react";
import { Search, Book, MessageCircle, Mail, ExternalLink } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "How do I create a new project?",
    answer: "Click the 'New Project' button on the Projects page and fill in the required details.",
  },
  {
    question: "How can I invite team members?",
    answer: "Go to the Team page and click 'Invite Member'. Enter their email address and role.",
  },
  {
    question: "Can I export my documents?",
    answer: "Yes, click the download icon next to any document to export it to your device.",
  },
  {
    question: "How do I change my password?",
    answer: "Navigate to Settings > Security and update your password there.",
  },
];

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of using the platform",
    icon: Book,
    color: "#4285F4",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video guides",
    icon: ExternalLink,
    color: "#34A853",
  },
  {
    title: "Community Forum",
    description: "Connect with other users",
    icon: MessageCircle,
    color: "#FBBC05",
  },
  {
    title: "Contact Support",
    description: "Get help from our support team",
    icon: Mail,
    color: "#EA4335",
  },
];

export function HelpPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl text-[#030213]">Help & Support</h2>
        <p className="text-[#717182]">Find answers and get assistance</p>
      </div>

      {/* Search */}
      <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#717182]" />
          <Input
            placeholder="Search for help..."
            className="pl-10 h-12 bg-[#f3f3f5] border-transparent"
          />
        </div>
      </Card>

      {/* Resources */}
      <div>
        <h3 className="text-lg text-[#030213] mb-4">Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow border border-[rgba(0,0,0,0.1)] cursor-pointer">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${resource.color}15` }}
                  >
                    <resource.icon className="w-6 h-6" style={{ color: resource.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#030213] mb-1">{resource.title}</h4>
                    <p className="text-sm text-[#717182]">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#717182]" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h3 className="text-lg text-[#030213] mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
                <h4 className="text-[#030213] mb-2">{faq.question}</h4>
                <p className="text-sm text-[#717182]">{faq.answer}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card className="p-6 border border-[rgba(0,0,0,0.1)] bg-gradient-to-r from-[#030213] to-[#2c2c3e] text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg mb-2">Still need help?</h3>
            <p className="text-white/80">Our support team is here to assist you</p>
          </div>
          <Button className="bg-white text-[#030213] hover:bg-white/90">
            Contact Support
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
