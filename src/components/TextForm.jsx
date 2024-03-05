import { useState } from "react";

const TextForm = ({ heading }) => {
  const [text, setText] = useState('Enter Your Text');
  console.log(text);

  function handleUpperClick() {
    // console.log("upper Click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowerClick() {
    // console.log("upper Click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <form>
          <h3>{heading}</h3>
          <div className="form-group my-3">
            <label htmlFor="myBox">Write your text here...</label>
            <textarea
              className="form-control"
              name=""
              id=""
              value={text}
              onChange={handleOnChange}
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpperClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLowerClick}>
            Convert To LowerCase
          </button>
        </form>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
