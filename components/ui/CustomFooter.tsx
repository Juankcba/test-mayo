import { Container, Grid, Navbar, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

const CustomFooter = () => {
  const router = useRouter();
  const isEnglish = false;

  return (
    <Container css={{ maxW: "100%", p: 0, bg: "$gray50" }}>
      <Grid.Container css={{ w: "100%" }}>
        <Grid xs={12}>
          <Navbar css={{ bg: "$gray850" }}>
            <Navbar.Content
              css={{ w: "100%", display: "flex", justifyContent: "center" }}
            >
              <Navbar.Link isActive={router.asPath === "/"} href="/">
                {isEnglish ? "Home" : "Inicio"}
              </Navbar.Link>
              <Navbar.Link
                isActive={router.asPath === "/sobre-nosotros"}
                href="/sobre-nosotros"
              >
                {isEnglish ? "About Us" : "Sobre Nosotros"}
              </Navbar.Link>
              <Navbar.Link
                isActive={router.asPath === "/cursos"}
                href="/cursos"
              >
                {isEnglish ? "Courses" : "Cursos"}
              </Navbar.Link>
            </Navbar.Content>
          </Navbar>
        </Grid>
        <Grid xs={12} sm={0}>
          <Text css={{ textAlign: "center", width: "100%" }}>
            ©{" "}
            {isEnglish
              ? "All rights reserved since 2016 - 2023"
              : "Todos los derechos reservados 2016 - 2023"}
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default CustomFooter;
