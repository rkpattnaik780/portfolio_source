import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import formatDate from '@/lib/utils/formatDate';
// import Image from '@/components/Image';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import SocialIcon from '@/components/social-icons';

import NewsletterForm from '@/components/NewsletterForm';
import BlogCard from '@/components/BlogCard';

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pb-4 md:space-y-5">
        <div className="mt-16 mt-16 flex flex-col items-center">
          <img
            src="/static/images/ramakrishna.jpg"
            alt="avatar"
            width="200px"
            height="200px"
            className="rounded-full"
          />
          <h1 className='text-2xl font-bold tracking-tight text-zinc-800 dark:text-white mt-4'>Ramakrishna Pattnaik</h1>
        </div>

        <div className="mt-16 mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
            <SocialIcon kind="github" href={siteMetadata.github} size="5" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
            <SocialIcon kind="medium" href={siteMetadata.medium} size="5" />
            <SocialIcon kind="goodreads" href={siteMetadata.goodreads} size="5" />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="mt-2 justify-center"></div>
        </div>
      </div>
      <div className="content mb-8">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Blog Posts</h2>
      </div>
      <div className="container">
        <ul className="mt-8">
          {projectsData.map((d) => (
            <BlogCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
            />
          ))}
        </ul>
      </div>

      <div className="content">
        <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences</h2>
        <ul className="mt-8">
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.redhat.com/en"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/static/images/workxp/ping_identity_logo.png"
                alt="Ping Identity"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Ping Identity
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  May '24
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  Present
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Software Engineer
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.redhat.com/en"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/static/images/workxp/red_hat_logo.png"
                alt="Red Hat"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Red Hat
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  Oct '21
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  May '24
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Software Engineer
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.redhat.com/en"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/static/images/workxp/red_hat_logo.png"
                alt="Red Hat"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Red Hat
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  April '20
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  September '21
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Associate Software Engineer
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://www.redhat.com/en"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/static/images/workxp/red_hat_logo.png"
                alt="Red Hat"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Red Hat
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  September '19
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  February '20
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Software Engineering Intern
                </span>
              </p>
            </div>
          </li>
          <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
            <a
              className="link focusable font-medium text-zinc-800 dark:text-white"
              href="https://skylarkdrones.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="/static/images/workxp/skylark_drones.png"
                alt="Skylark Drones"
                width="50px"
                height="50px"
                className="rounded-md"
              />
            </a>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="mb-1 flex items-center">
                <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
                  Skylark Drones
                </span>
                <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                  December '18
                  <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
                  February '19
                </span>
              </p>
              <p className="flex items-center truncate">
                <span className="flex-1 truncate text-zinc-500 dark:text-zinc-400">
                  Software Engineering Intern
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  );
}
