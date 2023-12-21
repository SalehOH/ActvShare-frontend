import React from 'react'
import { Button } from '@/components/ui/button';
import { FaImage } from 'react-icons/fa6';


const imageButton = ({ onClick, className , onFileSelect}: { onClick?: React.MouseEventHandler, className?: string, onFileSelect?: Function | null }): JSX.Element => {
  const hiddenImageInput = React.useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = React.useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file && onFileSelect)  {
      setImageName(file.name);
      onFileSelect(file);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    hiddenImageInput.current?.click();
  }
  return (
    <>
    {!onClick &&
      <input
        ref={hiddenImageInput}
        onChange={(e) => handleFileChange(e)}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
    }
      <Button
        onClick={onClick ? onClick : handleClick}
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
        {imageName && <span className="text-xs text-gray-400 ml-2">{imageName}</span>}
    </>
  );
};

export default imageButton