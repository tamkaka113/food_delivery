import React from "react";

import "./styles.scss";

export default function PrimaryButton(props) {
  const { children } = props;
  return <button className="primary-btn">{children}</button>;
}
