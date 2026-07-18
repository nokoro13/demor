import { redirect } from "next/navigation";
import { portalUrl } from "@/lib/config";

export default function LoginPage() {
  redirect(portalUrl);
}
