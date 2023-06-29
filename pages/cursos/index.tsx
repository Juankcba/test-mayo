import React, { FC, useState, useEffect, Fragment } from "react";
import Layout from "@/Layouts/Layout";
import { Container, Grid, Loading, Text } from "@nextui-org/react";
import { mayoApi } from "@/apis";
import { ICourses } from "../interfaces/courses";
import CursosCard from "@/components/cursos/CursosCard";

interface props {
  courses: string;
}

const CursosPage: FC<props> = ({ courses }) => {
  const [cursos, setCursos] = useState<ICourses[]>([]);
  const [loadin, setLoading] = useState(false);

  useEffect(() => {
    if (courses) {
      setCursos(JSON.parse(courses));
    }
  }, [courses]);
  console.log({ cursos });
  return (
    <Layout title="Nuestros Cursos">
      <Container>
        {cursos.length > 0 ? (
          <Fragment>
            <Text h1>Nuestros Cursos</Text>

            <Grid.Container gap={1}>
              {cursos.map((curso: ICourses) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={curso.id}>
                  <CursosCard curso={curso} />
                </Grid>
              ))}
            </Grid.Container>
          </Fragment>
        ) : (
          <Loading />
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await mayoApi.get("/courses");

  //const auditorias: string[] = data.map((auditoria) => (JSON.stringify(auditoria)));

  const courses = JSON.stringify(data.data.data);

  return {
    props: {
      courses,
    },
    revalidate: 1,
  };
}

export default CursosPage;
