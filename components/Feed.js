import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: "Greg Peters",
      username: "monwell571",
      userImg: "profile_pic.png",
      img: "https://images.unsplash.com/photo-1587166088004-bbd20854280f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNwb3J0cyUyMGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      text: "i love to play hoops!",
      timestamp: "2 hours ago"

    },
    {
      id: 2,
      name: "Frank Goth",
      username: "monwell571",
      userImg: "profile_pic.png",
      img: "https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0cyUyMGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      text: "wilson balls have great grip!",
      timestamp: "1 week ago"

    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
