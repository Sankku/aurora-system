import Link from "next/link";
import Image from "next/image";
import { SignOutButton, SignedIn, OrganizationSwitcher } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gapt-4">
        <Image src="/logo-wbg-bd-1.png" width={100} height={50} alt="logo" />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">AS</p>
      </Link>
      <div className="flex items-center gap-4">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
