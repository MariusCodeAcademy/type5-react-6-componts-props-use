import './App.css';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      <MyButton name='btn1' color='red' />
      <MyButton name='btn2' color='blue' />
      <MyButton name='btn3' color='green' />
    </div>
  );
}

export default App;
