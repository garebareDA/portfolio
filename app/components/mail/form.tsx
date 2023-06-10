import React, { useState } from "react";
import { Row, Textarea, Input, Spacer, Card, Button, Text } from "@nextui-org/react";

type Props = {
  mailKey: string
}

export const Form: React.VFC<Props> = ({ mailKey }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  const [isSendError, setIsSendError] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const postEmail = () => {
    if (name !== "" && email !== "" && message !== "" && regex.test(email) === true) {
      fetch(`https://maker.ifttt.com/trigger/${mailKey}`, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `value1=${name}&value2=${email}&value3=${message}`
      }).then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setIsSendError(false);
        setIsSend(true);
      }).catch((e) => {
        setIsSendError(true);
        setIsSend(false);
      });
    }
  };

  return (
    <Card css={{
      mw: "600px",
      bgBlur: "#ffffff"
    }}>
      <Row justify="center">
        <Text color="white">返信はgmailから行われます。</Text>
      </Row>
      <Row justify="center">
        <Text color="white">直接問い合わせる場合はTwitterまたは各種SNSにお願いします。</Text>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Input
          status="default"
          placeholder="name"
          aria-label="name"
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
          placeholder="address"
          aria-label="address"
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
          status="default"
          placeholder="message"
          aria-label="message"
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
      <Spacer y={1} />
      <Row justify="center">
        {isSendError && <Text color="error">送信に失敗しました</Text>}
        {isSend && <Text color="white">送信しました</Text>}
      </Row>
    </Card>
  );
};