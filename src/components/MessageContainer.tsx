"use client";

import { use, Suspense } from "react";

const Message = ({ messagePromise }) => {
  // use로 Promise 참조
  const messageContent = use(messagePromise);
  return <p>Here is the message: {messageContent}</p>;
};

const MessageContainer = ({ messagePromise }) => {
  return (
    <Suspense fallback={<p>⌛Downloading message...</p>}>
      <Message messagePromise={messagePromise} />
    </Suspense>
  );
};

export default MessageContainer;
