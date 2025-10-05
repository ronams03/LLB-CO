import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ProgressIndicator } from "./ProgressIndicator";
import svgPaths from "../imports/svg-6u8rl7nkgc";

const steps = [
  { label: "Account", description: "Basic information" },
  { label: "Security", description: "Password setup" },
  { label: "Profile", description: "Complete your profile" },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  company: string;
}

interface MultiStepSignUpFormProps {
  onSuccess: (data: FormData) => void;
}

export function MultiStepSignUpForm({ onSuccess }: MultiStepSignUpFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    company: "",
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Handle form submission
      console.log("Form submitted:", formData);
      onSuccess(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    console.log(`Sign in with ${provider}`);
    // Simulate social sign-in success with demo data
    const demoData: FormData = {
      firstName: "John",
      lastName: "Doe",
      email: `user@${provider.toLowerCase()}.com`,
      password: "",
      confirmPassword: "",
      username: `${provider.toLowerCase()}user`,
      company: "",
    };
    onSuccess(demoData);
  };

  return (
    <div className="w-full max-w-[448px]">
      <div className="mb-8">
        <h1 className="text-[30px] leading-9 mb-2 text-[#030213]">Create your account</h1>
        <p className="text-[#717182]">
          Join us today and start your journey
        </p>
      </div>

      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={3}
        steps={steps}
      />

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm text-[#030213]">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm text-[#030213]">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-[#030213]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="pt-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[rgba(0,0,0,0.1)]" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-[#717182]">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => handleSocialSignIn("Google")}
                    className="h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center gap-2 text-sm text-[#030213] hover:bg-[#f3f3f5] transition-colors"
                  >
                    <svg className="size-4" fill="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_google)">
                        <path d={svgPaths.p30ef7a30} fill="#4285F4" />
                        <path d={svgPaths.p35541a00} fill="#34A853" />
                        <path d={svgPaths.p17176680} fill="#FBBC05" />
                        <path d={svgPaths.p3683500} fill="#EA4335" />
                      </g>
                      <defs>
                        <clipPath id="clip0_google">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialSignIn("Apple")}
                    className="h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center gap-2 text-sm text-[#030213] hover:bg-[#f3f3f5] transition-colors"
                  >
                    <svg className="size-4" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p7ad0b00} fill="currentColor" />
                    </svg>
                    Apple
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-[#030213]">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a strong password"
                  value={formData.password}
                  onChange={(e) => updateFormData("password", e.target.value)}
                  className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                />
                <p className="text-xs text-[#717182]">
                  Must be at least 8 characters with uppercase, lowercase, and numbers
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm text-[#030213]">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    updateFormData("confirmPassword", e.target.value)
                  }
                  className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="bg-[#f3f3f5] rounded-lg p-4 mt-6">
                <h4 className="text-sm mb-2 text-[#030213]">Password requirements:</h4>
                <ul className="text-xs text-[#717182] space-y-1">
                  <li className="flex items-center gap-2">
                    <span className={formData.password.length >= 8 ? "text-green-600" : ""}>
                      {formData.password.length >= 8 ? "✓" : "○"}
                    </span>
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={/[A-Z]/.test(formData.password) ? "text-green-600" : ""}>
                      {/[A-Z]/.test(formData.password) ? "✓" : "○"}
                    </span>
                    One uppercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={/[a-z]/.test(formData.password) ? "text-green-600" : ""}>
                      {/[a-z]/.test(formData.password) ? "✓" : "○"}
                    </span>
                    One lowercase letter
                  </li>
                  <li className="flex items-center gap-2">
                    <span className={/[0-9]/.test(formData.password) ? "text-green-600" : ""}>
                      {/[0-9]/.test(formData.password) ? "✓" : "○"}
                    </span>
                    One number
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm text-[#030213]">Username</Label>
                <Input
                  id="username"
                  placeholder="Choose a unique username"
                  value={formData.username}
                  onChange={(e) => updateFormData("username", e.target.value)}
                  className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm text-[#030213]">Company (Optional)</Label>
                <Input
                  id="company"
                  placeholder="Your company name"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  className="h-9 bg-[#f3f3f5] border-transparent rounded-lg px-3 text-sm placeholder:text-[#717182]"
                />
              </div>

              <div className="bg-[#e9ebef] rounded-lg p-4 mt-6">
                <p className="text-sm text-[#030213]">
                  By creating an account, you agree to our Terms of Service and
                  Privacy Policy.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-8">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="flex-1 h-9 bg-white border border-[rgba(0,0,0,0.1)] rounded-lg flex items-center justify-center gap-2 text-sm text-[#030213] hover:bg-[#f3f3f5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          className={`${currentStep === 1 ? "w-full" : "flex-1"} h-9 bg-[#030213] text-white rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-[#030213]/90 transition-colors`}
        >
          {currentStep === 3 ? "Create Account" : "Continue"}
          {currentStep < 3 && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      {currentStep === 1 && (
        <p className="text-center text-sm text-[#717182] mt-6">
          Already have an account?{" "}
          <a href="#" className="text-[#030213] hover:underline">
            Sign in
          </a>
        </p>
      )}
    </div>
  );
}
