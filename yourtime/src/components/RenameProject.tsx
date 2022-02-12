import React, {useState} from 'react'
import ProjectForm from './ProjectForm'

function RenameProject({project, setShowModal}: any){
    const [newProjectName, setNewProjectName] = useState(project.name)

    function handleSubmit(e:any){

    }

    return (
        <div className='RenameProject'>
            <ProjectForm
                handleSubmit={handleSubmit}
                heading='Edit project name!'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameProject