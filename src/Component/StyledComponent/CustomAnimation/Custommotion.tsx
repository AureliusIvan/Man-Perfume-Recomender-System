// [ Custom Motion Component ]
import { LazyMotion, m, domAnimation } from "framer-motion"

// main component
export function Custommotion(props: any) {
    return (
        // LazyMotion is a component that allows you to load Framer Motion's DOM animation features on demand.
        // This is useful if you're using Framer Motion on a page that doesn't need to animate on the initial render.
        <LazyMotion features={domAnimation}>
            {/* m.div is a component that allows you to animate DOM elements. it's simmilar to motion.div buat you need to use lazy motion */}
            <m.div
                onScroll={props.onScroll}
                initial={
                    props.initial ? props.initial :
                        {
                            opacity: 0,
                            translateY: 50,
                        }}
                animate={
                    props.animate ? props.animate :
                        {
                            opacity: 1,
                            translateY: 0,
                        }}
                transition={
                    props.transition ? props.transition :
                        {
                            duration: 0.3,
                        }}
                exit={props.exit}
                {...props}
            >
                {props.children}
            </m.div>
        </LazyMotion>
    )
}
