import React, { useEffect, useState } from "react";
import {
  Create,
  ImageOutlined,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";
import {
  collection,
  getDocs,
  query,
  addDoc,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
function Feed() {
  const user=useSelector(selectUser);
  const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const queryData=query(collection(db,"posts"),orderBy('createdAt','desc'));
      const data = await getDocs(queryData);
      console.log(data);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id ,data:doc.data()})));
    };
    getPosts();
  },[]);

  const sendPost = async (e) => {
    e.preventDefault();
    setInput("");
    await addDoc(postsRef,{name:user.displayName,description:user.email,message:input,photoUrl:"",createdAt:serverTimestamp()});
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageOutlined} title="Photo" color="70B5F9" />
          <InputOptions Icon={Subscriptions} title="Video" color="E7A33E" />
          <InputOptions Icon={EventNote} title="Event" color="C0CBCD" />
          <InputOptions
            Icon={CalendarViewDay}
            title="Write Article"
            color="7FC15E"
          />
        </div>
      </div>

      {/* POSTS */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
