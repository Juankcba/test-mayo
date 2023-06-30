import React from "react";
import {
  Button,
  Container,
  Navbar,
  Text,
  Image,
  Dropdown,
  Avatar,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";

const CustomNavbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const navigateTo = (url: string) => {
    router.push(url);
  };
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
        {status != "authenticated" && (
          <Navbar.Item>
            <Button
              auto
              flat
              onPress={() => navigateTo(`/auth/login?p=${router.asPath}`)}
            >
              Ingresar
            </Button>
          </Navbar.Item>
        )}
        {status == "authenticated" && (
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src={
                    session.user?.image
                      ? session.user.image
                      : "/assets/img/avatar.jpg"
                  }
                />
              </Dropdown.Trigger>
            </Navbar.Item>

            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey: any) =>
                actionKey != "logout" && router.push(actionKey)
              }
            >
              <Dropdown.Item key="/" css={{ height: "$18" }} color={"primary"}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Hola
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {session.user?.name}
                </Text>
              </Dropdown.Item>

              <Dropdown.Item key="/my-profile" withDivider>
                <NextLink href="/my-profile">
                  <Link>Mi Perfil</Link>
                </NextLink>
              </Dropdown.Item>

              <Dropdown.Item
                key="/admin"
                withDivider
                css={session.user?.role === "admin" ? {} : { display: "none" }}
              >
                <NextLink href="/admin">
                  <Link>Administación</Link>
                </NextLink>
              </Dropdown.Item>

              <Dropdown.Item
                key="logout"
                withDivider
                color="error"
                css={{ height: "$15" }}
              >
                <Button
                  auto
                  light
                  color="error"
                  flat
                  css={{ w: "100%" }}
                  onPress={() => signOut()}
                >
                  Deslogearse
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Navbar.Content>
    </Navbar>
  );
};

export default CustomNavbar;
