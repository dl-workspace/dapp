import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Message from "./components/Message";
import Footer from "./components/Footer";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Form from "./components/Form";
import DataFetch from "./components/DataFetch";

export function About() {
  return (
    <>
      <Footer author="DeaLoux" year={new Date().getFullYear()} />
      <nav>
        <Link to="/">Close</Link>
      </nav>
    </>
  );
}

export function Login() {
  return (
    <>
      <Form />
      <Outlet />
      <nav>
        <Link to="/about">Super Nenec</Link>
      </nav>
    </>
  );
}

export function Fetch() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <DataFetch />
    </>
  );
}

export function State() {
  const [alertVisible, setAlertVisability] = useState(false);
  const [emotion, setEmotion] = useState("Happy");

  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <Button
        colour="primary"
        onClick={() => {
          setAlertVisability(true);
          setEmotion("Happy");
        }}
      >
        Happy
      </Button>
      <Button
        colour="danger"
        onClick={() => {
          setAlertVisability(true);
          setEmotion("Sad");
        }}
      >
        Sad
      </Button>
      {alertVisible && (
        <Alert onClose={() => setAlertVisability(false)}>{emotion}</Alert>
      )}
    </>
  );
}

export function Home() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <Message />
        <CheckBox />
      </div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <nav>
        <Link to="/">Log out</Link>
      </nav>
    </>
  );
}
