import PropTypes from "prop-types";

import "./styles.scss";

function Checkbox(props) {
  const { content, checked, handleChangebyPrice, handleFilterbyByPrice } = props;

  return (
    <label onClick={handleFilterbyByPrice} className="checkbox">
      <input
        checked={checked}
        onChange={handleChangebyPrice}
        className="checkbox__input"
        type="radio"
        name="Radio"
        value={content}
      />
      <span className="checkmark"></span>
      {content}
    </label>
  );
}

Checkbox.propsTypes = {
  content: PropTypes.string,
  checked: PropTypes.bool,
  handleOptionChange: PropTypes.func,
  handleOptionClick: PropTypes.func,
};

export default Checkbox;
