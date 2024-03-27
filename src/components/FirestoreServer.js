import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
// import Modal from './Modal'; // Import your modal component
import Table from 'react-bootstrap/Table'; // Import the Table component
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FirestoreServer = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchUserData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = [];
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        data.push({
          userId: doc.id,
          username: userData.username,
          images: userData.images || [],
          predictions: userData.predictions || [],
          timestamp:userData.timestamp,
        });
      });

      setUserData(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    console.log(selectedUser);
    handleShow();
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Users from Firestore</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>No. of Predictions</th>
            <th>User Name</th>
            <th>Last Visited</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} onClick={() => handleRowClick(user)} style={{ cursor: 'pointer' }}>
              <td>{user.userId}</td>
              <td>{user.images.length}</td>
              <td>{user.username==null?"User"+user.userId:user.username}</td>
              <td>{new Date(user.timestamp * 1000).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedUser && (
        <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser.userId}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Message Id</th>
            <th>Predicted Class</th>
            <th>Confidence</th>
            <th>Uploaded Image</th>
          </tr>
        </thead>
        <tbody>
          {selectedUser.images.map((user, index) => (
            <tr key={index} style={{ cursor: 'pointer' }}>
              <td>{user.message_id}</td>
              <td>{user.predicted_class}</td>
              <td>{user.confidence}</td>
              <td><img src={user.url} height={200}/></td>
            </tr>
          ))}
        </tbody>
      </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      )}
    </div>
  );
};

export default FirestoreServer;
