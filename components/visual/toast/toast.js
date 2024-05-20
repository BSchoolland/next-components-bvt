import React, { createRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useToasts } from "./toastProvider";
import styles from "./toast.module.css";  // Import as a module
// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
// More icons could be added here

const Icon = ({ type }) => {
  if (type === "success") {
    return (
      <i className={styles.toastIcon}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </i>
    );
  }
  else if (type === "error") {
    return (
      <i className={styles.toastIcon} >
        <FontAwesomeIcon icon={faExclamationCircle} />
      </i>
    );
  }
  else {
    return (<></>);
  }
}
/**
 * Toast component. Accepts all props a div would accept.
 */
const Toast = ({ ...rest }) => {
  const { toasts, removeToast } = useToasts();
  return (
    <TransitionGroup className={styles.toastWrapper}>
      {toasts.map((toast) => {
        const nodeRef = createRef();
        return (
          <CSSTransition
            key={toast.id}
            timeout={toast.transitionDuration}
            classNames={{
              enter: styles.toastEnter,
              enterActive: styles.toastEnterActive,
              exit: styles.toastExit,
              exitActive: styles.toastExitActive
            }}
            nodeRef={nodeRef}
          >
            <div
              ref={nodeRef}
              className={styles.toast}
              onClick={() => removeToast(toast.id)}
              style={{
                transition: `opacity ${toast.transitionDuration}ms, transform ${toast.transitionDuration}ms`
              }}
              {...rest}
            >
              <Icon type={toast.type}/>
              {toast.content}
              
              
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export default Toast;
