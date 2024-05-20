'use client';
import React, { createContext, useContext, useRef, useState } from 'react';

const ToastContext = createContext();

export const useToasts = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const toastTimeouts = useRef({}); // Store timeouts here

  const addToast = (content, options = {}) => {
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    if (!options.transitionDuration) {
      options.transitionDuration = 1000; // default transition duration
    }
    if (typeof options.duration === 'undefined') {
      options.duration = 4000; // default duration
    }
    else if (options.duration < 0) { // Ensure duration is not negative
      console.warn("Toast duration should not be negative. ");
    }
    const newToast = { id, content, ...options };

    setToasts(toasts => [...toasts, newToast]);

    // Clear any existing timeout for this toast if it exists (safety net)
    if (toastTimeouts.current[id]) {
      clearTimeout(toastTimeouts.current[id]);
    }

    // Set timeout to remove toast after duration
    toastTimeouts.current[id] = setTimeout(() => {
      removeToast(id);
      delete toastTimeouts.current[id]; // Cleanup reference
    // 4000 is the default duration if not specified
    }, (options.duration) + options.transitionDuration);
  };

  const removeToast = id => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
    if (toastTimeouts.current[id]) {
      clearTimeout(toastTimeouts.current[id]);
      delete toastTimeouts.current[id]; // Ensure cleanup
    }
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};
