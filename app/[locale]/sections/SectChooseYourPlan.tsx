import Plan from '../../components/Plan'
const items1: string[] = [
  'Up to 5,000 Users',
  'Unlimited Project Creation',
  'Support for All Project Types',
  'Integrate with Popular Tools',
  'Advanced Sharing Options',
  'Project Testing Capabilities',
  'Secure Data Storage'
]

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
          <Plan
            title={'starter Plan'}
            text={
              "Experience the benefits of AI with our no-cost introductory plan. It's the perfect way to evaluate our solutions risk-free."
            }
            price={'Free'}
            subscription={'14 Day Free Trial'}
            link={'services'}
            cta={' Start with This Plan'}
            classMain={
              'my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10'
            }
            classTitle={'mb-4 text-4xl font-semibold'}
            items={items1}
          />
          <Plan
            title={'Professional Plan'}
            text={
              'After your free trial, keep harnessing the power of AI with our all-inclusive plan designed for growing businesses.'
            }
            price={'$299.000'}
            subscription={'Monthly Subscription'}
            link={'services'}
            cta={'Choose This Plan'}
            classMain={
              'relative my-6 flex-1 rounded-3xl bg-[var(--primary-color)] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10'
            }
            classTitle={'mb-4 text-4xl font-semibold'}
            items={[
              'Up to 15,000 Users',
              'Unlimited Project Creation',
              'Support for All Project Types',
              'Integrate with Popular Tools',
              'Advanced Sharing Options',
              'Project Testing Capabilities',
              'Secure Data Storage'
            ]}
            mostPopular={true}
            isWhite={true}
          />
          <Plan
            title={'Enterprise Plan'}
            text={
              'Unlock the full potential of your organization with our comprehensive plan that caters to larger teams and complex projects.'
            }
            price={'$99'}
            subscription={'Monthly Subscription'}
            link={'services'}
            cta={'Select This Plan'}
            classMain={
              'my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10'
            }
            classTitle={'mb-4 text-4xl font-semibold'}
            items={[
              'Unlimited Users',
              'Unlimited Project Creation',
              'Support for All Project Types',
              'Integrate with Popular Tools',
              'Advanced Sharing Options',
              'Project Testing Capabilities',
              'Secure Data Storage'
            ]}
          />
        </div>
      </div>
    </section>
  )
}
