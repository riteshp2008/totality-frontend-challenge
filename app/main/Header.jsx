import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Building, Shapes, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container flex justify-between items-center py-4">
        <div className="text-xl lg:text-3xl font-semibold flex relative">
          <Link href="/" className="flex items-center">
            <Shapes size={24} className="mr-2" />
            DreamStay
          </Link>
        </div>
        <nav className="space-x-6 relative flex items-center">
          <SignedIn>
            <Link
              href="/properties"
              className="text-base font-medium flex items-center"
            >
              <Building size={24} />
            </Link>
            <Link
              href="/cart"
              className="text-base font-medium flex items-center"
            >
              <ShoppingCart size={24} />
            </Link>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
}
