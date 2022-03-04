import React from "react";
import { Grid, Text } from "@nextui-org/react";
import { Link } from "remix";
import styled from "styled-components";
import jsts from "~/assets/images/cassette/JSTSCassette.webp"
import pixble from "~/assets/images/cassette/PIXBLECassette.webp"
import go from "~/assets/images/cassette/GOCassette.webp"
import rust from "~/assets/images/cassette/RustCassette.webp"
import unity from "~/assets/images/cassette/UnityCassette.webp"
import other from "~/assets/images/cassette/OtherCassette.webp"

type CassetteLink = {
  src:string,
  path:string,
};

const Cassette = styled.img({
  transitionDuration: "0.3s",
  transform: "scale(1)",
  ":hover": {
    transform: "scale(1.1)",
    transitionDuration: "0.3s",
  }
});

export const Products: React.VFC = () => {
  const cassettes: CassetteLink[] = [
    { src: jsts, path: "jsts"},
    { src: pixble, path: "pixble"},
    { src: go, path: "go"},
    { src: rust, path: "rust"},
    { src: unity, path: "unity"},
    { src: other, path: "other"},
  ];

  return (
    <Grid.Container justify="center" gap={2}>
      {cassettes.map((cassette, index) => {
        return (
          <Link to={cassette.path} key={index}>
            <Grid key={index}>
              <Cassette src={cassette.src} alt="" />
            </Grid>
          </Link>
        );
      })}
    </Grid.Container>
  );
};