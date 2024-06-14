"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div
      className={`h-full overflow-y-auto ${pathname == "/" ? "home-bg" : pathname == "/destination" ? "destination-bg" : pathname == "/crew" ? "crew-bg" : pathname == "/technology" ? "technology-bg" : ""}`}
    >
      <Navbar />
      {children}
    </div>
  );
}
