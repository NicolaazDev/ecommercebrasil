import { RegisterForm } from "@/components/auth-register-form";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md w-full">
        <RegisterForm />
      </div>
    </div>
  );
}
