import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cleanify | Dashboard",
  description: "Cleanify the ultimate solution for dishwashing items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open grid-col-reverse">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content px-10 mt-16">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden mb-10"
            >
              Open drawer
            </label>
            {children}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li className="bg-[#9A9A9A] text-base text-white">
                <a>All Products</a>
              </li>
              <div className="divider my-4"></div>
              <li className="text-base">
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
