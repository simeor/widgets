import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Translate from './components/Translate';
import Route from './components/Route';


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
    // Route is done via component not react-router-dom
    <div>
      <Route path="/" >
        <Accordion items={items}/>
      </Route>
      <Route path="/list" >
        <Search />
      </Route>
      <Route path="/dropdown" >
        <DropDown label="select a colour" selected={selected}
          options={options} onSelectedChange={setSelected}
          sampletext="Sample text"/>
      </Route>
      <Route path="/translate" >
        <Translate />
      </Route>
    </div>
  )
};
