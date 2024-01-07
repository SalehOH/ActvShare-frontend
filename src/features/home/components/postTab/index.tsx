import InputMessage from "../postInput";
import React from "react";
import Post from "@/components/postContainer";
import Loading from "@/components/postContainer/loading";
import useSetTab from "../../hooks/useSetTab";

import { selectPosts } from "../../store/selectors";
import { useSelector } from "react-redux";
import { useDispatcher } from "@/hooks/useDispatcher";
import { fetchPosts } from "../../store/actions";
import { useUser } from "@/hooks/useUser";

const index = () => {
  const { posts, loading } = useSelector(selectPosts);
  const dispatch = useDispatcher();
  const user  = useUser();

  useSetTab(0);

  React.useEffect(() => {
    if (!posts) dispatch(fetchPosts());
  }, []);

  return (
    <>
      {user && <InputMessage />}
      {loading ? <Loading /> : 
      <div id="posts">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>}
    </>
  );
};

export default index;
