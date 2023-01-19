import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsFillArchiveFill,
  BsFillBarChartFill,
} from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './pages.scss';

function ProfessorScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { professorId } = location.state;
  const [professor, setProfessor] = useState({});
  const [activities, setActivities] = useState([]);
  const [show, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('');
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [updateActivity, setUpdateActivity] = useState({});
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updateDate, setUpdateDate] = useState('');
  const [updateDuration, setUpdateDuration] = useState('');

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

  const handleUpdateModalOpen = (activity) => {
    setUpdateActivity(activity);
    setUpdateTitle(activity.title);
    setUpdateDescription(activity.description);
    setUpdateDate(activity.date);
    setUpdateDuration(activity.duration);
    setUpdateModalShow(true);
  };

  const handleUpdateModalClose = () => {
    setUpdateModalShow(false);
  };

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

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`http://localhost:5001/api/activities/${updateActivity.id}`, {
      title: updateTitle,
      description: updateDescription,
      date: updateDate,
      duration: updateDuration
    })
    .then((response) => {
      handleModalClose();
      handleUpdateModalClose();
      axios.get('http://localhost:5001/api/activities')
        .then((res) => {
          setActivities(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleUpdateTitleChange = (event) => {
    setUpdateTitle(event.target.value);
  };

  const handleUpdateDescriptionChange = (event) => {
    setUpdateDescription(event.target.value);
  };

  const handleUpdateDateChange = (event) => {
    setUpdateDate(event.target.value);
  };

  const handleUpdateDurationChange = (event) => {
    setUpdateDuration(event.target.value);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    axios
      .post('http://localhost:5001/api/activities', {
        professorId,
        title,
        description,
        date,
        duration,
      })
      .then((response) => {
        setTitle('');
        setDescription('');
        setDate('');
        setDuration('');
        setActivities([...activities, response.data.data]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStatistics = () => {
    navigate('/statistics');
  };

  const handleViewFeedback = (activityId) => {
    navigate(`/activities/${activityId}/feedback`, {state: { activityId }});
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
            <PerfectScrollbar>
              {activities.map((activity) => (
                <tr key={activity.id}>
                  <td className="container-activity-title">{activity.title}</td>
                  <td>
                    <td className="container-buttons">
                      <Button
                        className="btn-feedback"
                        onClick={() => handleViewFeedback(activity.id)}
                      >
                        <span>View Feedback</span>
                      </Button>
                      <Button
                        className="btn-table"
                        variant="warning"
                        onClick={() => handleUpdateModalOpen(activity)}
                      >
                        <BsFillPencilFill />
                      </Button>
                      <Button
                        className="btn-table"
                        variant="danger"
                        onClick={() => handleDelete(activity.id)}
                      >
                        <BsFillTrashFill />
                      </Button>
                    </td>
                  </td>
                </tr>
              ))}
            </PerfectScrollbar>
          </tbody>
        </Table>
        <Modal show={updateModalShow} onHide={handleModalClose} onExited={() => setUpdateModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Update Activity</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleUpdateSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={updateTitle}
                  onChange={handleUpdateTitleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={updateDescription}
                  onChange={handleUpdateDescriptionChange}
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="text"
                  className="form-control"
                  value={updateDate}
                  onChange={handleUpdateDateChange}
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={updateDuration}
                  onChange={handleUpdateDurationChange}
                />
              </div>
              <Button variant="primary" type="submit">
                Update Activity
              </Button>
            </form>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show} onHide={handleClose} onExited={() => setShowModal(false)}
        >
          <Modal.Header>
            <Modal.Title>
              <h2 className="modal-title-create">Create Activity</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-create-activity">
              <div className="section-head">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter title"
                    onChange={handleTitleChange}
                    value={title}
                  />
                </div>
                <div className="form-group">
                  <div className="text">
                    <label htmlFor="description">Description:</label>
                  </div>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    onChange={handleDescriptionChange}
                    value={description}
                  ></textarea>
                </div>
              </div>
              <div className="section-body">
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    onChange={handleDateChange}
                    value={date}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="duration">Duration (minutes):</label>
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    onChange={handleDurationChange}
                    value={duration}
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="button-create"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              className="button-create"
              variant="primary"
              onClick={() => {
                handleSubmit(event);
                setShowModal(false);
              }}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="container-btn">
          <Button
            className="button-create"
            variant="success"
            onClick={handleCreate}
          >
            <BsFillArchiveFill />
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProfessorScreen;