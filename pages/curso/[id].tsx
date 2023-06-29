import React, { FC } from "react";
import Layout from "@/Layouts/Layout";
import { Container, Text, Row, Badge, Grid, Card } from "@nextui-org/react";
import { mayoApi } from "@/apis";
import { ICourse } from "../../interfaces/course";
import { GetStaticPaths, GetStaticProps } from "next";

interface props {
  curso: ICourse;
}

const CursoDetailPage: FC<props> = ({ curso }) => {
  console.log(curso);
  return (
    <Layout title={curso.title}>
      <Container css={{ h: "80vh" }}>
        <Text h1>{curso.title}</Text>

        <Text h5>
          Dictado por {curso.author.first_name} {curso.author.last_name}
        </Text>

        <Text>{curso.description}</Text>
        <Grid.Container
          gap={1}
          css={{ flexWrap: "wrap", justifyContent: "center", mt: "20px" }}
        >
          {curso.lessons.map((lesson) => (
            <Grid xs={12} sm={6} md={4} key={lesson.id}>
              <Card>
                <Card.Header>{lesson.title}</Card.Header>
                <Card.Body>
                  <Row
                    css={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Detalle:</Text>

                    {lesson.topics.map((topic) => (
                      <li key={topic.id}>{topic.title}</li>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await mayoApi.get("/courses");
  const coursesIds = data.data.map((dato: any) => `${dato.id}`);
  return {
    paths: coursesIds.map((id: string) => ({
      params: {
        id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await mayoApi.get(`/courses/${id}`);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      curso: data.data,
    },
    revalidate: 60,
  };
};

export default CursoDetailPage;
