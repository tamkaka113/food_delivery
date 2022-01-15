
import { Button } from "@material-ui/core";
import "./styles.scss";
export default function Dialog(props) {
  const { isShow, setIsShow } = props;

  const hideDialog = () => {
    setIsShow(false);
  };

  const moveToLogin = () => {
    setIsShow(false);
    
  };

  return (
    <div className={isShow ? "dialog show" : "dialog"}>
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
            onClick={moveToLogin}
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


