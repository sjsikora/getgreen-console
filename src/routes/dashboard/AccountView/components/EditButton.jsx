import { useState } from 'react';
import style from './EditButton.module.css';

const EditButton = ({ sendInputup }) => {

    const [isInputShown, setIsInputShown] = useState(false);
    const [textField, setTextField] = useState(''); // [textField, setTextField


    const handleClickEdit= () => {
        setIsInputShown(true);
    };
    
    const handleClose = () => {
        setIsInputShown(false);
    }

    const saveChanges = () => {
        setIsInputShown(false);
        sendInputup(textField);
    }
    

    if (!isInputShown) {
        return (
            <button className={style.editButton} onClick={handleClickEdit}>
                <span className="material-symbols-outlined">edit</span>
            </button>
        );
    }
    
    return (
        <div> 
            <span onClick={handleClose} className={"material-symbols-outlined " + style.close}>close</span>
            <input className={style.inputField} onChange={ (e) => {setTextField(e.target.value)}} type="text" />
            <button className={style.saveButton} onClick={saveChanges}> <span className="material-symbols-outlined">save</span> </button>
        </div>
    );
};

export default EditButton;