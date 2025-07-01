import Link from 'next/link'

export default function SecTransform() {
  return (
    <section className="mt-12 bg-[var(--light-background-color)] py-12 code-section" id="ssrvk1s">
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="images/business-automation.png" alt="CTA" className="h-auto w-full" />
        </div>
        <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
          <h3 className="mb-2 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-left sm:text-6xl">
            Experience Seamless Efficiency with Halo&aps;s AI Solutions
          </h3>
          <p className="mb-12 text-center text-lg text-[var(--gray-text-color)] sm:text-left sm:text-xl">
            Ready to transform your business processes? Our dedicated team at Halo is committed to
            enhancing your operational efficiency through innovative AI technology. Don&aps;t
            hesitate to reach out and discover how we can tailor solutions to meet your specific
            needs.
          </p>
          <div className="mb-12 flex items-center justify-center md:items-start md:justify-start">
            <Link
              href="/contact-us"
              className="items-center rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
