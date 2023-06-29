import React from "react";
import { Button, Container, Navbar, Text, Image } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomNavbar = () => {
  const router = useRouter();
  return (
    <Navbar isBordered variant={"static"}>
      <Navbar.Brand>
        <Image
          src={"/assets/img/Logo.svg"}
          css={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive={router.asPath === "/"} href="/">
          Inicio
        </Navbar.Link>
        <Navbar.Link isActive={router.asPath === "/cursos"} href="/cursos">
          Cursos
        </Navbar.Link>
        <Navbar.Link
          isActive={router.asPath === "/sobre-nosotros"}
          href="/sobre-nosotros"
        >
          Nosotros
        </Navbar.Link>
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
  );
};

export default CustomNavbar;
