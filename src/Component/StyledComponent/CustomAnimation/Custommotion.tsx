import { LazyMotion, m, domAnimation } from "framer-motion"

export function Custommotion(props: any) {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{
                    opacity: 0,
                    translateY: 50,
                }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                {...props}
            >
                {props.children}
            </m.div>
        </LazyMotion>
    )
}
