import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { UserAuth } from "./Firebase/AuthContextProvider";
import { auth } from "./Firebase/firebase.utils";

export const Signout = () => {
  const { user, logout } = UserAuth();

  const navigate = useNavigate();
    
    const signout = async () => {
       await logout (auth)
          .then(() => {
            console.log(user.email + ' signed out');
            navigate('/');
          })
          .catch((error) => {
            console.log('error signing out user', error.message);
          });
      };

      return (
        <Button size="sm" variant="outline-primary" onClick={signout} >Sign Out {user.email}</Button>
      )
}