import { motion } from "motion/react";
import { Plus, FolderKanban, Clock, Users } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Complete overhaul of company website",
    status: "In Progress",
    progress: 65,
    team: 5,
    deadline: "Dec 15, 2025",
    color: "#4285F4",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "iOS and Android app for customers",
    status: "In Progress",
    progress: 40,
    team: 8,
    deadline: "Jan 30, 2026",
    color: "#34A853",
  },
  {
    id: 3,
    name: "Marketing Campaign",
    description: "Q1 2026 digital marketing initiative",
    status: "Planning",
    progress: 15,
    team: 4,
    deadline: "Nov 20, 2025",
    color: "#FBBC05",
  },
  {
    id: 4,
    name: "Product Launch",
    description: "New product line introduction",
    status: "Planning",
    progress: 25,
    team: 6,
    deadline: "Feb 28, 2026",
    color: "#EA4335",
  },
];

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#030213]">Projects</h2>
          <p className="text-[#717182]">Manage and track all your projects</p>
        </div>
        <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <FolderKanban className="w-6 h-6" style={{ color: project.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg text-[#030213] mb-1">{project.name}</h3>
                  <p className="text-sm text-[#717182] mb-4">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-[#717182]">Progress</span>
                        <span className="text-xs text-[#030213]">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#ececf0] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${project.progress}%`,
                            backgroundColor: project.color,
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-[#717182]">
                        <Users className="w-3 h-3" />
                        <span>{project.team} members</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#717182]">
                        <Clock className="w-3 h-3" />
                        <span>{project.deadline}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
