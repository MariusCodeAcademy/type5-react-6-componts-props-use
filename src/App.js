import './App.css';
import BtnList from './components/BtnList';
import MyButton from './components/MyButton';
import Box from './components/Box';

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
  return (
    <div className='App'>
      <h1>App</h1>
      <MyButton name='btn1' color='red' />
      <MyButton name='btn2' color='blue' />
      <MyButton name='btn3' color='green' />
      <BtnList items={btnData} />
      <Box title='Small box' size='sm' />
      <Box title='Large box' size='lg' />
    </div>
  );
}

// sukurti componenta <Box title='by box' size='sm' />
// <Box title='by box' size='lg' />
// box sm yra div kuris yra 50x100px
// box lg yra div kuris yra 150x300px

// MyButton komponente sukurti h2 elementa kuris skaiciuos kiek kartu paspaustas mygtukas (useState)
export default App;
