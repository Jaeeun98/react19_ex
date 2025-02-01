//잘못된 사용 예시 - 제어된 입력 state 경우
import { useState, useTransition } from "react";

const updateCount = async (v: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(v), 2000);
  });
};

const UseTransitionInput = () => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = async (e) => {
    startTransition(async () => {
      const v = e.target.value;

      const newValue = await updateCount(v);
      startTransition(() => {
        setValue(newValue);
      });
    });
  };

  return (
    <div>
      <h1>useTransitionInput </h1>
      <input type="text" value={value} onChange={handleChange} />
      {isPending ? "로딩 중..." : "입력 완료"}
    </div>
  );
};

export default UseTransitionInput;
