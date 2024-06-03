// components/modal-dialog/modal.js
// the main modal dialog component


import React, { createContext, useContext, useState } from "react";

function Modal({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return (
        <ModalContext.Provider value={{ isOpen, open, close }}>
            {children}
        </ModalContext.Provider>
    );
}

