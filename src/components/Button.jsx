import PropTypes from 'prop-types';

function Button({ text, callback = null, color = 'blue', type = 'button' }) {
  let classes;
  color === 'red' ? classes = 'button button_red' : classes = 'button button_blue';

  return <button className={classes} onClick={callback} type={type}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
  color: PropTypes.string,
  type: PropTypes.string,
}
export default Button