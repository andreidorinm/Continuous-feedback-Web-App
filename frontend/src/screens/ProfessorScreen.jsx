import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsFillArchiveFill,
  BsFillBarChartFill
} from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import './pages.scss';

function ProfessorScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { professorId } = location.state;
  const [professor, setProfessor] = useState({});
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [updatedActivity, setUpdatedActivity] = useState({});

  useEffect(() => {
    if (professorId) {
      axios
        .get(`http://localhost:5001/api/professors/${professorId}`)
        .then((response) => {
          setProfessor(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    axios
      .get('http://localhost:5001/api/activities')
      .then((response) => {
        setActivities(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [professorId]);

  const handleDelete = (activityId) => {
    axios
      .delete(`http://localhost:5001/api/activities/${activityId}`)
      .then((response) => {
        setActivities(
          activities.filter((activity) => activity.id !== activityId)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (activityId) => {
    axios
      .put(`http://localhost:5001/api/activities/${activityId}`, {
        // data to be updated
      })
      .then((response) => {
        setUpdatedActivity(response.data.data);
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleCreate = () => {
    navigate('/create-activity');
  };

  const handleStatistics = () => {
    navigate('/statistics');
  };

  return (
    <>
      <h1>Welcome, {professor.name}</h1>
      <div className="container-activities">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <div className="container-activity-title">
                  <td>{activity.title}</td>
                </div>
                <td>
                  <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Activity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* form fields for updating activity */}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleModalClose}>
                        Close
                      </Button>
                      {/* <Button variant="primary" onClick={handleUpdateSubmit}>
                        Save Changes
                      </Button> */}
                    </Modal.Footer>
                  </Modal>
                  <div className="container-buttons">
                    <Button
                      className="button-update"
                      variant="warning"
                      onClick={() => handleUpdate(activity.id)}
                    >
                      <BsFillPencilFill />
                    </Button>
                    <Button
                      className="button-delete"
                      variant="danger"
                      onClick={() => handleDelete(activity.id)}
                    >
                      <BsFillTrashFill />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="container-btn">
          <Button
            className="button-create"
            variant="success"
            onClick={handleCreate}
          >
            <BsFillArchiveFill />
          </Button>
          <Button
            className="button-create"
            variant="success"
            onClick={handleStatistics}
          >
            <BsFillBarChartFill />
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfessorScreen;
