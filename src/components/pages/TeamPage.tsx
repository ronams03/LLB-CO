import { motion } from "motion/react";
import { UserPlus, Mail, Phone, MapPin } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    email: "sarah.j@company.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    avatar: "SJ",
    color: "#4285F4",
    status: "online",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    email: "michael.c@company.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    avatar: "MC",
    color: "#34A853",
    status: "online",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    email: "emily.r@company.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    avatar: "ER",
    color: "#FBBC05",
    status: "away",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Marketing Specialist",
    email: "david.k@company.com",
    phone: "+1 (555) 456-7890",
    location: "Chicago, IL",
    avatar: "DK",
    color: "#EA4335",
    status: "offline",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Business Analyst",
    email: "lisa.a@company.com",
    phone: "+1 (555) 567-8901",
    location: "Boston, MA",
    avatar: "LA",
    color: "#4285F4",
    status: "online",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Frontend Developer",
    email: "james.w@company.com",
    phone: "+1 (555) 678-9012",
    location: "Seattle, WA",
    avatar: "JW",
    color: "#34A853",
    status: "online",
  },
  {
    id: 7,
    name: "Maria Garcia",
    role: "QA Engineer",
    email: "maria.g@company.com",
    phone: "+1 (555) 789-0123",
    location: "Denver, CO",
    avatar: "MG",
    color: "#FBBC05",
    status: "away",
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "DevOps Engineer",
    email: "robert.t@company.com",
    phone: "+1 (555) 890-1234",
    location: "Portland, OR",
    avatar: "RT",
    color: "#EA4335",
    status: "online",
  },
];

export function TeamPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "#34A853";
      case "away":
        return "#FBBC05";
      case "offline":
        return "#717182";
      default:
        return "#717182";
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
          <h2 className="text-2xl text-[#030213]">Team Members</h2>
          <p className="text-[#717182]">Collaborate with your team</p>
        </div>
        <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow border border-[rgba(0,0,0,0.1)]">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.avatar}
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white"
                    style={{ backgroundColor: getStatusColor(member.status) }}
                  />
                </div>

                <h3 className="text-lg text-[#030213] mb-1">{member.name}</h3>
                <p className="text-sm text-[#717182] mb-4">{member.role}</p>

                <div className="w-full space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#717182]">
                    <Mail className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#717182]">
                    <Phone className="w-3 h-3 flex-shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#717182]">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[rgba(0,0,0,0.1)]"
                  >
                    Message
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[rgba(0,0,0,0.1)]"
                  >
                    Profile
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
