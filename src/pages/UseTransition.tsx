import React, { useState, useTransition } from "react";

const updateCount = async (count: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(count + 1), 2000);
  });
};

const UseTransition = () => {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    // 상태 업데이트를 트랜지션으로 처리
    const newCount = await updateCount(count);
    startTransition(async () => {
      setCount(newCount);
      // startTransition(() => {

      // });
    });
  };

  console.log("usePending", isPending);

  return (
    <div>
      <h1>useTransition</h1>
      <h2>Count: {count}</h2>

      <button onClick={handleClick} disabled={isPending}>
        Increment
      </button>

      {isPending ? "로딩 중..." : "카운트 증가"}
    </div>
  );
};

export default UseTransition;
