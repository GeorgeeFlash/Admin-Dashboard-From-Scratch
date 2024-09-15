import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href={"/"} className={cn("", className)}>
      <Image
        src={"/assets/logo.png"}
        alt="Admin Dashbard"
        width={176}
        height={36}
      />
    </Link>
  );
}
