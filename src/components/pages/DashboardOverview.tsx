import { motion } from "motion/react";
import { LayoutDashboard, Users, FileText, Settings } from "lucide-react";
import { Card } from "../ui/card";

interface DashboardOverviewProps {
  userName: string;
}

export function DashboardOverview({ userName }: DashboardOverviewProps) {
  return (
    <>
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-[#030213] to-[#2c2c3e] rounded-lg p-8 mb-8 text-white"
      >
        <h2 className="text-2xl mb-2">Welcome back, {userName}! 👋</h2>
        <p className="text-white/80">
          Your account has been successfully created. Here's an overview of your workspace.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: "Total Projects", value: "12", icon: LayoutDashboard, color: "#4285F4" },
          { label: "Team Members", value: "8", icon: Users, color: "#34A853" },
          { label: "Documents", value: "48", icon: FileText, color: "#FBBC05" },
          { label: "Tasks Completed", value: "24", icon: Settings, color: "#EA4335" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-[#717182] mb-1">{stat.label}</p>
                  <p className="text-lg text-[#030213]">{stat.value}</p>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
          <h3 className="text-lg text-[#030213] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: "Created new project", time: "2 minutes ago", type: "create" },
              { action: "Updated team settings", time: "1 hour ago", type: "update" },
              { action: "Completed 5 tasks", time: "3 hours ago", type: "complete" },
              { action: "Added 2 team members", time: "1 day ago", type: "add" },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 hover:bg-[#f3f3f5] rounded-lg transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#030213]" />
                <div className="flex-1">
                  <p className="text-sm text-[#030213]">{activity.action}</p>
                  <p className="text-xs text-[#717182]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-8"
      >
        <h3 className="text-lg text-[#030213] mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Create Project", icon: LayoutDashboard },
            { label: "Invite Team", icon: Users },
            { label: "Upload Document", icon: FileText },
          ].map((action) => (
            <button
              key={action.label}
              className="p-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-[#f3f3f5] transition-colors text-left"
            >
              <action.icon className="w-5 h-5 text-[#030213] mb-2" />
              <p className="text-sm text-[#030213]">{action.label}</p>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
