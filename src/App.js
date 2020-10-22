import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';

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

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
]

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return(
    <div>
      <DropDown options={options} selected={selected} onSelectedChange={setSelected}/>
    </div>
  )
};
