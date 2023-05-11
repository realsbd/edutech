import React from "react";
import { useTheme, Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
// import { Layout } from "./components/Layout";
import { AcmeLogo } from "./components/AcmeLogo";
// import { VariantsSelectorWrapper } from "./components/VariantsSelectorWrapper";

export default function App() {

  const { theme } = useTheme();
  
  return (
    <div>
      <Navbar isBordered>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            Edtech
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Dashboard</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}
