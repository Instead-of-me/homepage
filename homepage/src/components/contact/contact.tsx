import {
    Center,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";
import { MdContentCopy } from "react-icons/md";

export default function Contact() {
    const currentLanguage = useRecoilValue(languageState);
    const toast = useToast();

    function onClickKakaoPlusChannel() {
        window.open("http://pf.kakao.com/_aSGjG", "Instead of me", "popup=yes");
    }

    async function onClickCopy() {
        try {
            await window.navigator.clipboard.writeText(
                "insteadofme.yuhyeon@gmail.com"
            );
            toast({
                status: "success",
                title: LANGUAGE[currentLanguage]["복사가 완료되었습니다."],
            });
        } catch (error: any) {
            toast({
                status: "error",
                title: LANGUAGE[currentLanguage]["복사에 실패하였습니다."],
                description:
                    LANGUAGE[currentLanguage]["문제가 발생하였습니다."],
            });
        }
    }

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack mt="-200px">
                <Heading
                    fontSize="80px"
                    fontWeight="extrabold"
                    color="green.400"
                >
                    Contact US
                </Heading>

                <Text mt="100px" fontWeight="bold" fontSize="20px">
                    {
                        LANGUAGE[currentLanguage][
                            "협업문의는 아래 비즈니스이메일 또는 카카오톡 플러스친구 채널을 통해 연락주세요."
                        ]
                    }
                </Text>

                <VStack mt="50px">
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            Business Email:
                        </Text>
                        <Text>insteadofme.yuhyeon@gmail.com</Text>
                        <Icon
                            onClick={onClickCopy}
                            as={MdContentCopy}
                            color={"green.400"}
                            _hover={{
                                cursor: "pointer",
                            }}
                        />
                    </HStack>
                    <HStack>
                        <Text fontWeight="bold" color="green.400">
                            {
                                LANGUAGE[currentLanguage][
                                    "카카오톡 플러스친구 채널:"
                                ]
                            }
                        </Text>
                        <Text
                            onClick={onClickKakaoPlusChannel}
                            cursor={"pointer"}
                            _hover={{
                                textDecoration: "underline",
                            }}
                        >
                            @insteadofme(야, 해줘)
                        </Text>
                    </HStack>
                </VStack>
            </VStack>
        </Center>
    );
}
