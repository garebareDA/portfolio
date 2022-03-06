import React, { ReactElement } from "react";
import { Grid } from "@nextui-org/react";
import { Link } from "remix";
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

export const Products: React.VFC = () => {
  const cassettes: CassetteLink[] = [
    { src: jsts, path: "jsts"},
    { src: pixble, path: "pixble"},
    { src: go, path: "go"},
    { src: rust, path: "rust"},
    { src: unity, path: "game"},
    { src: other, path: "other"},
  ];

  return (
    <Grid.Container justify="center" gap={2}>
      {cassettes.map((cassette, index) => {
        return (
          <Link to={cassette.path} key={index}>
            <Grid key={index}>
              <Cassettes src={cassette.src}/>
            </Grid>
          </Link>
        );
      })}
    </Grid.Container>
  );
};

const Cassette:React.CSSProperties = {
  transitionDuration: "0.3s",
  transform: "scale(1)"
};

const CassetteHover:React.CSSProperties = {
  transform: "scale(1.1)",
  transitionDuration: "0.3s",
}

type CassettesProps = {
  src:string
}

const Cassettes:React.VFC<CassettesProps> = ({ src }:CassettesProps):ReactElement => {
  const [hover, setHover] = React.useState(false);
  return(
    <img src={src}
    alt=""
    onMouseOver={() => {setHover(true)}}
    onMouseOut={() => {setHover(false)}}
    style = {hover ? CassetteHover : Cassette}
    />
  );
}