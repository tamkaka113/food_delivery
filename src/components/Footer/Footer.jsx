import "./styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <h5>&copy; {new Date().getFullYear()}</h5>
      <h5>All rights reserved</h5>
    </footer>
  );
}
