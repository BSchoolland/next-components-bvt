import styles from "./toast.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useToasts } from './toastProvider';


const Toast = () => {
  const { toasts, removeToast } = useToasts();
  return (
    <TransitionGroup className={styles.toastContainer}>
      {toasts.map(toast => (
        <CSSTransition key={toast.id} timeout={1000} classNames={styles.toast}>
          <div className={styles.toast} onClick={() => removeToast(toast.id)}>
            {toast.content}
          </div>
        </CSSTransition>
      ))}
  </TransitionGroup>
  );
};

export default Toast;
