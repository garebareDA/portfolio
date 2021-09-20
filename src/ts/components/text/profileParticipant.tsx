import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
    marginBottom: "16px",
    fontSize: "56px",
    color: "white"
});

const Text = styled.div({
    fontSize: "30px",
    color: "white",
    marginLeft: "56px",
});

function ProfileParticipant() {
    return (
        <div>
            <Title>
                Participated Events
            </Title>

            <Text>DeNAオータムハッカソン2021</Text>
        </div>
    )
}

export default ProfileParticipant;