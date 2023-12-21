import { Button } from '../ui/button';
import { FaRegHeart } from 'react-icons/fa6';

const shareButton = () => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="bg-inherit border-gray-500 hover:text-red-600 hover:bg-gray-500 hover:scale-150 transition-transform duration-300 ease-in-out"
    >
      <FaRegHeart />
    </Button>
  );
}

export default shareButton