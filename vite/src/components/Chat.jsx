import {useState, useContext, useEffect} from 'react';
import {UserContext} from '../user/UserContext';
import {addDoc, collection, getDocs, orderBy, query} from 'firebase/firestore';
import {db} from '../FireBaseConfig';

function Chat() {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-100px',
    gap: '1em',
  };
  const {user} = useContext(UserContext);
  const [inputValue, setInputValue] = useState('');
  const [existingMessages, setExistingMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      author: user.email,
      date: Date.now(),
      text: inputValue,
    };
    // console.log("my message", newMessage);
    try {
      const docRef = await addDoc(collection(db, 'chat'), newMessage);
      console.log('Document written with ID: ', docRef.id);
      setInputValue('');
      alert('document added');
      const msgToAdd = {
        ...newMessage,
        id: docRef.id,
      };
      setExistingMessages([...existingMessages, msgToAdd]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getChatDocs = async () => {
      // const querySnapshot = await getDocs(collection(db, "chat"));
      const q = query(collection(db, 'chat'), orderBy('date'));
      const querySnapshot = await getDocs(q);
      console.log('querySnapshot', querySnapshot);
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        messagesArray.push({id: doc.id, ...data});
      });
      setExistingMessages(messagesArray);
      console.log('messagesArray:', messagesArray);
    };
    getChatDocs().catch((e) => console.log(e));
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={{}}>Chat</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          // width: 300,
          backgroundColor: 'purple',
          // overflow: 'scroll',
          color: 'purple',
          width: '300px',
          padding: '15px',
          margin: '10px',
          height: '90%',

          borderRadius: '10px',

          // width: 300,
          overflow: 'auto',
        }}>
        {existingMessages.map((msg) => {
          return (
            <div
              key={msg.id}
              style={{
                border: 'solid 1px black',
                backgroundColor: 'aquamarine',
                color: 'purple',
                padding: ' 1em',
              }}>
              <h5>{msg.author}</h5>
              <i>{msg.date}</i>
              <p style={{color: 'purple'}}> {msg.text}</p>
            </div>
          );
        })}
      </div>
      <form onSubmit={(e) => void handleSubmit(e)} style={containerStyle}>
        <textarea
          style={{
            backgroundColor: 'aquamarine',
            width: '350px',
            height: '150px',
          }}
          placeholder='chat'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          style={{
            backgroundColor: 'aquamarine',
            color: 'purple',
            width: '150px',
            padding: '15px',
            margin: '10px',
            borderRadius: '10px',
          }}
          type='submit'>
          Send message
        </button>
      </form>
    </div>
  );
}

export default Chat;
