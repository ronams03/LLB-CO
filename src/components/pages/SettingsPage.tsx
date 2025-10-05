import { motion } from "motion/react";
import { User, Bell, Lock, Palette, Globe } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl text-[#030213]">Settings</h2>
        <p className="text-[#717182]">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <Card className="p-4 border border-[rgba(0,0,0,0.1)] h-fit">
          <nav className="space-y-1">
            {[
              { icon: User, label: "Profile" },
              { icon: Bell, label: "Notifications" },
              { icon: Lock, label: "Security" },
              { icon: Palette, label: "Appearance" },
              { icon: Globe, label: "Language & Region" },
            ].map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f3f3f5] text-[#030213] transition-colors text-left"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue="John"
                    className="bg-[#f3f3f5] border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue="Doe"
                    className="bg-[#f3f3f5] border-transparent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@company.com"
                  className="bg-[#f3f3f5] border-transparent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full px-3 py-2 bg-[#f3f3f5] border-transparent rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#030213]/20"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
                Save Changes
              </Button>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: "Email notifications", description: "Receive email updates about your activity" },
                { label: "Push notifications", description: "Get push notifications in your browser" },
                { label: "Task reminders", description: "Receive reminders for upcoming tasks" },
                { label: "Team updates", description: "Get notified about team changes and updates" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#030213]">{item.label}</p>
                      <p className="text-xs text-[#717182]">{item.description}</p>
                    </div>
                    <Switch defaultChecked={index < 2} />
                  </div>
                  {index < 3 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Security</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="bg-[#f3f3f5] border-transparent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="bg-[#f3f3f5] border-transparent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
                <Input
                  id="confirmNewPassword"
                  type="password"
                  className="bg-[#f3f3f5] border-transparent"
                />
              </div>
              <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
                Update Password
              </Button>
            </div>
          </Card>

          {/* Appearance Settings */}
          <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-lg text-[#030213] mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#030213]">Dark mode</p>
                  <p className="text-xs text-[#717182]">Enable dark theme across the application</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#030213]">Compact mode</p>
                  <p className="text-xs text-[#717182]">Reduce spacing for a more compact layout</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
