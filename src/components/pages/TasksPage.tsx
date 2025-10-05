import { motion } from "motion/react";
import { Plus, CheckCircle2, Circle, Clock } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const myTasks = [
  { id: 1, title: "Review design mockups", priority: "High", due: "Today", completed: false },
  { id: 2, title: "Update API documentation", priority: "Medium", due: "Tomorrow", completed: false },
  { id: 3, title: "Fix login bug", priority: "High", due: "Today", completed: false },
  { id: 4, title: "Prepare presentation slides", priority: "Low", due: "Oct 8", completed: false },
];

const teamTasks = [
  { id: 5, title: "Deploy to staging environment", assignee: "Michael Chen", priority: "High", due: "Today", completed: false },
  { id: 6, title: "User testing session", assignee: "Emily Rodriguez", priority: "Medium", due: "Tomorrow", completed: false },
  { id: 7, title: "Database optimization", assignee: "Robert Taylor", priority: "Medium", due: "Oct 7", completed: false },
  { id: 8, title: "Create marketing materials", assignee: "David Kim", priority: "Low", due: "Oct 10", completed: false },
];

const completedTasks = [
  { id: 9, title: "Setup CI/CD pipeline", completedBy: "Michael Chen", completedOn: "Oct 4", priority: "High" },
  { id: 10, title: "Design system documentation", completedBy: "Emily Rodriguez", completedOn: "Oct 3", priority: "Medium" },
  { id: 11, title: "Q3 Analytics report", completedBy: "Lisa Anderson", completedOn: "Oct 2", priority: "Medium" },
  { id: 12, title: "Customer feedback review", completedBy: "Sarah Johnson", completedOn: "Oct 1", priority: "Low" },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "#EA4335";
    case "Medium":
      return "#FBBC05";
    case "Low":
      return "#34A853";
    default:
      return "#717182";
  }
};

export function TasksPage({ view = "all" }: { view?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#030213]">Tasks</h2>
          <p className="text-[#717182]">Manage your tasks and assignments</p>
        </div>
        <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </div>

      <Tabs defaultValue={view === "my tasks" ? "my" : view === "team tasks" ? "team" : view === "completed" ? "completed" : "my"} className="w-full">
        <TabsList className="bg-[#f3f3f5]">
          <TabsTrigger value="my">My Tasks</TabsTrigger>
          <TabsTrigger value="team">Team Tasks</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="my" className="space-y-3 mt-6">
          {myTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4">
                  <button className="flex-shrink-0">
                    <Circle className="w-5 h-5 text-[#717182]" />
                  </button>
                  <div className="flex-1">
                    <h3 className="text-sm text-[#030213] mb-1">{task.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#717182]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{task.due}</span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${getPriorityColor(task.priority)}15`,
                          color: getPriorityColor(task.priority),
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="team" className="space-y-3 mt-6">
          {teamTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4">
                  <button className="flex-shrink-0">
                    <Circle className="w-5 h-5 text-[#717182]" />
                  </button>
                  <div className="flex-1">
                    <h3 className="text-sm text-[#030213] mb-1">{task.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#717182]">
                      <span>Assigned to {task.assignee}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{task.due}</span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${getPriorityColor(task.priority)}15`,
                          color: getPriorityColor(task.priority),
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-3 mt-6">
          {completedTasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow border border-[rgba(0,0,0,0.1)] opacity-75">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-5 h-5 text-[#34A853] flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-sm text-[#030213] line-through mb-1">{task.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-[#717182]">
                      <span>Completed by {task.completedBy}</span>
                      <span>•</span>
                      <span>{task.completedOn}</span>
                      <span
                        className="px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${getPriorityColor(task.priority)}15`,
                          color: getPriorityColor(task.priority),
                        }}
                      >
                        {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
