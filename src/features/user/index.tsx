import { useDispatcher } from "@/hooks/useDispatcher";
import { getUser } from "./store/actions";
import { useSelector } from "react-redux";
import { selectUserwithPosts } from "./store/selectors";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "./components/postCard";
import Header from "./components/header";


const UserPage = () => {
  const dispatch = useDispatcher();
  const { posts, user, loading, error } = useSelector(selectUserwithPosts);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (username) dispatch(getUser(username));
  }, []);

  useEffect(() => {
    if (error !== null) {
      navigate("/", { replace: true });
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;
  if (posts)
    return (
      <div className="p-4">
        <Header user={user!} />
        {posts!.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
};

export default UserPage;
