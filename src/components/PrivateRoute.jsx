import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAccessDeniend } from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isAccessDeniend = useSelector(getIsAccessDeniend);
  return isAccessDeniend ? <Navigate to={redirectTo} /> : Component;
};
