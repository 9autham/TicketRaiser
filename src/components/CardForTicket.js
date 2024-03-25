import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BasicExample({props}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    
    const notifysuccess=(message)=>{toast.success(message)}
    const notifywarning=(message)=>{toast.warning(message)}
    const deleteProblem = async (problemId) => {
        try {
          // Construct the reference to the problem document
          const problemRef = doc(db, 'Ticket', problemId);
          
          // Delete the problem document
          await deleteDoc(problemRef);
          setTimeout(() => window.location.reload(), 10000);
        } catch (error) {
          console.error('Error deleting problem:', error);
          notifywarning(error);
        }
      };
    const sendMessage = async () => {
        const BOT_TOKEN = '6932109006:AAGqQ5Fztmvg7piS7uywPhuR0nCyDYc6l1E';
        const USER_MESSAGE_ID = props.user_message_id; // Replace with the actual message ID of the user
        const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const agentName=document.getElementById("formName").value;
        const agentMessage=document.getElementById("formTextArea").value;
    
        try {
          await fetch(TELEGRAM_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: props.chat_id, // Replace with the chat ID of the user
              text: 'Hi this is '+agentName+' here,\n Solution: '+agentMessage, // Your reply message here
              reply_to_message_id: USER_MESSAGE_ID, // Tagging the user's message
            }),
          });
          notifysuccess("Message sent successfully")
        } catch (error) {
          console.error('Error sending message:', error);
          notifywarning(error);
        }
        setShow(false);
        deleteProblem(props.ticketId) 
      };
  return (
    <div className='mb-3' style={{ padding:'10px'}}>
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={props.image_url} height={300} width={300}/>
      <Card.Body>
        <Card.Title>Ticket : {props.ticketId}</Card.Title>
        <Card.Text>
          {props.problem_description}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Resolve</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Img variant="top" src={props.image_url} height={300} width={300}/>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the Agent"
                autoFocus
                controlId="formName"
                id='formName'
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} controlId="formTextArea" id='formTextArea'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendMessage}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="bottom-left"/>
    </div>
  );
}

export default BasicExample;
/*

ticketId: doc.id,
            image_url: ticket.image_url,
            problem_description: ticket.problem_description,
            user_message_id: ticket.user_message_id,
            username: ticket.username,
            timestamp: ticket.timestamp,
            chat_id: ticket.chat_id,
            user_id: ticket.user_id

*/