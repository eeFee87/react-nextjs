import Image from 'next/image';
const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error('Error al cargar los comentarios');
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul className="mt-6">
      {comments.map((comment) => (
        <li className="px-4 bg-slate-800" key={comment.id}>
          <img
            className="w-40"
            src="https://api.dicebear.com/6.x/adventurer/svg?seed=Buster"
            alt="avatar"
          />
          {/* <Image
            src="https://api.dicebear.com/6.x/adventurer/svg?seed=Buster"
            width={100}
            height={100}
            alt="Picture of the author"
          /> */}

          <h2 className="text-xl mb-4 list-disc">{comment.name}</h2>
          <p className="">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
