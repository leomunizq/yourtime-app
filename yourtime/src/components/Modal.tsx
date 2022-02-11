import React, {useRef} from 'react'

function Modal({children, showModal, setShowModal}: any){
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: any) => {
        if(e.target === modalRef.current){
            setShowModal(false)
        }
    }
    
    return (
        showModal &&
        <div className="Modal" ref={modalRef} onClick={closeModal}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Modal