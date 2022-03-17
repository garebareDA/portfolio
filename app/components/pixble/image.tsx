import React from "react";
import { Card, Grid } from "@nextui-org/react";

type Props = {
  src: string;
}

const contentImg: React.CSSProperties = {
  width: "700px",
  height: "100%",
};


export const Image: React.VFC<Props> = ({ src }: Props): React.ReactElement => {
  return (
    <Grid>
      <Card css={{
        bgBlur: "#ffffff",
      }}>
        <img src={"https://garebareda.github.io/portfolio/app/assets/images/image/" + src + ".webp"} style={contentImg}></img>
      </Card>
    </Grid>
  );
};