import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Title, Text, Paragraf } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { WebDesc, WebDescTitle } from "../../../data"
import Spacer from "../Spacer/spacer"

export default function DescPage() {
    return (<>
        <Paragraf width={'300px'} title={'Lorem Header'}>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content.
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