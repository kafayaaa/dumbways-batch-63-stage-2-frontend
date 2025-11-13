import { Link, Outlet } from "react-router-dom";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

export default function Posts() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Posts</h1>
      <ul className="mb-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className="text-blue-500 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
