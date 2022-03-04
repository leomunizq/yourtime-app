import React, {useState} from 'react'
import ProjectForm from './ProjectForm'

import firebase from '../services/firebase'
import 'firebase/compat/firestore'

function RenameProject({project, setShowModal}: any){
    const [newProjectName, setNewProjectName] = useState(project.name)



    const renameProject = (project:any, newProjectName:any)=> {
        const projectsRef = firebase.firestore().collection('projects')
        const todosRef = firebase.firestore().collection('todos')
        const {name: oldProjectName} = project

        projectsRef
        .where('name', '==', newProjectName)
        .get()
        .then( querySnapshot => {
            if(!querySnapshot.empty){
                alert('Project with the same name already exists!')

            }else{
                projectsRef
                .doc(project.id)
                .update({
                    name : newProjectName
                })
                .then(() => {
                    todosRef
                    .where('project', '==', oldProjectName)
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            doc.ref.update({
                                project: newProjectName
                            })
                        })
                    })
                })
            }
        })


    }




    function handleSubmit(e:any){
        e.preventDefault()

        renameProject(project, newProjectName)

        setShowModal(false)
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