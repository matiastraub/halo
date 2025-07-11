import Plan from '../../components/Plan'
import { useTranslations } from 'next-intl'

type AllListProps = { t: (key: string) => string }

const AllPlans = (props: AllListProps) => {
  const { t } = props
  const arr = []
  const classMain = [
    'my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10',
    'relative my-6 flex-1 rounded-3xl bg-[var(--primary-color)] px-4 py-12 text-center text-white shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10',
    'my-6 flex-1 rounded-3xl bg-[#ffffff] px-4 py-12 text-center shadow-lg shadow-[#ccc] sm:mx-6 sm:px-10'
  ]

  let choosePlanItems = []
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 7; j++) {
      choosePlanItems.push(t(`choosePlan-items-${i}-${j}`))
    }
    arr.push(
      <Plan
        key={`choose-plan-${i}`}
        title={t(`choosePlan-title-${i}`)}
        text={t(`choosePlan-text-${i}`)}
        price={t(`choosePlan-price-${i}`)}
        subscription={t(`choosePlan-subcription-${i}`)}
        link={t(`choosePlan-link-${i}`)}
        cta={t(`choosePlan-cta-${i}`)}
        classMain={classMain[i - 1]}
        classTitle={'mb-4 text-4xl font-semibold'}
        items={choosePlanItems}
        mostPopular={i == 2 ? true : false}
        isWhite={i == 2 ? true : false}
        mostPopularText={t('mostPopular')}
      />
    )
    choosePlanItems = []
  }
  return arr
}

export default function SectChooseYourPlan(props: { visible?: boolean }) {
  const t = useTranslations('Home')
  const { visible } = props
  if (!visible) return

  return (
    <section className="code-section" id="sohjzr">
      <div className="container mx-auto px-6 py-12">
        <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:px-40 sm:text-6xl">
          {t('choosePlanTitle')}
        </h2>
        <p className="text-center text-xl text-[var(--gray-text-color)] sm:mb-16">
          {t('choosePlanDesc')}
        </p>
        <div className="flex flex-col lg:flex-row">
          <AllPlans t={t} />
        </div>
      </div>
    </section>
  )
}
