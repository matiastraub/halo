/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function SectTransformWithPowerAI() {
  return (
    <section className="code-section" id="s1uejbq">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <img
              className="mx-auto rounded-3xl"
              src="images/artificial-intelligence.webp"
              alt="Hero"
            />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              Transform Your Business with AI-Powered Solutions
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              Halo provides cutting-edge AI tools that streamline your workflows, enabling you to
              operate more efficiently and effectively. Embrace the future of business processes
              today.
            </p>
            <ul className="mb-12 list-disc pl-6 text-xl">
              <li className="mb-3">
                Seamlessly integrate with your existing systems for a hassle-free transition
              </li>
              <li className="mb-3">
                Customize automation workflows that align perfectly with your operational needs
              </li>
              <li className="mb-3">
                Enhance collaboration among team members to foster innovation and productivity
              </li>
              <li>Implement robust security protocols that ensure your data remains protected</li>
            </ul>
            <div className="flex justify-center lg:block">
              <Link
                href="/services"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                Explore Our Services!
              </Link>
            </div>
            <div className="flex items-center">
              <img
                src="images/testimonial02.jpg"
                alt="Happy Client"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media="{&amp;quot;id&amp;quot;:&amp;quot;2172939929&amp;quot;,&amp;quot;src&amp;quot;:&amp;quot;iStock&amp;quot;,&amp;quot;type&amp;quot;:&amp;quot;image&amp;quot;}"
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  Halos AI tools have revolutionized our daily operations, making them smoother and
                  more efficient!
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">Emily Johnson</span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    (Operations Director at Innovative Solutions)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
