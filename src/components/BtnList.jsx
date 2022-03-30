import MyButton from './MyButton';

function BtnList(props) {
  console.log('props ===', props);
  return (
    <div>
      {props.items.map((btnObj) => (
        <MyButton key={btnObj.id} name={btnObj.name} color={btnObj.color} />
      ))}
    </div>
  );
}
export default BtnList;
