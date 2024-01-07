import { useState, FC, useEffect } from "react";
import { BiErrorAlt, BiX } from "react-icons/bi";

interface Props {
  message: string;
}
const errorAlert: FC<Props> = ({ message }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {show && (
        <div
          className="flex items-center mx-auto w-full max-w-xs p-4 mb-4 text-white bg-red-700 rounded-lg shadow"
          role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
            <BiErrorAlt className="w-5 h-5" />
            <span className="sr-only">Error icon</span>
          </div>
          <div className="ms-3 text-sm font-normal">{message}</div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 hover:text-red-900 hover:bg-red-200"
            onClick={() => setShow(false)}>
            <span className="sr-only">Close</span>
            <BiX className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
};

export default errorAlert;
