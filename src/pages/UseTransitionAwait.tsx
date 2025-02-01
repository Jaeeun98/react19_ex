/* 

  잘못된 사용 예시 - 이중 startTransition 
  
  await를 사용하여 비동기 작업을 처리할 때,
  startTransition을 중첩해서 사용해야 한다고 공식 문서에 나와 있음.
  실제로 테스트 해본 결과 하나의 startTransition으로 처리해도 문제가 없음
  이유가 무엇인지 아직 못찾아서, 좀 더 고민해봐야 할 것 같음
  
*/

import { useState, useTransition } from "react";

// 여러 비동기 작업을 시뮬레이션
const fetchUserData = async (id: number) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`User ${id}`), 3000);
  });
};

const fetchUserPosts = async (user: string) => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve([`${user}'s Post 1`, `${user}'s Post 2`]), 3000);
  });
};

// ❌ 문제가 있는 예시
const UseTransitionAwait = () => {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState("");
  const [userPosts, setUserPosts] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleFetch = () => {
    startTransition(async () => {
      // 첫 번째 비동기 작업
      const user = await fetchUserData(userId);
      setUserData(user); // ❌ 이 업데이트는 transition으로 처리되지 않을 수 있음

      // 두 번째 비동기 작업
      const posts = await fetchUserPosts(user);
      setUserPosts(posts); // ❌ 이 업데이트도 transition으로 처리되지 않을 수 있음

      setUserId((prev) => prev + 1); // ❌ 이것도 마찬가지
    });
  };

  return (
    <div>
      <h1>문제가 있는 useTransition 예시</h1>
      <button onClick={handleFetch} disabled={isPending}>
        다음 사용자 데이터 가져오기
      </button>
      {isPending ? (
        <div>로딩 중...</div>
      ) : (
        <div>
          <p>사용자: {userData}</p>
          <ul>
            {userPosts.map((post, index) => (
              <li key={index}>{post}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseTransitionAwait;
