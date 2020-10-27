import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({options, selected, onSelectedChange, lable, sampletext}) =>{

  const [open, setOpen] = useState(false);
  const [color, setColor]= useState("");
  const ref = useRef();

  // close dropdown when click outide of it
  useEffect(() => {

    const onBodyClick = (e) => {
      // if click element on dropdown
      if (ref.current.contains(e.target)){
        return;
      }
      setOpen(false)
    };
    document.body.addEventListener('click', onBodyClick);

    //clean up
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    }
  }, []);

  const onDropdownClick = (option) => {
    setColor(option.value);
    onSelectedChange(option);
  }

  const renderdOptions = options.map((option) => {

    if (option.value === selected.value){
      return null;
    }
    return(
        <div className="item" key={option.value} onClick={() => onDropdownClick(option)}>
          {option.label}
        </div>
      )
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{lable}</label>
        <div onClick={() => setOpen(!open)}className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ?'visible transition' : ''}`}>{renderdOptions}</div>
        </div>
      </div>
      <h3 style={{color: `${color}`}}>{sampletext}</h3>

    </div>
  );
}

export default DropDown;
