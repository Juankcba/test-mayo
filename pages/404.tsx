import Layout from "@/Layouts/Layout";
import { Button, Container, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Custom404Page = () => {
  return (
    <Layout title="404 - Página no encontrada | Blade Link Company">
      <Container className="bg-gradient-secondary">
        <Grid.Container>
          <Grid
            xs={12}
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              h: "100%",
              w: "100%",
            }}
          >
            <Text h1>¡Lo sentimos!</Text>
            <Text h2>Página no encontrada</Text>
            <Button as={Link} href="/">
              Volver al Inicio
            </Button>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Custom404Page;
