import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 bg-TPrimary text-white">
        <aside>
          <p className="text-3xl">Cleanify</p>
          <p className="text-base">A reliable cleaning supply store</p>
        </aside>
        <nav>
          <h6 className="footer-title text-[#9A9A9A]">Pages</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="#flash-sale" className="link link-hover">
            Flash Sale
          </Link>
          <Link href="#brands" className="link link-hover">
            Brands
          </Link>
          <Link href="#popular-products" className="link link-hover">
            Products
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-[#9A9A9A]">Company</h6>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-[#9A9A9A]">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-TPrimary border-t border-white text-white">
        <aside>
          <p>
            Copyright © 2024 - All right reserved by Cleanify dishwashing Co.
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
