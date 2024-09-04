import { Post } from "../utils/post.ts";

export function PostCard(props: { post: Post }) {
  const { post } = props;
  const image = post.image; // Assuming post has an image property
  const link = `/${post.slug}`;
  return (
    // <article class="flex justify-between">
    //   <a class="sm:col-span-2" href={`/${post.slug}`}>
    //     <h3 class="text(3xl gray-900) font-bold">
    //       {post.title}
    //     </h3>
    //   </a>

    //   {
    //     /* <div class="mt-4 text-gray-900">
    //       {post.snippet}
    //     </div> */
    //   }
    //   <time class="text-gray-500">
    //     {new Date(post.publishDate).toLocaleDateString("en-us", {
    //       year: "numeric",
    //       month: "long",
    //       day: "numeric",
    //     })}
    //   </time>
    // </article>
    //   <a href={`/${post.slug}`}>
    //     <div className="h-full rounded-2xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900">
    //       <div className="flex h-full w-full flex-col rounded-[1rem] bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white">
    //         <div className="flex-auto">
    //           <div className="flex justify-between pb-4 text-xs">
    //             <time class="text-gray-500">
    //               {new Date(post.publishDate).toLocaleDateString("en-us", {
    //                 year: "numeric",
    //                 month: "long",
    //                 day: "numeric",
    //               })}
    //             </time>
    //             {/* <p>{post.minutesRead} min read</p> */}
    //           </div>
    //           <p className="pb-4 text-lg font-bold">{post.title}</p>
    //           {/* <Tags tags={post.tags} /> */}
    //           <p className="line-clamp-6 pt-4">{post.description}</p>
    //         </div>
    //         <p className="pt-4 underline">read more →</p>
    //       </div>
    //     </div>
    //   </a>
    // );

    <article
      className={`max-w-md mx-auto md:max-w-none grid gap-6 py-4 md:gap-8 ${
        image ? "md:grid-cols-2" : ""
      }`}
    >
      {image && (
        link
          ? (
            <a
              className="relative block group"
              href={link ?? "javascript:void(0)"}
            >
              <div className="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">
                <img
                  src={image}
                  className="absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </a>
          )
          : (
            <div className="relative h-0 pb-[56.25%] md:pb-[75%] md:h-72 lg:pb-[56.25%] overflow-hidden bg-gray-400 dark:bg-slate-700 rounded shadow-lg">
              <img
                src={image}
                className="absolute inset-0 object-cover w-full h-full mb-6 rounded shadow-lg bg-gray-400 dark:bg-slate-700"
                alt={post.title}
                loading="lazy"
                decoding="async"
              />
            </div>
          )
      )}
      <div className="mt-2">
        <header>
          <div className="mb-1">
            <span className="text-sm">
              <time class="text-gray-500">
                {new Date(post.publishDate).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {
                /* {post.author && (
                <>
                  {" "} · <span>{post.author.replaceAll("-", " ")}</span>
                </>
              )} */
              }
              {
                /* {post.category && (
                <>
                  {" "} ·{" "}
                  <a
                    className="hover:underline"
                    href={`/category/${post.category.slug}`}
                  >
                    {post.category.title}
                  </a>
                </>
              )} */
              }
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
            {link
              ? (
                <a
                  className="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
                  href={link}
                >
                  {post.title}
                </a>
              )
              : (
                post.title
              )}
          </h2>
        </header>
        {post.description && (
          <p className="flex-grow text-muted dark:text-slate-400 text-lg">
            {post.description}
          </p>
        )}
        {
          /* {post.tags && Array.isArray(post.tags)
          ? (
            <footer className="mt-5">
              <Tags tags={post.tags} />
            </footer>
          )
          : <></>} */
        }
      </div>
    </article>
  );
}
