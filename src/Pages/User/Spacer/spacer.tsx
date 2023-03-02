import React from 'react'

export default function Spacer(props: any) {
    // let i = props.size;
    return (
        <>
            <div style={{
                height: props.y,
                width: props.x,
            }} />
        </>
    )
}
