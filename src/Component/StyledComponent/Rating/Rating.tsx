import React from "react"
import { Rating } from "@mui/material"

interface CustomRatingProps {
    value?: number,
}

export function CustomRating(props: CustomRatingProps) {
    return (
        <Rating name="read-only" value={props.value}
            {...props} />
    )
}