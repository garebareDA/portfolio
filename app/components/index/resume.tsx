import { Card, Text, Link } from "@nextui-org/react"

export function Resume() {
  return (
    <>
      <Card css={{
        mw: "600px",
        bgBlur: "#ffffff"
      }}>
        <Card.Header>
          <Text color="white" h3>Resume</Text>
        </Card.Header>

        <Card.Body>
          <Link
            href="https://garebare.notion.site/garebare/3c37ea98234f4c8cba7b95ff2f8ae2b4"
            icon
            target="_blank"
            rel="noopener noreferrer">
            Notion
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}