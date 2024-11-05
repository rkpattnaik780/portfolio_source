const BlogCard = ({ title, imgSrc, description, href }) => (
  <li className="dark:text-zinc-350 my-5 flex gap-4 text-zinc-500">
    <a
      className="link focusable font-medium text-zinc-800 dark:text-white"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <div style={{ width: "150px", height: "100px", overflow: "hidden" }}>
        <img
          src={imgSrc}
          alt={title}
          width="150px"
          height="150px"
          className="rounded-md"
        />
      </div>
    </a>
    <div className="flex min-w-0 flex-col">
      <a
        className="link focusable font-medium text-zinc-800 dark:text-white"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <p className="mb-1 flex items-center">
          <span className="font-semibold text-zinc-700 dark:text-zinc-100">
            {title}
          </span>
        </p>
      </a>
      <p className="flex items-center">
        <span className="flex-1 text-zinc-500 dark:text-zinc-400">
          {description}
        </span>
      </p>
    </div>
  </li>
);

export default BlogCard;