/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function SectElevateYourBusiness() {
  return (
    <>
      <section>
        <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
          <div className="flex flex-col-reverse items-stretch lg:flex-row">
            <div className="lg:w-1/2 lg:pr-20">
              <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-5xl lg:text-left">
                Elevate Your Business Efficiency with Halos AI Innovations
              </h2>
              <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
                Transform the way your business operates by leveraging AI technology that
                streamlines processes, boosts productivity, and enhances collaborative efforts.
                Unleash the power of intelligent automation with Halo.
              </p>
              <ul className="mb-12 list-disc pl-8 text-xl">
                <li className="mb-3">
                  Integrate your existing tools for a seamless transition to AI-driven workflows
                </li>
                <li className="mb-3">
                  Customize automation features to align perfectly with your unique operational
                  needs
                </li>
                <li className="mb-3">
                  Foster real-time communication to enhance teamwork and project outcomes
                </li>
                <li>
                  Implement advanced security measures to safeguard your critical business data
                </li>
              </ul>
              <div className="flex justify-center lg:block">
                <Link
                  href="/services"
                  className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                >
                  Start Your Transformation Today!
                </Link>
              </div>
              <div className="flex items-center">
                <img
                  src="images/testimonial03.jpg"
                  alt="Client Testimonial"
                  className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                />
                <div>
                  <i
                    className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                    aria-hidden="true"
                  ></i>
                  <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                    Halos AI solutions have streamlined our operations, enabling us to achieve
                    unprecedented efficiency and clarity!
                  </p>
                  <i
                    className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                    aria-hidden="true"
                  ></i>
                  <p>
                    <span className="font-semibold text-[var(--dark-text-color)]">
                      Emily Johnson
                    </span>
                    <span className="pl-2 font-semibold text-[var(--primary-color)]">
                      (Chief Operations Officer at Modern Enterprises)
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-1 items-center justify-center rounded-[var(--button-rounded-radius)] bg-[var(--light-background-color)] p-6 lg:w-1/2">
              <img
                className="mx-auto rounded-[var(--button-rounded-radius)]"
                src="images/elevate-business.webp"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
