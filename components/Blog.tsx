export default function Posts() {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
