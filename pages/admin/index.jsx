import { Button, Card, Container, Grid, Input, Row, Text } from '@nextui-org/react'
import React, { useEffect } from 'react'
import AdminLayout from '../../Layouts/AdminLayout'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const AdminPage = () => {
    const [submiting, setSubmiting] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        validationSchema: Yup.object().shape({
            email: Yup
                .string()
                .email("Email no valido")
                .required("El email es requerido"),
            password: Yup.string().required('La contraseña es requerida')
        }),
        onSubmit: async (values) => {
            const { email, password } = values
            setSubmiting(true)
            try {
                await signIn("credentials", { email, password, callbackUrl: `/admin` })
                setSubmiting(false)
            } catch (error) {
                console.log(error);
                setSubmiting(false)
            }
        }
    })


    useEffect(() => {
        console.log(session)
        if (status === "authenticated" && session.user.role === 'admin') {
            const destination = "/admin/cursos";
            router.replace(destination);
        }
    }, [router, session, status]);


    return (
        <AdminLayout>
            <Container>
                <Text h1 css={{ textAlign: 'center' }}>Panel Administrador</Text>
                <Grid.Container justify='center' gap={1}>
                    <Grid xs={12} sm={4}>
                        <Card>
                            <Card.Header>
                                <Text h4 css={{ w: '100%', textAlign: 'center' }}>INGRESO</Text>
                            </Card.Header>
                            <Card.Body>
                                <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                                    <Row css={{ gap: "16px", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <Input fullWidth label="Correo electronico" placeholder='email' name="email" value={formik.values.title}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            helperColor={"error"}
                                            helperText={
                                                formik.errors.email && formik.touched.email
                                                    ? formik.errors.email.toString()
                                                    : undefined
                                            }
                                        />
                                        <Input.Password fullWidth type="password" label="Contraseña" placeholder='Contraseña' value={formik.values.title}
                                            name="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            helperColor={"error"}
                                            helperText={
                                                formik.errors.password && formik.touched.password
                                                    ? formik.errors.password.toString()
                                                    : undefined
                                            } />
                                        <Button disabled={submiting} fullWidth type="submit" css={{ w: '100%', mt: '24px' }}>Ingresar</Button>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Container>
        </AdminLayout>
    )
}

export default AdminPage