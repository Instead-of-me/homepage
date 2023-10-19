import { Center, Box, VStack, Heading, Image } from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { styled } from "styled-components";

const BOX = styled(motion.div)`
    width: 1000px;
    height: 200px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default function Global() {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    const image =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/icons/earth2.png?raw=true";

    return (
        <Center
            w="100%"
            h="1000px"
            position="relative"
            color="black"
            bgColor="whitesmoke"
        >
            <BOX
                style={{
                    scale: scale,
                }}
            >
                <Image w="200px" h="200px" objectFit="cover" src={image} />
                <Box position="absolute" bottom="0">
                    <VStack spacing="0">
                        <Heading fontSize="10px">Wherever</Heading>
                        <Heading fontSize="10px">
                            Global Co-Work경험을 토대로 의뢰인의 국가, 시간을
                            뛰어넘습니다.
                        </Heading>
                    </VStack>
                </Box>
            </BOX>
        </Center>
    );
}