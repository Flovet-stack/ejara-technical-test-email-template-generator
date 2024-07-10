"use client";

import { routes } from "@/shared/routes";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push(routes.TEMPLATES);
  return <></>;
}
