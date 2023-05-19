import React from "react"
import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Title, Text, Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { WebDesc, WebDescTitle } from "../../../data"
import Spacer from "../Spacer/spacer"


DescPage.defaultProps = {
    text: "&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

type DescPageProps = {
    text?: string,
}

export default function DescPage(props: DescPageProps) {
    return (<>
        <Paragraf width={'300px'} title={'Penelitian Parfum Pria'}>
            {props.text}
        </Paragraf>
        <Spacer y={"100px"} />
        <Box reverse={"true"}
        // width="100%"
        >
            <Title
                reverse={"true"}
                style={{
                    alignSelf: 'left',
                }}>
                {WebDescTitle}
            </Title>
            <Text reverse={"true"}
                style={{
                    alignSelf: 'left',
                    textAlign: 'left',
                }}
            >
                {WebDesc}
            </Text>
        </Box>
    </>
    )
}