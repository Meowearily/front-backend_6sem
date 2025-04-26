import { Button, CardBody, CardFooter, CardHeader, Heading, Input, Separator, Textarea, Card, Text } from "@chakra-ui/react";

export default function Note() {
    return(
        <Card.Root variant={"filled"}>
            <CardHeader>
                <Heading size={"md"}>Заметка</Heading>
            </CardHeader>
            <Separator variant={"solid"} colorPalette={"gray"}/>
            <CardBody>
                <Text>Текст заметки</Text>
            </CardBody>
            <Separator variant={"solid"}/>
            <CardFooter>Дата создания</CardFooter>
        </Card.Root>
    );
}