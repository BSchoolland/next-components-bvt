import { useContext } from 'react';
import DialogContext from './DialogContext';
// this component allows for the creation of a button that will open a modal dialog when clicked

/**
 * Button that opens a dialog when clicked.
 * @param {Object} props - The props object.
 * @param {Object} props.children - The children of the button.
 * @param {Object} props.dialog - The dialog component to open.
 */
function DialogButton({ children, ...rest }) {
    const dialogContext = useContext(DialogContext);

    const onClick = () => {
        dialogContext.openDialog();
    }

    return (
        <>
            <button onClick={onClick} {...rest}>
                {children}
            </button>
        </>
    );
}

export default DialogButton;