import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { SiMinutemailer } from "react-icons/si";
import Avatar from "./avatar";
import { useNavigate } from "react-router-dom";
import Widget from "./widget";
import { useRecoilValue } from "recoil";
import { languageState } from "../../global/project_common";
import LANGUAGE from "../../global/language";

export default function Phone({ clicked }: { clicked: boolean }) {
    const navigate = useNavigate();
    const currentLanguage = useRecoilValue(languageState);

    function onAskButtonClicked() {
        navigate("/contact");
    }

    return (
        <Box
            w="400px"
            h="700px"
            bgColor="whitesmoke"
            borderRadius="20px"
            position="absolute"
            right="50px"
            margin="auto"
            opacity={clicked ? "1" : "0"}
            transform={clicked ? `translateY(10px)` : ""}
            transition={"all 0.2s linear"}
            p="20px"
        >
            <Text fontWeight="bold" mb="70px">
                Instead of me, 야 해줘
            </Text>

            <HStack spacing={0} alignItems="flex-end">
                <Avatar size={50} border={false} hover={false} />
                <VStack alignItems={"flex-start"} ml="20px">
                    <Text fontSize="12px">Instead of me, 야 해줘</Text>
                    <Box
                        w="280px"
                        h="300px"
                        borderRadius="20px"
                        bgColor="gray.200"
                        p="15px"
                    >
                        <Text fontSize="15px" mb="20px">
                            {
                                LANGUAGE[currentLanguage][
                                    "관심 주셔서 감사합니다"
                                ]
                            }
                        </Text>
                        <Text fontSize="15px" mb="5px">
                            {
                                LANGUAGE[currentLanguage][
                                    "필요하신 모든걸 만들어 드립니다"
                                ]
                            }
                        </Text>
                        <Text fontSize="15px" mb="20px">
                            {LANGUAGE[currentLanguage]["더 큰 성장을 원합니다"]}
                        </Text>
                        <Text fontSize="15px" mb="50px">
                            {LANGUAGE[currentLanguage]["메일로 물어보세요"]}
                        </Text>

                        <VStack>
                            <Center
                                w="250px"
                                h="40px"
                                bgColor="green.300"
                                borderRadius="20px"
                                _hover={{
                                    cursor: "pointer",
                                    bgColor: "green.400",
                                }}
                                transition="all 0.2s linear"
                                onClick={onAskButtonClicked}
                            >
                                <Text
                                    fontSize="15px"
                                    fontWeight="bold"
                                    color="whitesmoke"
                                    mr="5px"
                                >
                                    {LANGUAGE[currentLanguage]["이메일보내기"]}
                                </Text>
                                <SiMinutemailer
                                    color="whitesmoke"
                                    size={"20px"}
                                />
                            </Center>
                            <Text fontSize="12px" color="black">
                                🕐 {LANGUAGE[currentLanguage]["24시간연중무휴"]}
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </HStack>

            <VStack mt="10px" alignItems="flex-start" ml="65px">
                <Widget
                    page={"home"}
                    size={250}
                    title={LANGUAGE[currentLanguage]["홈페이지둘러보기"]}
                />
                <Widget
                    page={"business"}
                    size={200}
                    title={LANGUAGE[currentLanguage]["기술스택궁금해요"]}
                />
                <Widget
                    page={"contact_us"}
                    size={180}
                    title={LANGUAGE[currentLanguage]["문의하고싶어요"]}
                />
                <Widget
                    page={"process"}
                    size={230}
                    title={LANGUAGE[currentLanguage]["제작과정궁금해요"]}
                />
                <Widget
                    page={"kakao"}
                    size={240}
                    title={LANGUAGE[currentLanguage]["카카오톡문의"]}
                />
            </VStack>
        </Box>
    );
}
