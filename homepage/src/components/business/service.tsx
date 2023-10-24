import { Box, Center, HStack, Heading, Image, VStack } from "@chakra-ui/react";
import { languageState } from "../../global/project_common";
import { useRecoilValue } from "recoil";
import LANGUAGE from "../../global/language";

export default function Service() {
    const currentLanguage = useRecoilValue(languageState);

    const android =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/android_icon.png?raw=true";
    const ios =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/ios_icon.png?raw=true";
    const ts =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/typescript_icon.png?raw=true";
    const react =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/react_icon.png?raw=true";
    const python =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/python_icon.png?raw=true";
    const selenium =
        "https://github.com/jh0152park/instead_of_me_homepage/blob/main/images/tech-stack_logos/selenium_icon.png?raw=true";

    return (
        <Center w="100%" h="1000px" color="black" bgColor="whitesmoke">
            <VStack>
                <Heading fontSize="50px" mb="200px">
                    Our Services
                </Heading>
                <HStack gap="150px">
                    <VStack id="app">
                        <HStack>
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={android}
                            />
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={ios}
                            />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>Cross Platform Applications</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {
                                        LANGUAGE[currentLanguage][
                                            "효율적인 프레임워크를 사용해 iOS 및 Android에서 모두 동작하는 고품질의 어플리케이션을 개발하고 제공합니다."
                                        ]
                                    }
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>

                    <VStack id="web">
                        <HStack>
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={ts}
                            />
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={react}
                            />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>Web Site</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {
                                        LANGUAGE[currentLanguage][
                                            "PC 및 Mobile에서 모두 사용가능한 고품질의 Web사이트를 개발하고 제공합니다."
                                        ]
                                    }
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>

                    <VStack id="rpa">
                        <HStack>
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={python}
                            />
                            <Image
                                w="150px"
                                h="150px"
                                objectFit="cover"
                                src={selenium}
                            />
                        </HStack>
                        <Center mt="50px">
                            <VStack>
                                <Heading>RPA</Heading>
                                <Box w="450px" fontWeight="bold">
                                    {
                                        LANGUAGE[currentLanguage][
                                            "휴먼에러를 야기하는 단순하고 반복적인 업무를 자동화 합니다. 웹크롤링, 웹자동화을 비롯해 핵심적인 업무툴인 엑셀 자동화를 통해 업무의 효율을 대폭 높힐수 있습니다."
                                        ]
                                    }
                                </Box>
                            </VStack>
                        </Center>
                    </VStack>
                </HStack>
            </VStack>
        </Center>
    );
}
