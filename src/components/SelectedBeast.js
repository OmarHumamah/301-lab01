import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show}>
          <Modal.Header>{this.props.data.title}</Modal.Header>
          <Modal.Body>
            <Card.Img
              style={{ height: "18rem" }}
              variant="top"
              src={this.props.data.image_url}
            />
            <Card.Text>{this.props.data.description}</Card.Text>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.close}>close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
