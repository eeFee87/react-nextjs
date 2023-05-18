const fetchComments = (id) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.map((comment) => (
        <li className="px-4 mt-2 " key={comment.id}>
          <h2 className="text-xl mb-4 list-disc">{comment.name}</h2>
          <p className="mb-2">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
