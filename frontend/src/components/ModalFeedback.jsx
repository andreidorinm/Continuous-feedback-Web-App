import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalFeedback(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h1 className="modal-title">Feedback submitted successfully!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="feedback-success">
            <div className="tick-mark">
              <div className="wrapper">
                {' '}
                <svg
                  className="checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  {' '}
                  <circle
                    className="checkmark__circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />{' '}
                  <path
                    className="checkmark__check"
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <h2 className="modal-footer">
              Do you want to make another feedback?
            </h2>
            <Link to="/">
              <span className="text-return-to-activities">Return to Home</span>
            </Link>
            <Button className="button-close" onClick={props.onHide}>
              <span>Close</span>
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFeedback;
