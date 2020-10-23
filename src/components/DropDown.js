import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({options, selected, onSelectedChange}) =>{

  const [open, setOpen] = useState(false);
  const ref = useRef();

  // close dropdown when click outide of it
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (ref.current.contains(e.target)){
        return;
      }
      setOpen(false)
    });
  }, []);

  const renderdOptions = options.map((option) => {

    if (option.value === selected.value){
      return null;
    }
    return(
        <div className="item" key={option.value} onClick={() => onSelectedChange(option)}>
          {option.label}
        </div>
      )
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div onClick={() => setOpen(!open)}className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ?'visible transition' : ''}`}>{renderdOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
