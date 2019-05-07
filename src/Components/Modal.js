import React from "react"


import Modal from 'react-bootstrap/Modal'


class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true,
    };
  }
handleShow(){
  this.setState({show: true}) 
}

  handleClose(){
    this.setState({show: false}) 
  }


  render() {
    return (
      <>
      
        <Modal show={this.state.show}  onHide={this.handleClose}>
          <Modal.Header closeButton onHide={this.handleShow}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
         
        </Modal>
      </>
    );
  }
}

export default Example