import React from "react";
import styled from "styled-components";

import noiseSVG from "../../../images/util/noise.svg";

type noise = {
    size: string;
    left: string;
    top: string;
}

const NoiseCircle = styled.div((pops: noise) => ({
    width: pops.size,
    height: pops.size,
    borderRadius: "600px",
    left: pops.left,
    top: pops.top,
    }),
{
        position: "absolute",
        zIndex: -1,
        filter: "contrast(-1%) brightness(1000%)",
        background: `linear-gradient(0deg, rgba(0,62,128,1), rgba(0,0,0,0.05)), url(${noiseSVG});`,
});



const Background: React.FC = () => {
    return (
        <div>
            <NoiseCircle size={"400px"} top={"5vh"} left={"40vw"}/>
            <NoiseCircle size={"250px"} top={"50vh"} left={"30vw"}/>
            <NoiseCircle size={"100px"} top={"70vh"} left={"60vw"}/>
        </div>
    )
}

export default Background;