import { LoginForm } from "@/components/auth-login-form";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  );
}
