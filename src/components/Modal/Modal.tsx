import { ReactNode } from "react";
import { useGlobalSettings } from "../../hooks/useGlobalSettingsHook";
import "./Modal.css"

const Modal = ({ children }: { children: ReactNode | undefined }) => {
    const { isDarkMode, isModalDisable, toggleModalShow } = useGlobalSettings();

    //let timeout: number;


    if(!isModalDisable){

        
        /*timeout = setTimeout(() => {
            toggleModalShow()
        }, 10000)
        */
        return(
            <>
            <div className={`modal-background ${isModalDisable ? `disable` : ``}`}>
                <div className={`modal ${isDarkMode ? '' : 'light'} ${isModalDisable ? 'disable' : ''}`}
                    onClick={() => //clearTimeout(timeout)
                        {}  
                    }
                >
                    <div className="modal-header">
                        <button className="exit-button"
                            onClick={() => toggleModalShow()}
                        >
                            X
                        </button>
                    </div>
                    <div className="modal-content">
                        {children ? children : `not defined children`}
                    </div>
                </div>
            </div>
            </>
        )
    }


}

export default Modal
