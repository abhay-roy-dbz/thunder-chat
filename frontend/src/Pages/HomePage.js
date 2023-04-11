import {
  Avatar,
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useNavigate } from "react-router-dom";
import logo from "../background.png";

function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);

  return (
    <Container maxW="md" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        color="white"
      >
        <Text fontSize="5xl" fontFamily="Work sans" display="flex" justifyContent="center" alignItems="center">
          <Avatar src={logo} fontSize="5xl"  />
          Thunder Chat
        </Text>
      </Box>
      <Box
        w="100%"
        p={4}
        borderRadius="lg"
        background="white"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab >Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
