import { useState } from 'react';
import style from './EditButton.module.css';

const EditButton = ({ sendInputup, dataRequired, subjectFullName }) => {

    const [isInputShown, setIsInputShown] = useState(false);
    const [inputs, setInputs] = useState({}); // [inputs, setInputs]
    const [errorMessage, setErrorMessage] = useState('');

    const saveChanges = () => {
        sendInputup(inputs).then(() => {
            setIsInputShown(false);
        }).catch((error) => {
            console.log('error: ', error);
            setErrorMessage(error.response.data.code)
        });
    }
    
    if(dataRequired === undefined) return (<></>);
    
    return (<>

        <button className={style.editButton} onClick={() => {setIsInputShown(true)}}>
            <span className="material-symbols-outlined">edit</span>
        </button>

        {isInputShown &&

        <div className={style.modalContainer}>
            <div className={style.modal}>

                <div className={style.modalHeader}> 
                    <h2> Edit {subjectFullName} </h2>
                    <span onClick={() => {setIsInputShown(false); setErrorMessage('')}} className={"material-symbols-outlined " + style.close}>close</span>
                </div>

                {subjectFullName === 'Password'? <div> Send Reset Password Email</div> : null}

                {Object.keys(dataRequired).map((key) => {
                    return (
                        <div className={style.inputs} key={key}>
                            <label>{dataRequired[key]["fullname"]}: </label>
                            <input className={style.inputField} onChange={ (e) => {setInputs({...inputs, [key]: e.target.value})}}type="text" />
                        </div>
                    );
                })}

                <p className='error'> {errorMessage != '' ? errorMessage : null} </p>

                <div className={style.buttonContainer}> 
                    <button className={style.saveButton} onClick={saveChanges}> Submit </button>
                </div>
            </div>
        </div>}
    </>);
};

export default EditButton;