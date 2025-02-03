import { useState } from "react";
import MessageContainer from "../components/MessageContainer";

// 비동기 처리를 위한 Promise 사용 예제
const fetchMessage = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
};

const UsePromise = () => {
  const [messagePromise, setMessagePromise] = useState(null);
  const [show, setShow] = useState(false);
  function download() {
    setMessagePromise(fetchMessage());
    setShow(true);
  }

  if (show) {
    return <MessageContainer messagePromise={messagePromise} />;
  } else {
    return <button onClick={download}>Download message</button>;
  }
};

export default UsePromise;
