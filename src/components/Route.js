// manual route without react-router-dom: out of intrest component / trial
const Route = ({path, children}) => {
  return window.location.pathname === path ? children : null
}

export default Route;
