import { useTranslations } from 'next-intl'

type ItemProps = { number: number; title: string; desc: string }

const Item = (props: ItemProps) => {
  const { number, title, desc } = props
  return (
    <div className="flex-1 rounded-3xl bg-[#ffffff] p-8 text-center shadow-lg shadow-[#ccc] md:max-w-xs md:p-12">
      <div className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--light-border-color)] text-4xl">
        <span className="text-[var(--primary-color)]">{number}</span>
      </div>
      <h4 className="mb-2 text-2xl font-semibold">{title}</h4>
      <p className="text-[var(--gray-text-color)]">{desc}</p>
    </div>
  )
}

type AllItemsProps = { t: (key: string) => string }

const AllItems = (props: AllItemsProps) => {
  const { t } = props
  const arr = []
  for (let i = 1; i <= 4; i++) {
    arr.push(
      <Item
        key={`optimize-title-${i}`}
        number={i}
        title={t(`optimizeTitle-${i}`)}
        desc={t(`optimizeDesc-${i}`)}
      />
    )
  }
  return arr
}

export default function SectStreamLineWithAi() {
  const t = useTranslations('Home')
  return (
    <section className="py-20 code-section" id="benefits">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
          {t.rich('streamLineBussinessWithAI', {
            span: (chunks) => <span>{chunks}</span>
          })}
        </h2>
        <h3 className="mb-12 text-center text-xl text-[var(--gray-text-color)]">
          {t('unlockFullPotentials')}
        </h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AllItems t={t} />
        </div>
      </div>
    </section>
  )
}
