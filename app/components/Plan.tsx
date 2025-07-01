import Link from 'next/link'

const PlanItem = (props: { title: string; classItemCircle: string; classItemText: string }) => {
  const { title } = props
  return (
    <li className="flex min-h-[28px] items-center">
      <i className={props.classItemCircle} aria-hidden="true"></i>
      <span className={props.classItemText}>{title}</span>
    </li>
  )
}

const PlanList = (props: {
  items: string[]
  classList: string
  classItemCircle: string
  classItemText: string
}) => {
  const items = props.items || []
  if (items.length > 0) {
    return (
      <ul className={props.classList}>
        {items.map((item, index) => {
          return (
            <PlanItem
              key={`plan-${index}`}
              title={item}
              classItemCircle={props.classItemCircle}
              classItemText={props.classItemText}
            />
          )
        })}
      </ul>
    )
  }
  return <></>
}

const MostPopular = (props: { mostPopular: boolean }) => {
  if (!props.mostPopular) {
    return <></>
  }
  return (
    <div className="absolute -top-6 left-1/4 mb-2 flex h-[54px] w-1/2 items-center justify-center rounded bg-black px-2 py-1 text-center text-xl font-semibold uppercase">
      Most Popular
    </div>
  )
}

export default function Plan(props: {
  title: string
  text: string
  price: string
  subscription: string
  link: string
  cta: string
  classMain: string
  classTitle: string
  items: string[]
  mostPopular?: boolean
  isWhite?: boolean
}) {
  const { title, text, price, subscription, link, cta, classMain, classTitle, items } = props
  const mostPopular = props.mostPopular || false
  const isWhite = props.isWhite || false
  const classText = isWhite
    ? 'mb-8 font-light xl:text-xl'
    : 'text-center text-xl text-[var(--gray-text-color)] sm:mb-16'
  const classList = isWhite
    ? 'space-y-3 font-light text-white'
    : 'space-y-3 font-light text-[var(--dark-text-color)]'
  const classPrice = isWhite
    ? 'mb-3 text-6xl font-bold'
    : 'mb-2 text-6xl font-bold text-[var(--primary-color)]'
  const classItemCircle = isWhite
    ? 'fa-regular fa-circle-check fa-xl ml-1 mr-4'
    : 'fa-regular fa-circle-check fa-xl ml-1 mr-4 text-[var(--primary-color)]'
  const classItemText = isWhite
    ? 'text-left text-lg'
    : 'text-left text-lg text-[var(--dark-text-color)]'
  const classSubsription = isWhite
    ? 'mb-9 text-lg font-light uppercase'
    : 'mb-9 text-lg font-light uppercase text-[var(--dark-text-color)]'
  return (
    <div className={classMain}>
      <MostPopular mostPopular={mostPopular} />
      <h4 className={classTitle}>{title}</h4>
      <p className={classText}>{text}</p>
      <p className={classPrice}>{price}</p>
      <p className={classSubsription}>{subscription}</p>
      <Link
        href={`/${link}`}
        className="mx-auto mb-11 block w-2/3 rounded border border-[var(--dark-border-color)] bg-[#ffffff] py-4 font-semibold uppercase text-[var(--dark-text-color)]"
      >
        {cta}
      </Link>
      <PlanList
        items={items}
        classList={classList}
        classItemCircle={classItemCircle}
        classItemText={classItemText}
      />
    </div>
  )
}
