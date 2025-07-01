import Link from 'next/link'

export default function SectChooseYourPlan() {
  return (
    <section className="code-section" id="sohjzr">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:px-40 sm:text-6xl">
          Choose the Perfect AI Solution for Your Business
        </h2>
        <p className="text-center text-xl text-[var(--gray-text-color)] sm:mb-16">
          Join the growing number of businesses transforming their operations with Halos intelligent
          automation.
        </p>
        <div className="flex flex-col lg:flex-row">
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Starter Plan</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Experience the benefits of AI with our no-cost introductory plan. It&apos;s the
              perfect way to evaluate our solutions risk-free.
            </p>
            <p className="mb-2 text-6xl font-bold text-[var(--primary-color)]">Free</p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              14 Day Free Trial
            </p>
            <Link
              href="/services"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Start with This Plan
            </Link>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Up to 5,000 Users
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unlimited Project Creation
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Support for All Project Types
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Integrate with Popular Tools
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Advanced Sharing Options
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Project Testing Capabilities
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Secure Data Storage
                </span>
              </li>
            </ul>
          </div>
          <div className="relative my-6 flex-1 rounded-3xl bg-[var(--primary-color)] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded bg-black px-2 py-1 text-center text-xl font-semibold uppercase">
              Most Popular
            </div>
            <h4 className="mb-4 text-4xl font-semibold">Professional Plan</h4>
            <p className="mb-8 font-light xl:text-xl">
              After your free trial, keep harnessing the power of AI with our all-inclusive plan
              designed for growing businesses.
            </p>
            <p className="mb-3 text-6xl font-bold">$299.000</p>
            <p className="mb-9 text-lg font-light uppercase">Monthly Subscription</p>
            <Link
              href="/services"
              className="mx-auto mb-11 block w-2/3 rounded bg-white py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Choose This Plan
            </Link>
            <ul className="space-y-3 font-light text-white">
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Up to 15,000 Users</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Unlimited Project Creation</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Support for All Project Types</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Integrate with Popular Tools</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Advanced Sharing Options</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Project Testing Capabilities</span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i className="fa-regular fa-circle-check fa-xl ml-1 mr-4" aria-hidden="true"></i>
                <span className="text-left text-lg">Secure Data Storage</span>
              </li>
            </ul>
          </div>
          <div className="my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10">
            <h4 className="mb-4 text-4xl font-semibold">Enterprise Plan</h4>
            <p className="mb-8 font-light text-[var(--dark-text-color)] xl:text-xl">
              Unlock the full potential of your organization with our comprehensive plan that caters
              to larger teams and complex projects.
            </p>
            <p className="mb-3 text-6xl font-bold text-[var(--primary-color)]">$99</p>
            <p className="mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]">
              Monthly Subscription
            </p>
            <Link
              href="/services"
              className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
            >
              Select This Plan
            </Link>
            <ul className="space-y-3 font-light">
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unlimited Users
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Unlimited Project Creation
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Support for All Project Types
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Integrate with Popular Tools
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Advanced Sharing Options
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Project Testing Capabilities
                </span>
              </li>
              <li className="flex min-h-[28px] items-center">
                <i
                  className="fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]"
                  aria-hidden="true"
                ></i>
                <span className="text-left text-lg text-[var(--dark-text-color)]">
                  Secure Data Storage
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
