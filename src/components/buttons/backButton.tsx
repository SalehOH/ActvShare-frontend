import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}
const backButton = (props: Props) => {
  const navigate = useNavigate();
  const handleCliked = () => navigate(-1);

  return (
    <button className={props.className} onClick={handleCliked}>
      <FaArrowLeft />
    </button>
  );
};

export default backButton;
