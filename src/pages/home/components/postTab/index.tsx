import InputMessage from "@/components/inputMessage";
import React from "react";
import axios from "axios";
import { PostType } from "../../utils/types";
import Post from "@/components/postContainer";
import Loading from "@/components/postContainer/loading";
import { useUserContext } from "@/hooks/useUserContext";
import useSetTab from "../../hooks/useSetTab"

const url = import.meta.env.VITE_API_URL + "post/all/";

const index = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = useUserContext();
  useSetTab(0)

  React.useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${user?.token}` },
        });
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      <InputMessage />
      {loading ? (
        <div>
          <Loading />
          <Loading />
        </div>
      ) : (
        <div id="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default index;
