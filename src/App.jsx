import { useState } from "react";
import Form from "./UI/Form";
import Header from "./UI/Header";
import Output from "./UI/Output";

export default function App() {
  const [info, setInfo] = useState({
    image: null,
    view: null,
    name: "Stephen Adewale",
    github: "@demostephen",
    email: "codewithme.stephen@gmail.com",
  });
  function handleInfo([id, value]) {
    setInfo({
      ...prev,
      id: [value],
    });
  }
  return (
    <>
      <Header data={info} />
      {info.view ? <Output data={info} /> : <Form />}
    </>
  );
}
