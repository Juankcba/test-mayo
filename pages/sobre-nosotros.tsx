import { Container, Grid, Image, Text } from "@nextui-org/react";
import React from "react";
import Layout from "../Layouts/Layout";

const AboutUsPage = () => {
  return (
    <Layout title="Sobre Nosotros">
      <Container>
        <Text h1>Sobre Nosotros</Text>
        <Text h2>Course Details</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
          consectetur adipiscing elit.
        </Text>
        <Text h2>Certification</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis consectetur adipiscing elit.
        </Text>

        <Text h2>Cursos Similares</Text>
        <Grid.Container>
          <Grid xs={12} sm={4}>
            <Image
              src={
                "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-260nw-2152289507.jpg"
              }
              alt="image"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <Image
              src={
                "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-260nw-2152289507.jpg"
              }
              alt="image"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <Image
              src={
                "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-260nw-2152289507.jpg"
              }
              alt="image"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default AboutUsPage;
