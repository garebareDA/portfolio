import React from "react";
import { Card, Text, Row, Spacer } from "@nextui-org/react";

type Props = {
  name: string;
  list: string[];
};

export const Profile:React.VFC<Props> = ({name, list}:Props) => {
  return(
    <Card css={{mw:"600px"}}>
      <Text size={24}>{name}</Text>
      <Spacer y={1} />
      {list.map((l, i) => {
        return(
          <Row key={i} justify="center">
            <Text size={16}>{l}</Text>
          </Row>
        );
      })}
    <Spacer y={1} />
    </Card>
  );
};

export const Education:React.VFC = () => {
  const list:string[] = [
    "2017-N高等学校",
    "2020-サイバー大学"
  ];
  return(
    <Profile list={list} name={"Education"}></Profile>
  );
};

export const Language:React.VFC = () => {
  const language:string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "Rust",
    "Unity C#"
  ];
  return(
    <Profile list={language} name={"Programing Language"}></Profile>
  );
};

export const ParticipantEvent:React.VFC = () => {
  const event = [
    "DeNAオータムハッカソン2021"
  ];
  return(
    <Profile list={event} name={"Participant Event"}></Profile>
  );
};