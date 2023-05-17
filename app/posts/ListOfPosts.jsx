import Link from 'next/link';
import { LikeButton } from './LikeButton';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className="px-4 py-1 border">
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <h2 className="text-3xl py-4 text-blue-400">{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton id={post.id} />
    </article>
  ));
}
