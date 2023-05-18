export default function PostsLayout({ children }) {
  return (
    <div>
      <small className="px-4">Home &bull; Posts</small>
      {children}
    </div>
  );
}
