import { useTranslations } from 'next-intl'

type ItemProps = { number: number; title: string; desc: string }

const Item = (props: ItemProps) => {
  const { number, title, desc } = props
  return (
    <div className="max-w-sm flex-1 rounded-3xl bg-[#ffffff] p-14 text-center shadow-xl shadow-[#ccc]">
      <div className="mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-background-color)] text-4xl">
        <span className="text-[var(--primary-color)]">{number}</span>
      </div>
      <h4 className="mb-6 text-3xl font-semibold">{title}</h4>
      <p className="text-[var(--dark-text-color)]">{desc}</p>
    </div>
  )
}

type AllItemsProps = { t: (key: string) => string }

const AllItems = (props: AllItemsProps) => {
  const { t } = props
  const arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push(
      <Item
        key={`optimizeBusinessStepTitle-${i}`}
        number={i}
        title={t(`optimizeBusinessStepTitle-${i}`)}
        desc={t(`optimizeBusinessStepDesc-${i}`)}
      />
    )
  }
  return arr
}

export default function SectOptimizeBusiness() {
  const t = useTranslations('Home')
  return (
    <section className="code-section" id="services">
      <div className="container mx-auto px-6 py-6 md:py-12">
        <div className="rounded-3xl bg-[var(--light-background-color)] px-4 py-8 md:py-40">
          <h2 className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold [font-family:var(--font-family-heading)] md:text-6xl">
            {t('optimizeBusinessTitle')}
          </h2>
          <p className="mb-8 text-center text-xl text-[var(--dark-text-color)]">
            {t('optimizeBusinessDesc')}
          </p>
        </div>
        <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-36 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
          <AllItems t={t} />
        </div>
      </div>
    </section>
  )
}
