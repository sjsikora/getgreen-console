import style from "./BackButton.module.css";

const BackButton = ({handleBack}) => {

    return (
        <div onClick={handleBack}>
            <span className={"material-symbols-outlined " + style.backButton}> arrow_back </span>
        </div>
    );
};

export default BackButton;