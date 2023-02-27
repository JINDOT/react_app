
import { useState, useEffect } from "react";

function App() {
  // useState(*기본값*)
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  // submit event를 안할 경우 >> 저절로 페이지 새로고침
  const onSubmit = (event) => {
    // event => empty.
    // 어떠한 event를 명시하지 않으면 event 실행 X
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // 함수로 값을 보내줌
    // 함수의 첫 번째 argument로 현재 State로 보냄
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 저장한 data 값을 보내줌
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write to do"
        />
        <button>Add To Do</button>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="this zone is example">
        </input>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;

// map
//  : 하나의 Array에 있는 item을 내가 원하는 무엇으로 바꿔주는 역할
// toDos array를 가져와 item을 변형시켜 li 로 나오도록 만들어줌