/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
export default function SectUnlockFuture() {
  return (
    <section className="code-section" id="suhrv6r">
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-6xl">
          Unlock the Future of Business with AI Insights
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-[var(--gray-text-color)] sm:text-xl">
          Dive into our carefully curated articles that reveal how AI is transforming business
          processes. Equip yourself with knowledge that empowers your organization to thrive in a
          digital landscape.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <img
              src="images/blog01.avif"
              alt="Engineer Operators Using Scada System At Industrial Plant"
              className="h-64 w-full rounded-3xl object-cover"
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">15 FEB 2023</p>
              <h3 className="mb-2 text-3xl font-medium">
                Optimize Your Business Operations with AI
              </h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Explore strategies to streamline your business processes using AI and enhance
                productivity across your organization.
              </p>
              <Link
                href="/blog/optimize-business-operations"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Read More
                <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <img
              src="images/blog02.webp"
              alt="Automation and Optimization of Business Processes with Gears."
              className="h-64 w-full rounded-3xl object-cover"
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">20 FEB 2023</p>
              <h3 className="mb-2 text-3xl font-medium">Enhancing Team Collaboration Through AI</h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Learn how AI tools can foster better communication and collaboration, enabling your
                team to work more effectively together.
              </p>
              <Link
                href="/blog/enhancing-team-collaboration"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Read More
                <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
            <img
              src="images/blog03.avif"
              alt="Technology artificial intelligence digital ai hand concept on cyber future business tech science innovation futuristic network strategy background virtual data communication learning assistant search."
              className="h-64 w-full rounded-3xl object-cover"
            />
            <div className="px-4 py-6">
              <p className="mb-2 uppercase text-[var(--primary-color)]">25 FEB 2023</p>
              <h3 className="mb-2 text-3xl font-medium">
                Achieving Security and Compliance with AI
              </h3>
              <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">
                Discover how AI can help secure your business data, ensuring compliance while
                minimizing risks in an evolving digital landscape.
              </p>
              <Link
                href="/blog/security-compliance-ai"
                className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
              >
                Read More
                <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
