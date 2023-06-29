import { Button, Card, Row, Text, Image } from "@nextui-org/react";
import React, { FC } from "react";
import { ICourses } from "../../interfaces/courses";
import Link from "next/link";
interface props {
  curso: ICourses;
}
const CursosCard: FC<props> = ({ curso }) => {
  return (
    <Card>
      <Card.Header>
        <Text h2 color={"white"} size={"$xl"}>
          {curso.title}
        </Text>
      </Card.Header>
      <Card.Body>
        <Image
          src={
            "https://www.shutterstock.com/image-vector/3d-web-vector-illustrations-online-260nw-2152289507.jpg"
          }
          alt="image"
        />
      </Card.Body>
      <Card.Footer css={{ display: "flex", justifyContent: "center" }}>
        <Button as={Link} href={`/curso/${curso.id}`}>
          Más detalles
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default CursosCard;
