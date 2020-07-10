import React from 'react';
import Modal from 'react-modal';
import './ProjectModal.css';
import ProjectExamplesWithModal from './ProjectExamplesWithModal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'    
    }
  };

  function ProjectModal(props){
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }
   
    function closeModal(){
      setIsOpen(false);
    }
   
 
     

  
      return (
        <div id="modalContainer">
          <div onPointerOver ={openModal}>About App</div>
          <Modal  id="fullModalDiv"
            isOpen={modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <button id="modalCloseBtn" onClick={closeModal}>X</button>
            <div id="modalTitle">{props.name}</div>
            <div  id="">     
              <div className="projectTechStack">{props.techStack}</div> <br/>
              <div className="projectDesc">{props.projectDesc}</div><br/>
              <div className="githubLink">{props.githubLink}</div>
            </div>

            
          </Modal>
        </div>
      );
  }
   
  export default ProjectModal;