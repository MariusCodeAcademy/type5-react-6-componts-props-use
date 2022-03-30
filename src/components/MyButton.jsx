function MyButton(props) {
  console.log('MyButton props ===', props);
  const nameFromProps = props.name;
  const styleObj = {
    backgroundColor: props.color,
  };
  return (
    <button style={styleObj}>
      {nameFromProps} color: {props.color}
    </button>
  );
}
export default MyButton;
