import { useState } from "react";
import { motion } from "motion/react";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

interface LoginFormProps {
  onSuccess: (user: { email: string; name: string; role: "admin" | "manager" | "staff" }) => void;
}

// Mock user database
const mockUsers = [
  { email: "admin@company.com", password: "admin123", name: "Admin User", role: "admin" as const },
  { email: "manager@company.com", password: "manager123", name: "Sarah Johnson", role: "manager" as const },
  { email: "staff@company.com", password: "staff123", name: "Michael Chen", role: "staff" as const },
];

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        onSuccess({
          email: user.email,
          name: user.name,
          role: user.role,
        });
      } else {
        setError("Invalid email or password");
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg border border-[rgba(0,0,0,0.05)] overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Panel - Branding */}
          <div className="bg-gradient-to-br from-[#030213] to-[#1a1a2e] p-12 flex flex-col justify-between min-h-[500px]">
            <div>
              <div className="mb-12">
                <Logo className="[&_rect]:fill-white [&_span]:text-white [&_.text-\\[\\#717182\\]]:text-white/70" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-white" style={{ fontSize: '20px', fontWeight: 600 }}>
                  Secure Client Portal
                </h2>
                <p className="text-white/70" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                  Access your financial documents, tax returns, and collaborate with our team of certified professionals.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-white/60" style={{ fontSize: '12px' }}>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4" />
                <span>Bank-level 256-bit encryption</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>AICPA certified security standards</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="p-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-[#030213] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>
                Welcome Back
              </h1>
              <p className="text-[#717182]" style={{ fontSize: '13px' }}>
                Sign in to access your account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#030213]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#030213] focus:ring-2 focus:ring-[#030213]/20"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#030213]">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-11 bg-[#f3f3f5] border-transparent focus:border-[#030213] focus:ring-2 focus:ring-[#030213]/20 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#717182] hover:text-[#030213]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between" style={{ fontSize: '13px' }}>
                <label className="flex items-center gap-2 text-[#717182] cursor-pointer">
                  <input type="checkbox" className="rounded w-4 h-4" />
                  Remember me
                </label>
                <a href="#" className="text-[#030213] hover:underline">
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-[#030213] hover:bg-[#030213]/90 text-white"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-[#f3f3f5] rounded-lg">
              <p className="text-[#717182] mb-2" style={{ fontSize: '12px', fontWeight: 600 }}>
                Demo Credentials:
              </p>
              <div className="space-y-1 text-[#030213]" style={{ fontSize: '12px' }}>
                <p>Admin: admin@company.com / admin123</p>
                <p>Manager: manager@company.com / manager123</p>
                <p>Staff: staff@company.com / staff123</p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-[#717182]" style={{ fontSize: '12px' }}>
                Need help?{" "}
                <a href="#" className="text-[#030213] hover:underline">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
