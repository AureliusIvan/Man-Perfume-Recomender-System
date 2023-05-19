import React from 'react'

type SpacerProps = {
    x?: string,
    y?: string,
}

export default function Spacer(props: SpacerProps) {
    // let i = props.size;
    return (
        <>
            <div style={{
                height: props.y,
                width: props.x
            }} />
        </>
    )
}
