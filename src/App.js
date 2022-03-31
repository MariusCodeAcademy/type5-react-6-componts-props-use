import { useState } from 'react';
import './App.css';
import BtnList from './components/BtnList';
import MyButton from './components/MyButton';
import Box from './components/Box';
import SendFetch from './components/SendFetch';
import TotalClickCount from './components/TotalClickCount';

const btnData = [
  {
    id: 1,
    name: 'btn1',
    color: 'red',
  },
  {
    id: 2,
    name: 'btn2',
    color: 'blue',
  },
  {
    id: 3,
    name: 'btn3',
    color: 'green',
  },
];

function App() {
  // sukurti totalClickCount state (pradine reiksme 0)
  const [totalClickCount, setTotalClickCount] = useState(0);

  // sukurti totalClickHandler() {} kuri padidina reiksme vienetu
  function totalClickHandler(btnTitle) {
    setTotalClickCount((prevState) => prevState + 1);
    console.log('btnTitle', btnTitle);
  }
  return (
    <div className='App'>
      <SendFetch />
      <h1>App</h1>
      <TotalClickCount clickCount={totalClickCount} />
      <MyButton name='btn1' color='red' onBtnClick={totalClickHandler} />
      <MyButton name='btn2' color='blue' onBtnClick={totalClickHandler} />
      <MyButton name='btn3' color='green' onBtnClick={totalClickHandler} />
      <BtnList items={btnData} onBtnClick={totalClickHandler} />
      <Box title='Small box' size='sm' />
      <Box title='Large box' size='lg' />
      <Box title='Medium box' size='md' />
    </div>
  );
}

// sukurti componenta <Box title='by box' size='sm' />
// <Box title='by box' size='lg' />
// box sm yra div kuris yra 50x100px
// box lg yra div kuris yra 150x300px

// MyButton komponente sukurti h2 elementa kuris skaiciuos kiek kartu paspaustas mygtukas (useState)
export default App;
