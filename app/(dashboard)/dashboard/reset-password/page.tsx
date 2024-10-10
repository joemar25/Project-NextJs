import { Message } from "@/src/components/form-message/FormMessage";
import { ResetPassword } from "@/src/components/ResetPassword";
import { AuthLayout } from "@/src/full-page/auth/auth-layout";

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <AuthLayout>
      <ResetPassword searchParams={searchParams} />
    </AuthLayout>
  );
}
