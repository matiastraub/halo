'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const BlogPost = (props: {
  image: string
  title: string
  excerpt: string
  date: string
  slug: string
  t: (key: string) => string
}) => {
  const { image, title, excerpt, date, slug, t } = props

  return (
    <article className="mb-12 rounded-3xl bg-[var(--light-background-color)] p-6 shadow-lg">
      <div className="mb-4">
        <img className="w-full h-64 object-cover rounded-2xl" src={image} alt={title} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-[var(--primary-color)] font-medium">{date}</span>
        <span className="text-sm text-[var(--dark-text-color)] opacity-75">
          {t('blogReadTime')}
        </span>
      </div>
      <h3 className="mb-4 text-2xl font-bold [font-family:var(--font-family-heading)] text-[var(--dark-text-color)]">
        {title}
      </h3>
      <p className="mb-6 text-lg text-[var(--dark-text-color)] leading-relaxed">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-block rounded bg-[var(--primary-button-bg-color)] px-6 py-3 text-base font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)] transition-colors"
      >
        {t('blogReadMore')}
      </Link>
    </article>
  )
}

const FeaturedPost = (props: {
  image: string
  title: string
  content: string
  date: string
  author: string
  t: (key: string) => string
}) => {
  const { image, title, content, date, author, t } = props

  return (
    <article className="mb-12">
      <div className="mb-6">
        <img className="w-full h-96 object-cover rounded-3xl" src={image} alt={title} />
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-[var(--primary-color)] font-medium">{date}</span>
          <span className="text-sm text-[var(--dark-text-color)] opacity-75">
            {t('blogBy')} {author}
          </span>
        </div>
        <span className="text-sm text-[var(--dark-text-color)] opacity-75">
          {t('blogFeaturedReadTime')}
        </span>
      </div>
      <h1 className="mb-6 text-4xl font-bold [font-family:var(--font-family-heading)] text-[var(--dark-text-color)] lg:text-5xl">
        {title}
      </h1>
      <div className="prose prose-lg max-w-none text-[var(--dark-text-color)] leading-relaxed">
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}

type AllBlogPostsProps = { t: (key: string) => string }
const AllBlogPosts = (props: AllBlogPostsProps) => {
  const { t } = props

  // Sample blog posts data - in real app, this would come from an API or CMS
  const blogPosts = [
    {
      image: 'images/blog-ai-trends.webp',
      title: t('blogPost1Title'),
      excerpt: t('blogPost1Excerpt'),
      date: t('blogPost1Date'),
      slug: 'ai-trends-2025'
    },
    {
      image: 'images/blog-automation.webp',
      title: t('blogPost2Title'),
      excerpt: t('blogPost2Excerpt'),
      date: t('blogPost2Date'),
      slug: 'business-automation-guide'
    },
    {
      image: 'images/blog-future-tech.webp',
      title: t('blogPost3Title'),
      excerpt: t('blogPost3Excerpt'),
      date: t('blogPost3Date'),
      slug: 'future-of-technology'
    }
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
      {blogPosts.map((post, index) => (
        <BlogPost
          key={`blog-post-${index}`}
          image={post.image}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
          t={t}
        />
      ))}
    </div>
  )
}

export default function SectBlog() {
  const t = useTranslations('Blog')

  return (
    <section className="code-section" id="blog">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-start justify-center lg:w-1/2">
            <div className="w-full">
              <FeaturedPost
                image="images/blog-featured.webp"
                title={t('blogFeaturedTitle')}
                content={t('blogFeaturedContent')}
                date={t('blogFeaturedDate')}
                author={t('blogFeaturedAuthor')}
                t={t}
              />
            </div>
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              {t('blogTitle')}
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              {t('blogDesc')}
            </p>
            <div className="mb-12">
              <AllBlogPosts t={t} />
            </div>
            <div className="flex justify-center lg:block">
              <Link
                href="/blog"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                {t('btnViewAllPosts')}
              </Link>
            </div>
            <div className="flex items-center" style={{ display: 'none' }}>
              <img
                src="images/testimonial04.jpg"
                alt="Blog Reader"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media="{&amp;quot;id&amp;quot;:&amp;quot;2172939931&amp;quot;,&amp;quot;src&amp;quot;:&amp;quot;iStock&amp;quot;,&amp;quot;type&amp;quot;:&amp;quot;image&amp;quot;}"
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  {t('testimonialsText-4')}
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    {' '}
                    {t('testimonialsName-4')}
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    {t('testimonialsTitle-4')}
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
