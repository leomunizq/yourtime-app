import React, { useState } from 'react'
import Modal from './Modal'
import ProjectForm from './ProjectForm'
import { auth } from '../services/firebase'

import firebase from '../services/firebase'
import 'firebase/compat/firestore'

import AddIcon from '@mui/icons-material/Add'

function AddNewProject() {
  //state
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')

  //enviar-send
  function handleSubmit(e: any) {
    e.preventDefault()

    if (projectName) {
      const projectsRef = firebase
        .firestore()
        .collection(`projects ${auth.currentUser?.uid}`)

      projectsRef
        .where('name', '==', projectName)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            projectsRef.add({
              name: projectName
            })
          } else {
            alert('Project already exists!')
          }
        })
      setShowModal(false)
      setProjectName('')
    }
  }

  return (
    <div className="AddNewProject">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <AddIcon fontSize="large" />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading="New project!"
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText="+ Add Project"
        />
      </Modal>
    </div>
  )
}

export default AddNewProject
