import React from "react";
import { Row, Textarea, Input, Spacer, Card, Button, Text } from "@nextui-org/react";
import { useEffect } from "react";

type Props = {
  mailKey: string
}

export const Form: React.VFC<Props> = ({ mailKey }: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  useEffect(() => {}, [name, ])

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
          placeholder="名前"
          aria-label="名前"
          css={{
            width: "100%",
            color: "white",
          }}></Input>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Input
          placeholder="メールアドレス"
          aria-label="メールアドレス"
          css={{
            width: "100%",
          }}></Input>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Textarea
          placeholder="本文"
          aria-label="本文"
          css={{
            width: "100%",
          }} rows={20}></Textarea>
      </Row>
      <Spacer y={2} />
      <Row justify="center">
        <Button onClick={() => {

        }}>
          <Text css={{
            color: "white"
          }} size="32">送る</Text>
        </Button>
      </Row>
    </Card>
  );
};