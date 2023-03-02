import { CustomBox as Box } from "../../../Component/StyledComponent/CustomBox/CustomBox"
import { Title, Text } from "../../../Component/StyledComponent/Typography/CustomTypography"
import { WebDesc, WebDescTitle } from "../../../data"

export default function DescPage() {
    return (<>
        <Box reverse
            // width="100%"
        >
            <Title reverse
                style={{
                    alignSelf: 'left',
                }}>
                {WebDescTitle}
            </Title>
            <Text reverse
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