import Link from "next/link";
import Container from "../ui/Container";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link
          className="text-base font-medium hover:text-green-500 transition-colors duration-500 ease-in-out"
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="text-base font-medium hover:text-green-500 transition-colors duration-500 ease-in-out"
          href="#flash-sale"
        >
          Flash Sale
        </Link>
      </li>
      <li>
        <Link
          className="text-base font-medium hover:text-green-500 transition-colors duration-500 ease-in-out"
          href="#top-brands"
        >
          Brands
        </Link>
      </li>
      <li>
        <Link
          className="text-base font-medium hover:text-green-500 transition-colors duration-500 ease-in-out"
          href="#popular-products"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className="text-base font-medium hover:text-green-500 transition-colors duration-500 ease-in-out"
          href="/dashboard/all-products"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <nav>
      <Container className="navbar bg-transparent mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn bg-transparent hover:bg-transparent border-none shadow-none text-xl p-0"
          >
            Cleanify
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
