import BackButton from "@/components/buttons/backButton";
import { UserResponse } from "@/features/home/utils/types";

interface Props {
  user: UserResponse;
}
const url = import.meta.env.VITE_IMAGE_URL;
const header = ({ user }: Props) => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <BackButton className="text-white text-2xl font-semibold" />
      <div className="w-16 h-16">
        <img className="w-full h-full rounded-full object-cover" src={url + user.profilePicture} />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white">{user.name}</h1>
        <h2 className="text-lg text-gray-500">@{user.username}</h2>
      </div>
    </div>
  );
};

export default header;
