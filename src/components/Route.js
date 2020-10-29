// manual route without react-router-dom: out of intrest component / trial
import {useEffect, useState} from 'react';


const Route = ({path, children}) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      // if pathname changes, cnage state and update route
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListner('popstate', onLocationChange);
    };

  },[]);

  return currentPath === path ? children : null
}

export default Route;
