/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type BlogCardProps = {
  imgSrc: string
  imgAlt: string
  date: string
  title: string
  desc: string
  link: string
  readMore: string
}

const BlogCard = (props: BlogCardProps) => {
  const { imgSrc, imgAlt, date, title, desc, link, readMore } = props
  return (
    <div className="m-6 flex-1 rounded-3xl bg-[#ffffff] p-4 shadow-lg shadow-[#ccc]">
      <img src={`images/${imgSrc}`} alt={imgAlt} className="h-64 w-full rounded-3xl object-cover" />
      <div className="px-4 py-6">
        <p className="mb-2 uppercase text-[var(--primary-color)]">{date}</p>
        <h3 className="mb-2 text-3xl font-medium">{title}</h3>
        <p className="mb-4 text-lg font-light text-[var(--gray-text-color)]">{desc}</p>
        <Link
          href={`/blog/${link}`}
          className="flex items-center uppercase text-[var(--primary-color)] hover:underline"
        >
          {readMore}
          <i className="fa-solid fa-arrow-right ml-2" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  )
}
type AllBlogCardsProps = { t: (key: string) => string }

const AllBlogCards = (props: AllBlogCardsProps) => {
  const { t } = props
  const arr = []
  for (let i = 1; i <= 3; i++) {
    arr.push(
      <BlogCard
        key={`blog-card-${i}`}
        imgSrc={t(`blogCardImgSrc-${i}`)}
        imgAlt={t(`blogCardImgAlt-${i}`)}
        date={t(`blogCardDate-${i}`)}
        title={t(`blogCardTitle-${i}`)}
        desc={t(`blogCardDesc-${i}`)}
        link={t(`blogCardLink-${i}`)}
        readMore={t(`btnReadMore`)}
      />
    )
  }
  return arr
}

export default function SectUnlockFuture() {
  const t = useTranslations('Home')

  return (
    <section className="code-section" id="suhrv6r">
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-6xl">
          {t('blogTitle')}
        </h2>
        <p className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-[var(--gray-text-color)] sm:text-xl">
          {t('blogDesc')}
        </p>
        <div className="flex flex-col md:flex-row">
          <AllBlogCards t={t} />
        </div>
      </div>
    </section>
  )
}
