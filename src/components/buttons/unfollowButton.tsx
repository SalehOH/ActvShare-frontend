import { Button } from "@/components/ui/button";
import axios from "axios";
import { MdPersonRemoveAlt1 } from "react-icons/md";


const url = import.meta.env.VITE_API_URL; 
const unfollowButton = (props: {setIsFollowing?: Function, username: string}) => {

  const isFollowing = props.setIsFollowing;
  const username = props.username;
  
  const handleUnfollow = async () => {
    try{
      const res = await axios.post(url + "account/unfollow/" + username, {}, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")??"")["token"]}`,
        }
      } )
      console.log(res)
      isFollowing && isFollowing(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button
      onClick={handleUnfollow}
      variant="outline"
      size="icon"
      className="bg-gray-900 border-0 text-2xl rounded-xl mr-2"
    >
      <MdPersonRemoveAlt1 />
    </Button>
  );
};

export default unfollowButton;
