import { useState } from "react";
import styled from "styled-components";

function App() {
  const [title, setTitle] = useState([
    "캠핑 어디로 갈래?",
    "백패킹 어디로 갈래?",
    "글램핑 어디로 갈래?",
  ]);

  return (
    <Wrap>
      <Navy>
        <p>개발 Blog</p>
      </Navy>
      <List>
        <Title>{title[0]}</Title>
        <Date>날짜</Date>
      </List>
      <Line />
      <List>
        <Title>{title[1]}</Title>
        <Date>날짜</Date>
      </List>
      <Line />
      <List>
        <Title>{title[2]}</Title>
        <Date>날짜</Date>
      </List>
      <Line />
    </Wrap>
  );
}

const Wrap = styled.div`
  text-align: left;
`;

const Navy = styled.div`
  background-color: black;
  color: white;
  height: 40px;
  line-height: 40px;
  margin: 0 0 20px 0;
`;

const List = styled.div`
  color: darkcyan;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 0px;
`;

const Line = styled.hr`
  width: 400px;
  margin-left: 0px;
  margin-right: 0px;
`;

const Date = styled.p`
  font-size: 26px;
  display: inline;
`;

export default App;
