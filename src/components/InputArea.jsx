import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState(""); //keep inputText state variable in this module

  function handleChange(event) {
    //set value of inputText state variable
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        // call addItem in App.jsx module, passing the input text
        onClick={() => {
          props.addItem(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
