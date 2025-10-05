import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Dashboard } from "./components/Dashboard";

interface UserData {
  email: string;
  name: string;
  role: "admin" | "manager" | "staff";
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleLoginSuccess = (user: UserData) => {
    setUserData(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  if (isLoggedIn && userData) {
    return (
      <Dashboard
        userName={userData.name}
        userRole={userData.role}
        onLogout={handleLogout}
      />
    );
  }

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-[#f3f3f5] via-white to-[#ececf0]">
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
}
