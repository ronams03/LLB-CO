import { useState } from "react";
import { 
  LayoutDashboard, 
  FolderKanban, 
  Users, 
  FileText, 
  CheckSquare,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronDown,
  Grid3x3,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const getNavigationItems = (userRole: string) => {
  const baseItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "#dashboard",
    },
    {
      title: "Projects",
      icon: FolderKanban,
      url: "#projects",
      badge: "12",
    },
    {
      title: "Team",
      icon: Users,
      url: "#team",
      badge: "8",
    },
    {
      title: "Documents",
      icon: FileText,
      url: "#documents",
      badge: "48",
    },
    {
      title: "Tasks",
      icon: CheckSquare,
      url: "#tasks",
      items: [
        { title: "My Tasks", url: "#my-tasks" },
        { title: "Team Tasks", url: "#team-tasks" },
        { title: "Completed", url: "#completed" },
      ],
    },
    {
      title: "Calendar",
      icon: Calendar,
      url: "#calendar",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      url: "#analytics",
    },
  ];

  // Add User Management for admin only
  if (userRole === "admin") {
    baseItems.push({
      title: "User Management",
      icon: Users,
      url: "#user-management",
    });
  }

  return baseItems;
};

const apps = [
  { name: "Projects", icon: FolderKanban, color: "#4285F4" },
  { name: "Documents", icon: FileText, color: "#34A853" },
  { name: "Tasks", icon: CheckSquare, color: "#FBBC05" },
  { name: "Calendar", icon: Calendar, color: "#EA4335" },
  { name: "Analytics", icon: BarChart3, color: "#4285F4" },
  { name: "Team", icon: Users, color: "#34A853" },
];

interface SimpleSidebarProps {
  userName: string;
  userRole: string;
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function SimpleSidebar({ userName, userRole, currentPage, onNavigate, isOpen, onClose }: SimpleSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Tasks"]);
  const navigationItems = getNavigationItems(userRole);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-[rgba(0,0,0,0.1)] flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="border-b border-[rgba(0,0,0,0.1)] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#030213] flex items-center justify-center text-white">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm text-[#030213]">Workspace</h2>
                <p className="text-xs text-[#717182]">{userName}'s Team</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-[#f3f3f5] rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* App Drawer */}
          <div className="p-4 border-b border-[rgba(0,0,0,0.1)]">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-xs text-[#717182] hover:text-[#030213] transition-colors w-full">
                <Grid3x3 className="w-4 h-4" />
                <span>Quick Apps</span>
                <ChevronDown className="w-3 h-3 ml-auto" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                side="right" 
                align="start" 
                className="w-64 p-2"
              >
                <div className="grid grid-cols-3 gap-2">
                  {apps.map((app) => (
                    <DropdownMenuItem
                      key={app.name}
                      className="flex flex-col items-center justify-center p-3 h-20 cursor-pointer"
                      onClick={() => handleNavigation(app.name.toLowerCase())}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-1"
                        style={{ backgroundColor: `${app.color}15` }}
                      >
                        <app.icon className="w-5 h-5" style={{ color: app.color }} />
                      </div>
                      <span className="text-xs text-[#030213]">{app.name}</span>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Main Navigation */}
          <div className="p-2">
            <p className="text-xs text-[#717182] px-3 py-2">Navigation</p>
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => toggleExpanded(item.title)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          currentPage === item.title.toLowerCase()
                            ? "bg-[#030213] text-white"
                            : "hover:bg-[#f3f3f5] text-[#030213]"
                        }`}
                      >
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 text-left text-sm">{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedItems.includes(item.title) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedItems.includes(item.title) && (
                        <div className="ml-7 mt-1 space-y-1">
                          {item.items.map((subItem) => (
                            <button
                              key={subItem.title}
                              onClick={() => handleNavigation(subItem.title.toLowerCase())}
                              className="w-full text-left px-3 py-2 text-sm text-[#717182] hover:bg-[#f3f3f5] rounded-lg transition-colors"
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.title.toLowerCase())}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        currentPage === item.title.toLowerCase()
                          ? "bg-[#030213] text-white"
                          : "hover:bg-[#f3f3f5] text-[#030213]"
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1 text-left text-sm">{item.title}</span>
                      {item.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          currentPage === item.title.toLowerCase()
                            ? "bg-white text-[#030213]"
                            : "bg-[#030213] text-white"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Settings */}
            <div className="mt-8 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <button
                onClick={() => handleNavigation("settings")}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === "settings"
                    ? "bg-[#030213] text-white"
                    : "hover:bg-[#f3f3f5] text-[#030213]"
                }`}
              >
                <Settings className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left text-sm">Settings</span>
              </button>
              <button
                onClick={() => handleNavigation("help")}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f3f3f5] text-[#030213] transition-colors"
              >
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 text-left text-sm">Help & Support</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[rgba(0,0,0,0.1)] p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#030213] to-[#717182] flex items-center justify-center text-white text-sm">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#030213] truncate">{userName}</p>
              <p className="text-xs text-[#717182] capitalize">{userRole}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
