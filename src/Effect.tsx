import { useState, useEffect } from "react";

function Effect() {
  // userEffect
  // userEffect는 리액트 컴포넌트가 랜더링될 때마다 작업을 수행하도록 설정 할 수 있는 Hook입니다.

  // - 마운트가 될 때만 실행하고 싶을 때
  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 랜더링 될 때만 실행하고,
  // 업데이트 될 때는 실행하지 않으려면 함수의 두 번쨰 파라미터로 빈 배열을 넣어주면 된다.

  // - 특정 값이 업데이터 될 떄만 실행하고 싶을 때
  // useEffect를 사용할 때, 특정 값이 변경 될 때만 호출하고 싶을 경우도 있다
  // useEffect의 두 번재 파라미터

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("컴포넌트가 랜더링 될 때마다 특정 작업을 수행합니다");
    console.log([name, nickname]);
  });

  useEffect(() => {
    console.log("마운트가 될 떄만 수행합니다");
    console.log([name, nickname]);
  }, []);

  useEffect(() => {
    console.log("name이라는 상태 값이 변할 경우에만 수행합니다");
    console.log("updated name: ", { name });
  }, [name]);

  // *cleanup 복습 요망
  useEffect(() => {
    console.log("뒷 정리하기");
    console.log("updated name: ", { name });

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <b>이름: </b> {name}
        <b>닉네임: </b> {nickname}
      </div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>{" "}
    </div>
  );
}

export default Effect;
