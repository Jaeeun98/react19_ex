import { use } from "react";
import { ThemeContext } from "../pages/Use";

// 테마를 사용하는 컴포넌트
const ThemeDisplay = () => {
  // use로 Context 참조
  const theme = use(ThemeContext);

  /*

  - if문 안에서 use로 Context 참조

  function HorizontalRule({ show }) {
    if (show) {
      const theme = use(ThemeContext);
      return <hr className={theme} />;
    }
    return false;
  }
  
  위 예시처럼 if문 안에서 use로 Context 참조하면 context 값에 따라서 원하는 컴포넌트를 렌더링할 수 있음

  if (theme) {
    const theme2 = use(ThemeContext);
    console.log(theme2);
  }
  
  */

  /* 
  
  - 컴포넌트 또는 훅 안에서만 참조해야 함 
  
  const test = () => { 
    if (theme) {
      const theme3 = use(ThemeContext);
      console.log(theme3);
    }
  }
  */

  return (
    <div>
      <p>현재 테마 : {theme}</p>
    </div>
  );
};

export default ThemeDisplay;
