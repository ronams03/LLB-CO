import { useState } from "react";
import { motion } from "motion/react";
import { 
  Bell,
  Search,
  LogOut,
  Menu
} from "lucide-react";
import { SimpleSidebar } from "./SimpleSidebar";
import { DashboardOverview } from "./pages/DashboardOverview";
import { ProjectsPage } from "./pages/ProjectsPage";
import { TeamPage } from "./pages/TeamPage";
import { DocumentsPage } from "./pages/DocumentsPage";
import { TasksPage } from "./pages/TasksPage";
import { CalendarPage } from "./pages/CalendarPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { HelpPage } from "./pages/HelpPage";
import { UserManagementPage } from "./pages/UserManagementPage";

interface DashboardProps {
  userName: string;
  userRole: "admin" | "manager" | "staff";
  onLogout: () => void;
}

export function Dashboard({ userName, userRole, onLogout }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log("Navigating to:", page);
  };

  return (
    <div className="size-full flex bg-[#f8f8fa]">
      <SimpleSidebar 
        userName={userName}
        userRole={userRole}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 overflow-auto"
      >
        {/* Header */}
        <header className="bg-white border-b border-[rgba(0,0,0,0.1)] sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl text-[#030213] capitalize">{currentPage}</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#717182]" />
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 h-9 pl-9 pr-3 bg-[#f3f3f5] border-transparent rounded-lg text-sm placeholder:text-[#717182] focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                />
              </div>
              
              <button className="relative p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-[#717182]" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              <div className="hidden md:flex items-center gap-3 pl-4 border-l border-[rgba(0,0,0,0.1)]">
                <div className="text-right">
                  <p className="text-sm text-[#030213]">{userName}</p>
                  <p className="text-xs text-[#717182] capitalize">{userRole}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#030213] to-[#717182] flex items-center justify-center text-white">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4 text-[#717182]" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {currentPage === "dashboard" && <DashboardOverview userName={userName} />}
          {currentPage === "projects" && <ProjectsPage />}
          {currentPage === "team" && <TeamPage />}
          {currentPage === "documents" && <DocumentsPage />}
          {(currentPage === "tasks" || currentPage === "my tasks" || currentPage === "team tasks" || currentPage === "completed") && (
            <TasksPage view={currentPage} />
          )}
          {currentPage === "calendar" && <CalendarPage />}
          {currentPage === "analytics" && <AnalyticsPage />}
          {currentPage === "settings" && <SettingsPage />}
          {currentPage === "help" && <HelpPage />}
          {currentPage === "user management" && userRole === "admin" && <UserManagementPage />}

          {/* Mobile Logout */}
          <div className="md:hidden mt-8">
            <button
              onClick={onLogout}
              className="w-full p-4 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg hover:bg-[#f3f3f5] transition-colors flex items-center justify-center gap-2 text-sm text-[#030213]"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
