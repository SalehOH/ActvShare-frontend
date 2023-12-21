import SignUp from './components/signup'
import Login from './components/login';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const index = () => {
  const {pageName} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if(pageName !== "login" && pageName !== "signup"){ 
    navigate("/", {replace: true})
  }}
  , [pageName])

  return (
    <>
      <div className="flex justify-center items-center text-white mt-20">
        {pageName==="login" ? (
          <Login  />
        ) : (
          <SignUp
           
          />
        )}
      </div>
    </>
  );
}

export default index