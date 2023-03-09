import "./styles.scss";

export default function Checkbox(props) {
  const {
    value,
    content,
    checked,
    handleOnChange,
    handleFilterbyByPrice,
    handleOnSale,
  } = props;

  return (
    <label onClick={handleFilterbyByPrice} className="checkbox">
      <input
        onClick={handleOnSale}
        checked={checked}
        onChange={handleOnChange}
        className="checkbox__input"
        type="radio"
        name={value}
        value={content}
      />
      <span className="checkmark"></span>
      {content}
    </label>
  );
}
