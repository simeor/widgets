import React from 'react';

const Link = ({className, href, children}) => {

  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({},"", href); //change the url
    // reflect the chnage in the url
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return(
    <a onClick={onClick} className={className} href={href}>{children}</a>
    );
}

export default Link;