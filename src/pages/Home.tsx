import { Flex, Heading } from "@chakra-ui/react";

export function HomePage() {

    return (
        <>

        <Flex justifyContent="center" alignItems="center" flexDirection="column">
            <Heading as="h1"  size="2xl">Welcome to WishUtilities</Heading>
            <Heading as="h2" size="lg">A collection of utilities for myself</Heading>
        </Flex>
        </>
    )
}