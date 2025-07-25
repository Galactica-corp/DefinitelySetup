import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  VStack,
  Progress,
  HStack,
  Box,
  Input,
  Button,
  Image,
  AspectRatio,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Heading,
  Spacer
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { StateContext } from "./context/StateContext";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { LogoIcon } from "./assets/LogoIcon";
import { Login } from "./components/Login";

const Layout: React.FC<React.PropsWithChildren<{}>> = () => {
  const { search, setSearch, loading, setLoading } = useContext(StateContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VStack alignSelf="stretch" width={"100%"}>
        <Progress
          size="sm"
          hasStripe
          width={"100%"}
          isIndeterminate={loading}
          minH={3}
          bgImage={
            "https://res.cloudinary.com/pse-qf-maci/image/upload/v1690230945/Banner_qb6zlf.png"
          }
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          colorScheme="pink"
        />
      </VStack>
      <VStack minHeight="100vh" spacing={0}>
        <HStack
          pb={2}
          pt={3}
          borderBottomWidth="1px"
          alignSelf="stretch"
          justifyContent="space-between"
          minH={"42px"}
          alignItems={"center"}
          px={8}
        >
          <HStack as={Link} to="/" spacing="24px">
            <LogoIcon w={5} h={5} />
            <Heading fontWeight={"normal"} fontSize={14}>
              Galactica Trusted Setup Ceremony
            </Heading>
          </HStack>
          <HStack spacing="24px" fontSize={14}>
            <ColorModeSwitch />
            <Login />
          </HStack>
        </HStack>
        <HStack
          alignSelf="stretch"
          justifyContent="space-between"
          px={4}
          alignItems={"center"}
          pb={5}
          pt={5}
          shadow="md"
        >
          <AspectRatio w="50px" maxH="50px" ratio={1 / 1} mx={4}>
            <Image
              filter="blur(0.2px)"
              borderRadius={"full"}
              boxSize="35px"
              objectFit="cover"
              src="https://res.cloudinary.com/pse-qf-maci/image/upload/v1690235895/Logodark-clean_qllutd.gif"
              alt="Logo"
            />
          </AspectRatio>
          <InputGroup className="tutorialSearchBar" minH="50px">
            <InputLeftElement pointerEvents="none" minH="50px">
              <Box as={FaSearch} w={4} h={4} color={"gray.600"} />
            </InputLeftElement>
            <Input
              minH="50px"
              borderColor={"transparent"}
              bg={"gray.100"}
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              borderRadius={0}
              fontSize={14}
              color={"gray.600"}
            />
            <InputRightElement width="6.5rem" minH="50px">
              <Button
                fontSize={14}
                width="6.5rem"
                variant="outline"
                borderRadius={0}
                borderColor={"transparent"}
                bg={"gray.800"}
                color={"gray.100"}
                minH="50px"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <Spacer minW={["15px", "70px", "70px"]} />
        </HStack>
        <Outlet />
      </VStack>
    </>
  );
};

export default Layout;
