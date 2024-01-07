import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PostElement from "./components/postCard";
import Replies from "./components/repliesCard";
import Input from "./components/replyInput";
import Loading from "./components/postCard/loading";
import Emoji from "@/assets/emoji.png";

import { fetchPost } from "./store/actions";
import { selectPost } from "./store/selectors";
import { useSelector } from "react-redux";
import { useDispatcher } from "@/hooks/useDispatcher";

const index = () => {
  const { id } = useParams();
  const dispatch = useDispatcher();

  const { postWithReplies, loading } = useSelector(selectPost);

  useEffect(() => {
    if (id) dispatch(fetchPost(id));
  }, []);

  if (loading && !postWithReplies) return <Loading />;
  else if (postWithReplies && postWithReplies.replies.length === 0) {
    console.log("here");
    return (
      <>
        <PostElement post={postWithReplies!.post} />
        <div className="flex flex-col justify-center items-center mt-10">
          <img src={Emoji} alt="emoji" className="w-32" />
          <p className="text-base md:text-xl text-gray-500 mt-3">No replies yet. Be The first to reply!</p>
        </div>
        <Input />
      </>
    );
  } else {
    return (
      <>
        <PostElement post={postWithReplies!.post} />
        <Replies replies={postWithReplies!.replies} />
        <Input />
      </>
    );
  }
};

export default index;
