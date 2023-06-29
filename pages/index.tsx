import Layout from "@/Layouts/Layout";
import { Container, Grid, Text, Row, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Grid.Container>
          <Grid xs={12} md={6}>
            <Row
              css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text h1 css={{ "@smMax": { fontSize: "28px" } }}>
                Grow up your skills by online courses with Eduvi
              </Text>
              <Text>
                Eduvi is a Global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the barriers togetting a degree.
              </Text>
              <Button as={Link} href={"/cursos"} css={{ mt: "24px" }}>
                Ir a cursos
              </Button>
            </Row>
          </Grid>
          <Grid xs={12} md={6}>
            <Image src={"/assets/img/Image.png"} alt={"image.cursos"} />
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
}
