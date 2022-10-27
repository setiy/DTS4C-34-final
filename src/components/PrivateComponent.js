import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../config/firebase';

const PrivateComponent = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);
  if (!user && loginOnly) {
    return <Navigate to="/" />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/home" />;
  }

  return isLoading ? <div>loading...</div> : children;
};

export default PrivateComponent;
