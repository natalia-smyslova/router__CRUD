import PropTypes from 'prop-types';

function CloseButton({ callback = null }) {
  return <span className="post__close" onClick={callback}>&#10006;</span>;
}

CloseButton.propTypes = {
  callback: PropTypes.func,
}

export default CloseButton