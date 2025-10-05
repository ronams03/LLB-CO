import { motion } from "motion/react";
import { TrendingUp, TrendingDown, Users, FolderKanban, FileText, CheckSquare } from "lucide-react";
import { Card } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const monthlyData = [
  { month: "Jun", projects: 8, tasks: 45, documents: 32 },
  { month: "Jul", projects: 10, tasks: 52, documents: 38 },
  { month: "Aug", projects: 9, tasks: 48, documents: 42 },
  { month: "Sep", projects: 11, tasks: 58, documents: 45 },
  { month: "Oct", projects: 12, tasks: 64, documents: 48 },
];

const teamActivity = [
  { day: "Mon", activity: 45 },
  { day: "Tue", activity: 58 },
  { day: "Wed", activity: 72 },
  { day: "Thu", activity: 65 },
  { day: "Fri", activity: 52 },
  { day: "Sat", activity: 28 },
  { day: "Sun", activity: 15 },
];

const stats = [
  {
    label: "Total Projects",
    value: "12",
    change: "+20%",
    trend: "up",
    icon: FolderKanban,
    color: "#4285F4",
  },
  {
    label: "Active Users",
    value: "8",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "#34A853",
  },
  {
    label: "Documents Shared",
    value: "48",
    change: "+6.7%",
    trend: "up",
    icon: FileText,
    color: "#FBBC05",
  },
  {
    label: "Tasks Completed",
    value: "64",
    change: "+10.3%",
    trend: "up",
    icon: CheckSquare,
    color: "#EA4335",
  },
];

export function AnalyticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl text-[#030213]">Analytics</h2>
        <p className="text-[#717182]">Track your workspace performance</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-[#34A853]" : "text-[#EA4335]"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <h3 className="text-lg text-[#030213] mb-1">{stat.value}</h3>
              <p className="text-sm text-[#717182]">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Monthly Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ececf0" />
                <XAxis dataKey="month" stroke="#717182" />
                <YAxis stroke="#717182" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="projects" fill="#4285F4" radius={[4, 4, 0, 0]} />
                <Bar dataKey="tasks" fill="#34A853" radius={[4, 4, 0, 0]} />
                <Bar dataKey="documents" fill="#FBBC05" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Team Activity (This Week)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={teamActivity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ececf0" />
                <XAxis dataKey="day" stroke="#717182" />
                <YAxis stroke="#717182" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="activity"
                  stroke="#4285F4"
                  strokeWidth={2}
                  dot={{ fill: "#4285F4", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
          <h3 className="text-lg text-[#030213] mb-4">Key Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-[#717182] mb-2">Average Task Completion Time</p>
              <p className="text-lg text-[#030213]">2.4 days</p>
            </div>
            <div>
              <p className="text-sm text-[#717182] mb-2">Project Success Rate</p>
              <p className="text-lg text-[#030213]">94%</p>
            </div>
            <div>
              <p className="text-sm text-[#717182] mb-2">Team Collaboration Score</p>
              <p className="text-lg text-[#030213]">8.7/10</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
