import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const FirestoreServer = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = [];
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        data.push({
          userId: doc.id,
          username: userData.username,
          images: userData.images || []
        });
      });

      setUserData(data);
      console.log(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Images from Firestore</h1>
      {userData.map((user, index) => (
        <div key={index}>
          <h2>User ID: {user.userId}</h2>
          <h3>Username: {user.username}</h3>
          <div className="image-container">
            {user.images.map((image, i) => (
              <div key={i} className="image-wrapper">
                <img src={image.url} alt={`Image ${i}`+0} height={100} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirestoreServer;
