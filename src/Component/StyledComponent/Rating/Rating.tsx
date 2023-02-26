import { Rating } from "@mui/material"

export function CustomRating(props: any) {
    return (
        <Rating name="read-only" value={props.value}
            {...props} />
    )
}