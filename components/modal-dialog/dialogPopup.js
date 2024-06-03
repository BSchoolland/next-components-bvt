// components/modal-dialog/dialogPopup.js
// a component that creates a popup dialog

import React, { useContext } from 'react';
import DialogContext from './DialogContext';

/**
 * Popup dialog component.
 * @param {Object} props - The props object. 
 * @param {Object} props.children - The children of the dialog.
 * */

const DialogPopup = ({ children, ...rest }) => {
    const dialogContext = useContext(DialogContext);

    return (
        <>
            {dialogContext.isOpen && (
                <div className="dialog-popup-content" {...rest}>
                    {children}
                </div>
            )}
        </>
    );
};

export default DialogPopup;
