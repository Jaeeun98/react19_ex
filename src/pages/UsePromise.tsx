import { useState } from "react";
import { use, Suspense } from "react";

// api
export const fetchMessage = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, "⚛️"));
};

const Message = ({ messagePromise }) => {
  // use로 Promise 참조
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
};

// Suspense는 반드시 promise 바깥에서 감싸야 함
const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
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
