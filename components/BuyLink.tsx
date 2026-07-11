import Link from "next/link";
import { GUMROAD_URL } from "@/config/site";

type BuyLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function BuyLink({ children, className = "button primary" }: BuyLinkProps) {
  return (
    <Link className={className} href={GUMROAD_URL}>
      {children}
    </Link>
  );
}
