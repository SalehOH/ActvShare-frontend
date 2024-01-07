import { IoHeart } from "react-icons/io5";
import { useDispatcher } from "@/hooks/useDispatcher";
import { addLike, removeLike } from "@/features/home/store/actions";
import { toggleLike } from "@/features/post/store";
import { FC } from "react";

interface props {
  postId: string;
  isLiked: boolean;
}
const likeButton: FC<props> = (props) => {
  const dispatch = useDispatcher();
  const handleCLick = () => {
    if (props.isLiked) {
      dispatch(removeLike(props.postId)).then(() => dispatch(toggleLike({ type: "remove" })));
    } else {
      dispatch(addLike(props.postId)).then(() => dispatch(toggleLike({ type: "add" })));
    }
  };
  const styleLike = () => {
    const style = "bg-transparent border-0 hover:bg-transparent text-2xl";
    if (props.isLiked) return style + " text-red-600 hover:text-white";
    return style + " hover:text-red-600";
  };

  return (
    <button type="button" onClick={handleCLick} className={styleLike()}>
      <IoHeart />
    </button>
  );
};

export default likeButton;
