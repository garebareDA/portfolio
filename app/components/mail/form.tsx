import React, { useState } from "react";
import { Row, Textarea, Input, Spacer, Card, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";

type Props = {
  mailKey: string
}

export const Form: React.VFC<Props> = ({ mailKey }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const postEmail = () => {
    if (name !== "" && email !== "" && message !== "" && regex.test(email) === true) {
      console.log("send!");
      fetch(`https://maker.ifttt.com/trigger/${mailKey}`, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `value1=${name}&value2=${email}&value3=${message}`
      }).then(() => {
        setName("");
        setEmail("");
        setMessage("");
      }).catch((e) => {
        console.log(e);
      });
    }
  };

  return (
    <Card css={{
      mw: "600px",
      bgBlur: "#ffffff"
    }}>
      <Row justify="center">
        <Text color="white">返信はcontact@garebare.netから行われます。</Text>
      </Row>
      <Row justify="center">
        <Text color="white">直接問い合わせる場合はTwitterまたはcontact@garebare.netにお願いします。</Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Input
          status={isNameError ? "error" : "default"}
          placeholder="名前"
          aria-label="名前"
          css={{
            width: "100%",
            color: "white",
          }}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}></Input>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Input
          status={isEmailError ? "error" : "default"}
          placeholder="メールアドレス"
          aria-label="メールアドレス"
          helperColor="error"
          helperText={isEmailError ? "サポートされていない形式です" : ""}
          css={{
            width: "100%",
          }}
          value={email}
          onChange={(e) => {
            setIsEmailError(regex.test(email) === false);
            setEmail(e.target.value);
          }}></Input>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Textarea
          status={isMessageError ? "error" : "default"}
          placeholder="本文"
          aria-label="本文"
          css={{
            width: "100%",
          }}
          rows={20}
          value={message}
          onChange={
            (e) => {
              setMessage(e.target.value);
            }}></Textarea>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Button
          disabled={name === "" || email === "" || message === "" || regex.test(email) === false}
          onClick={() => {
            postEmail();
          }}>
            送る
        </Button>
      </Row>
    </Card>
  );
};