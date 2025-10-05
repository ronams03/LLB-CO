import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useState } from "react";

const events = [
  { id: 1, title: "Team Standup", time: "9:00 AM", date: 5, color: "#4285F4" },
  { id: 2, title: "Design Review", time: "11:00 AM", date: 5, color: "#34A853" },
  { id: 3, title: "Client Meeting", time: "2:00 PM", date: 6, color: "#EA4335" },
  { id: 4, title: "Sprint Planning", time: "10:00 AM", date: 7, color: "#FBBC05" },
  { id: 5, title: "Product Demo", time: "3:00 PM", date: 8, color: "#4285F4" },
  { id: 6, title: "Code Review", time: "4:00 PM", date: 9, color: "#34A853" },
];

export function CalendarPage() {
  const [currentMonth] = useState("October 2025");
  const daysInMonth = 31;
  const firstDayOfWeek = 3; // October 1, 2025 is a Wednesday (0=Sun, 3=Wed)

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = [];

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null);
  }

  // Add the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const getEventsForDay = (day: number | null) => {
    if (!day) return [];
    return events.filter((event) => event.date === day);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-[#030213]">Calendar</h2>
          <p className="text-[#717182]">Manage your schedule and events</p>
        </div>
        <Button className="bg-[#030213] hover:bg-[#030213]/90 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Event
        </Button>
      </div>

      <Card className="p-6 border border-[rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-[#030213]">{currentMonth}</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#717182]" />
            </button>
            <button className="p-2 hover:bg-[#f3f3f5] rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-[#717182]" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-sm text-[#717182] py-2"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => {
            const dayEvents = getEventsForDay(day);
            const isToday = day === 5;

            return (
              <div
                key={index}
                className={`min-h-24 p-2 border border-[rgba(0,0,0,0.1)] rounded-lg ${
                  day ? "bg-white hover:bg-[#f3f3f5] cursor-pointer" : "bg-[#f8f8fa]"
                } transition-colors`}
              >
                {day && (
                  <>
                    <div
                      className={`text-sm mb-1 ${
                        isToday
                          ? "w-6 h-6 rounded-full bg-[#030213] text-white flex items-center justify-center"
                          : "text-[#030213]"
                      }`}
                    >
                      {day}
                    </div>
                    <div className="space-y-1">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className="text-xs p-1 rounded truncate"
                          style={{
                            backgroundColor: `${event.color}15`,
                            color: event.color,
                          }}
                        >
                          {event.time}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <div>
        <h3 className="text-lg text-[#030213] mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          {events.slice(0, 4).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow border border-[rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-4">
                  <div
                    className="w-1 h-12 rounded-full"
                    style={{ backgroundColor: event.color }}
                  />
                  <div className="flex-1">
                    <h4 className="text-sm text-[#030213] mb-1">{event.title}</h4>
                    <p className="text-xs text-[#717182]">
                      October {event.date}, 2025 at {event.time}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
