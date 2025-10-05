import { motion } from "motion/react";
import { Plus, FileText, Download, Share2, MoreVertical } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const documents = [
  {
    id: 1,
    name: "Product Requirements Document.pdf",
    type: "PDF",
    size: "2.4 MB",
    modified: "2 hours ago",
    owner: "Sarah Johnson",
    color: "#EA4335",
  },
  {
    id: 2,
    name: "Design Mockups.fig",
    type: "Figma",
    size: "15.8 MB",
    modified: "5 hours ago",
    owner: "Emily Rodriguez",
    color: "#4285F4",
  },
  {
    id: 3,
    name: "API Documentation.docx",
    type: "Word",
    size: "1.2 MB",
    modified: "1 day ago",
    owner: "Michael Chen",
    color: "#4285F4",
  },
  {
    id: 4,
    name: "Marketing Strategy Q1.pptx",
    type: "PowerPoint",
    size: "8.5 MB",
    modified: "2 days ago",
    owner: "David Kim",
    color: "#EA4335",
  },
  {
    id: 5,
    name: "Budget Spreadsheet.xlsx",
    type: "Excel",
    size: "512 KB",
    modified: "3 days ago",
    owner: "Lisa Anderson",
    color: "#34A853",
  },
  {
    id: 6,
    name: "User Research Findings.pdf",
    type: "PDF",
    size: "3.7 MB",
    modified: "5 days ago",
    owner: "Emily Rodriguez",
    color: "#EA4335",
  },
  {
    id: 7,
    name: "Meeting Notes - Oct 2025.txt",
    type: "Text",
    size: "45 KB",
    modified: "1 week ago",
    owner: "Sarah Johnson",
    color: "#717182",
  },
  {
    id: 8,
    name: "Technical Specifications.pdf",
    type: "PDF",
    size: "4.1 MB",
    modified: "1 week ago",
    owner: "Michael Chen",
    color: "#EA4335",
  },
];

export function DocumentsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#030213]">Documents</h2>
          <p className="text-[#717182]">Access and manage your files</p>
        </div>
        <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-4 hover:shadow-md transition-shadow border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${doc.color}15` }}
                >
                  <FileText className="w-6 h-6" style={{ color: doc.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-[#030213] truncate mb-1">{doc.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#717182]">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                    <span>•</span>
                    <span>Modified {doc.modified}</span>
                    <span>•</span>
                    <span>by {doc.owner}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
                    <Download className="w-4 h-4 text-[#717182]" />
                  </button>
                  <button className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
                    <Share2 className="w-4 h-4 text-[#717182]" />
                  </button>
                  <button className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-[#717182]" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
