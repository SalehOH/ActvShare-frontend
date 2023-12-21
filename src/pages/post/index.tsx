import { useParams } from "react-router-dom";
import PostElement from "./components/postCard";
import Replies from "./components/repliesCard";
import axios from "axios";
import React from "react";
import Loading from "./components/postCard/loading";
import { PostType } from "../home/utils/types";

const url = import.meta.env.VITE_API_URL + "post/";

const index = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<PostType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getPost = async () => {
      try{
        const response =  await axios.get(url + id, {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("user") ?? "{}")["token"]}` },
        })
        setPost(response.data);
        setLoading(false);
        console.log(response.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getPost();
  }, []);

  return (
    <>
      {loading ? <Loading /> : <PostElement post={post} />}
      {post?.replies && (
        <div id="replies">
          <Replies replies={post.replies} />
        </div>
      )}
    </>
  );
};

export default index;
