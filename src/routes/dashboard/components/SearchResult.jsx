
import styles from "./SearchResult.module.css";


function SearchResult({searchUserResults, onClick}) {

    if(Object.keys(searchUserResults).length === 0) return null;
    
    return (<div className={styles.searchResultContainer}>
        
        <div>
            <div>{searchUserResults["user"]["firstName"]} {searchUserResults["user"]["lastName"]} </div>
            <div className={styles.subtext}> {searchUserResults["user"]["email"]} </div>
            <div className={styles.subtext}>{searchUserResults["user"]["userName"]} </div>
        </div>

        <div className={styles.symbolContainer} onClick={onClick}>
            <div className="symbol">
                <span className="material-symbols-outlined">edit</span>
            </div>
        </div>


        
    </div>);
}

export default SearchResult;