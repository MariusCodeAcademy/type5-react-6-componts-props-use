import { useState } from 'react';

function MyButton(props) {
  const [count, setCount] = useState(0);
  console.log('MyButton props ===', props);
  const nameFromProps = props.name;
  const styleObj = {
    backgroundColor: props.color,
  };

  function increaseHandler() {
    console.log('button clicked');
    setCount((prevState) => prevState + 1);
    // vygdom App.js aprasyta funkcija ir padidnam skaitliuka
    props.onBtnClick();
  }

  return (
    <div className='btn-div'>
      <h2>{count}</h2>
      <button onClick={increaseHandler} style={styleObj}>
        {nameFromProps} color: {props.color}
      </button>
    </div>
  );
}
export default MyButton;
