import React, {useState} from 'react'
import Modal from './Modal'
import ProjectForm from './ProjectForm'

import AddIcon from '@mui/icons-material/Add';

function AddNewProject(){
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState('')
    function handleSubmit(e:any){

    }

    return (
        <div className='AddNewProject'>
            <div className="add-button">
                <span onClick={() => setShowModal(true)}>
                    <AddIcon fontSize="large" />
                </span>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading='New project!'
                    value={projectName}
                    setValue={setProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='+ Add Project'
                />
            </Modal>
        </div>
    )
}

export default AddNewProject