import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  )
}

export default async function Post({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1 className="text-3xl py-4 text-blue-400 p-4 ">{post.title}</h1>
      <Link className="p-4" href={`posts/${id}/comments`}>
        Ver comentarios
      </Link>
      {children}
    </article>
  )
}
