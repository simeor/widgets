import React from 'react';

const DropDown = ({options, selected, onSelectedChange}) =>{

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
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderdOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
