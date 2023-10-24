import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    Image,
    VStack,
} from "@chakra-ui/react";
import {
    motion,
    useAnimation,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import styled from "styled-components";

const GRID = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 100px;
`;

const GRID_ITEM = styled(motion.div)`
    width: 150px;
    height: 150px;
`;

const boxAnimation = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.3,
        },
    },
};

const itemAnimation = {
    start: {
        opacity: 0,
        y: -10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

export default function TechStack() {
    const android =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/android_icon.png?raw=true";
    const ios =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/ios_icon.png?raw=true";
    const html =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/html_icon.png?raw=true";
    const css =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/css_icon.png?raw=true";
    const js =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/javascript_icon.png?raw=true";

    const ts =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/typescript_icon.png?raw=true";
    const react =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/react_icon.png?raw=true";
    const react_native =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/reactnative_icon.png?raw=true";
    const dart =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/dart_icon.png?raw=true";
    const flutter =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/flutter_icon.png?raw=true";

    const nextjs =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/nextjs_icon.png?raw=true";
    const nodejs =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/nodejs_icon.png?raw=true";
    const django =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/django_icon.png?raw=true";
    const python =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/python_icon.png?raw=true";
    const selenium =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/selenium_icon.png?raw=true";

    const { scrollY } = useScroll();
    const trigger = useAnimation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 5000) {
            trigger.start("end");
        }
    });

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading fontSize="50px" mb="100px">
                    So, What's your skill?
                </Heading>

                <GRID variants={boxAnimation} animate={trigger} initial="start">
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={android}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={ios} />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={html} />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={css} />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={js} />
                    </GRID_ITEM>

                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={ts} />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={react}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={react_native}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image w="100%" h="100%" objectFit="cover" src={dart} />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={flutter}
                        />
                    </GRID_ITEM>

                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={nextjs}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={nodejs}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={django}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={python}
                        />
                    </GRID_ITEM>
                    <GRID_ITEM variants={itemAnimation}>
                        <Image
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            src={selenium}
                        />
                    </GRID_ITEM>
                </GRID>
            </VStack>
        </Center>
    );
}
