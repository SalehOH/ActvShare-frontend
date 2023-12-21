import React from 'react'
import { Button } from '../ui/button';
import { FaImage } from 'react-icons/fa6';


const imageButton = ({ onClick, className}: 
  { onClick?: React.MouseEventHandler, className?: string }): JSX.Element => {
 
 
  return (
    <>   
      <Button
        onClick={onClick}
        variant="outline"
        size="icon"
        className={
          className
            ? className
            : `mr-2 inline-flex justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600 bg-inherit border-0`
        }
       >
        <FaImage />
        <span className="sr-only">Upload image</span>
      </Button>
    </>
  );
};

export default imageButton