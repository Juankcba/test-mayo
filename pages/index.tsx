import Layout from "@/Layouts/Layout";
import { Container, Grid, Text, Row, Image } from "@nextui-org/react";
import { mayoApi } from "@/apis";
import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    await mayoApi
      .get("/courses?order_by=title&page=1&per_page=15")
      .then((r) => {
        console.log(r.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

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
              <Text h1>Grow up your skills by online courses with Eduvi</Text>
              <Text>
                Eduvi is a Global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the barriers togetting a degree.
              </Text>
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
