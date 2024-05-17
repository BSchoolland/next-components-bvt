import React, {createRef} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useToasts } from "./toastProvider";
import "./toast.css";


const Toast = () => {
  const { toasts, removeToast } = useToasts();
  return (
    <TransitionGroup className="toast-wrapper">
      {toasts.map((toast) => {
        const nodeRef = createRef();
        return (
          <CSSTransition key={toast.id} timeout={3000} classNames="toast" nodeRef={nodeRef}>
          <div ref={nodeRef} className="toast" onClick={() => removeToast(toast.id)}>
            {toast.content}
          </div>
        </CSSTransition>
      )})}
    </TransitionGroup>
  );
};

export default Toast;
