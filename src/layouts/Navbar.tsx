import { Flex, chakra, Text } from '@chakra-ui/react'
import {Link, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";

export function Navbar() {

    const [currentActive, setCurrentActive] = useState<string|undefined>()

    const location = useLocation();

    useEffect(() => {
        setCurrentActive(location.pathname);
    }, [location.pathname]);

    const routes = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "MdToString",
            path: "/mdtostring"
        }
    ]
    return (
        <>
            <chakra.div
            >
                <chakra.nav
                    color={"text.base"}
                    padding={"1rem"}
                    position={"sticky"}
                    top={0}
                    zIndex={10}

                >

                    <Flex justifyContent="space-between" alignItems="center">
                        <chakra.h1>WishUtilities</chakra.h1>
                        <Flex
                            flexDir={"row"}
                            gap={4}
                        >
                            {routes.map((route) => {
                                return (
                                    <Text
                                        as={Link}
                                        to={route.path}
                                        key={route.name}
                                        cursor={"pointer"}
                                        transition="transform 0.3s ease-in-out, letter-spacing 0.2s ease-in-out, font-weight 0.2s ease-in-out, color 0.2s ease-in-out"
                                        letterSpacing={currentActive === route.path ? 'bold' : 'normal'}
                                        fontWeight={currentActive === route.path ? 'bold' : 'normal'}
                                    >
                                        {route.name}
                                    </Text>
                                )
                            })}
                        </Flex>
                    </Flex>

                </chakra.nav>
            </chakra.div>

        </>
    )
}