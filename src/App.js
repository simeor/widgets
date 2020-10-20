import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'

const items = [
  {
    title: "what is React",
    content: "React is a front-end framework"
  },
  {
    title: "why React ?",
    content: "React is a favourite js ..."
  },
  {
    title: "how do you use React ?",
    content: "you use react by creating components"
 }
]

export default () => {
  return(
    <div>
      <Search />
    </div>
  )
};
