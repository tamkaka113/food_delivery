import { Button } from "@material-ui/core";
import { AuthContexts } from "contexts/AuthContext";
import "./styles.scss";

export default function Dialog(props) {
  const { favorite, setFavorite } = props;
  const { loginWithRedirect } = AuthContexts();

  const hideDialog = () => {
    setFavorite(false);
  };

  return (
    <div className={favorite ? "dialog show" : "dialog "}>
      <div onClick={hideDialog} className="dialog__overlay"></div>
      <div className="dialog__wrapper">
        <h2 className="dialog__title">Join with us 🚀</h2>
        <p className="dialog__description">
          You are not signed in. Please sign in to use this feature!
        </p>
        <div className="dialog__btns">
          <Button onClick={hideDialog} className="dialog__btn">
            Cancle
          </Button>
          <Button
            onClick={loginWithRedirect}
            variant="contained"
            color="primary"
            className="dialog__btn"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
