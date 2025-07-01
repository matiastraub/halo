import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="py-16 code-section" id="global-footer">
      <div className="container mx-auto px-4 text-center">
        <div className="m-8 text-xl font-bold">
          <Link
            href="/"
            className="text-3xl text-[var(--primary-color)] [font-family:var(--font-family-heading)]"
          >
            <img src="images/logo.avif" alt="Halo Logo" className="h-20" />
          </Link>
        </div>
        <div className="mb-8 flex flex-col justify-center sm:flex-row">
          <Link
            href="/"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Blog
          </Link>
          <Link
            href="/privacy-policy"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="mx-8 text-lg text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            Terms &amp;amp; Conditions
          </Link>
        </div>
        <div className="mb-8">
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
          </Link>
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
          </Link>
          <Link
            href="/"
            className="mx-2 text-[var(--gray-text-color)] hover:text-[var(--primary-color)]"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </Link>
        </div>
        <p className="text-lg text-[var(--gray-text-color)]">© 2025 Halo All Rights Reserved</p>
      </div>
    </footer>
  )
}
