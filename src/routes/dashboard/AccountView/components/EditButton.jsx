import { useState } from 'react';
import style from './EditButton.module.css';

const EditButton = ({ sendInputup, dataRequired }) => {

    const [isInputShown, setIsInputShown] = useState(false);
    const [inputs, setInputs] = useState({}); // [inputs, setInputs]

    console.log(inputs);
    
    const saveChanges = () => {
        setIsInputShown(false);
        sendInputup(inputs);
    }
    
    if(dataRequired === undefined) return (<></>);
    
    return (<>

        <button className={style.editButton} onClick={() => {setIsInputShown(true)}}>
            <span className="material-symbols-outlined">edit</span>
        </button>

        {isInputShown &&

        <div className={style.modalContainer}>
            <div className={style.modal}>
                <span onClick={() => {setIsInputShown(false)}} className={"material-symbols-outlined " + style.close}>close</span>

                {Object.keys(dataRequired).map((key) => {
                    return (
                        <div key={key}>
                            <label>{dataRequired[key]["fullname"]}: </label>
                            <input className={style.inputField} onChange={ (e) => {setInputs({...inputs, [key]: e.target.value})}}type="text" />
                        </div>
                    );
                })}

                <button className={style.saveButton} onClick={saveChanges}> <span className="material-symbols-outlined">save</span> </button>
            </div>
        </div>}
    </>);
};

export default EditButton;