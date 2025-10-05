import { useState } from "react";
import { motion } from "motion/react";
import { UserPlus, Mail, Shield, Trash2, Edit } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Alert, AlertDescription } from "../ui/alert";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "staff";
  status: "active" | "inactive";
  createdAt: string;
}

const initialUsers: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@company.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "manager@company.com",
    role: "manager",
    status: "active",
    createdAt: "2025-09-15",
  },
  {
    id: "3",
    name: "Michael Chen",
    email: "staff@company.com",
    role: "staff",
    status: "active",
    createdAt: "2025-10-01",
  },
];

export function UserManagementPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "staff" as "admin" | "manager" | "staff",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      id: String(users.length + 1),
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: "active",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setUsers([...users, newUser]);
    setSuccessMessage(`User ${formData.name} has been added successfully!`);
    setIsDialogOpen(false);
    setFormData({ name: "", email: "", role: "staff", password: "" });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteUser = (userId: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
      setSuccessMessage("User deleted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return { bg: "#EA433515", text: "#EA4335" };
      case "manager":
        return { bg: "#4285F415", text: "#4285F4" };
      case "staff":
        return { bg: "#34A85315", text: "#34A853" };
      default:
        return { bg: "#71718215", text: "#717182" };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#030213]">User Management</h2>
          <p className="text-[#717182]">Manage team members and their roles</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>
                Create a new user account with assigned role
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddUser} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="bg-[#f3f3f5] border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="bg-[#f3f3f5] border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value: "admin" | "manager" | "staff") =>
                    setFormData({ ...formData, role: value })
                  }
                >
                  <SelectTrigger className="bg-[#f3f3f5] border-transparent">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Temporary Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Set temporary password"
                  className="bg-[#f3f3f5] border-transparent"
                  required
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#030213] hover:bg-[#030213]/90 text-white">
                  Add User
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {successMessage && (
        <Alert className="bg-[#34A85315] border-[#34A853]">
          <AlertDescription className="text-[#34A853]">
            {successMessage}
          </AlertDescription>
        </Alert>
      )}

      {/* Users Table */}
      <Card className="border border-[rgba(0,0,0,0.1)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-[rgba(0,0,0,0.1)]">
              <tr>
                <th className="text-left p-4 text-sm text-[#717182]">User</th>
                <th className="text-left p-4 text-sm text-[#717182]">Email</th>
                <th className="text-left p-4 text-sm text-[#717182]">Role</th>
                <th className="text-left p-4 text-sm text-[#717182]">Status</th>
                <th className="text-left p-4 text-sm text-[#717182]">Created</th>
                <th className="text-right p-4 text-sm text-[#717182]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const roleColor = getRoleBadgeColor(user.role);
                return (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-[rgba(0,0,0,0.1)] hover:bg-[#f3f3f5] transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                          style={{ backgroundColor: roleColor.text }}
                        >
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                        <span className="text-sm text-[#030213]">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#717182]" />
                        <span className="text-sm text-[#717182]">{user.email}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full capitalize"
                        style={{
                          backgroundColor: roleColor.bg,
                          color: roleColor.text,
                        }}
                      >
                        <Shield className="w-3 h-3" />
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className="inline-flex text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: user.status === "active" ? "#34A85315" : "#71718215",
                          color: user.status === "active" ? "#34A853" : "#717182",
                        }}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-[#717182]">{user.createdAt}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-white rounded-lg transition-colors">
                          <Edit className="w-4 h-4 text-[#717182]" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="p-2 hover:bg-white rounded-lg transition-colors"
                          disabled={user.role === "admin"}
                        >
                          <Trash2
                            className={`w-4 h-4 ${
                              user.role === "admin" ? "text-[#717182]/30" : "text-[#EA4335]"
                            }`}
                          />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 border border-[rgba(0,0,0,0.1)]">
          <p className="text-sm text-[#717182] mb-1">Total Users</p>
          <p className="text-lg text-[#030213]">{users.length}</p>
        </Card>
        <Card className="p-4 border border-[rgba(0,0,0,0.1)]">
          <p className="text-sm text-[#717182] mb-1">Active Users</p>
          <p className="text-lg text-[#030213]">
            {users.filter((u) => u.status === "active").length}
          </p>
        </Card>
        <Card className="p-4 border border-[rgba(0,0,0,0.1)]">
          <p className="text-sm text-[#717182] mb-1">Administrators</p>
          <p className="text-lg text-[#030213]">
            {users.filter((u) => u.role === "admin").length}
          </p>
        </Card>
      </div>
    </motion.div>
  );
}
