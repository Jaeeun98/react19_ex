import { useEffect, useState } from "react";
import { fetchMessage } from "./UsePromise";

const MessageContainer = ({ messagePromise }) => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    messagePromise.then((result) => {
      setMessage(result);
      setLoading(false);
    });
  }, [messagePromise]);

  if (loading) {
    return <p>⌛Downloading message...</p>;
  }

  return <p>Here is the message: {message}</p>;
};

const UsePrePromise = () => {
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

export default UsePrePromise;
