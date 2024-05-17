'use client';
import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToasts = () => useContext(ToastContext);


export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (content, options = {}) => {
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    setToasts([...toasts, { id, content, ...options }]);
    setTimeout(() => removeToast(id), options.duration || 5000);
  };

  const removeToast = id => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

