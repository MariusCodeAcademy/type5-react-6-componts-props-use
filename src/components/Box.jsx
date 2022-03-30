function Box(props) {
  let finalClass;
  if (props.size === 'sm') {
    finalClass = 'smallBox';
  } else if (props.size === 'lg') {
    finalClass = 'largeBox';
  }
  return <div className={finalClass}>{props.title}</div>;
}

export default Box;
