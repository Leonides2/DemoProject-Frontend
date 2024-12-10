import { ReactNode } from "react";
import { useGlobalSettings } from "../../hooks/useGlobalSettingsHook";
import "./Modal.css"

const Modal = ({children}:{children: ReactNode}) =>{
    const { isDarkMode, isModalShow , toggleModalShow} = useGlobalSettings();


    return(
        <>
            <div className={`modal ${isDarkMode ? '' : 'light'} ${isModalShow ? 'active' : ''}`}>
                <div className="modal-header">
                    <button className="exit-button"
                        onClick={()=>toggleModalShow()}
                    >
                        X
                    </button>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>        
        </>
    )
}

export default Modal