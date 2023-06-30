import React from "react";
import { useSession } from "next-auth/react";
import { Container, Text } from "@nextui-org/react";
import Layout from "@/Layouts/Layout";

const MyProfilePage = () => {
  const { data: session, status } = useSession();
  return (
    <Layout title={session?.user?.name + "| Profile | Cursos Online"}>
      <Container>
        <Text h1>Hola {session?.user.name}</Text>
      </Container>
    </Layout>
  );
};

export default MyProfilePage;
