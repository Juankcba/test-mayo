import { CustomBox } from "@/components/ui/CustomBox";
import CustomFooter from "@/components/ui/CustomFooter";
import CustomNavbar from "@/components/ui/CustomNavbar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";

interface Props {
  title?: string;
  pageDescription?: string;
  image?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title,

  pageDescription,
  image,
}) => {
  const router = useRouter();
  const isEnglish = false;
  return (
    <CustomBox
      css={{
        maxW: "100%",
      }}
    >
      <Head>
        <title>{title || "Cursos en Linea"}</title>
        <meta lang={isEnglish ? "en" : "es"} />
        <meta name="author" content="Juankcba" />
        <meta
          name="description"
          content={
            pageDescription ||
            `Producimos contenido digital y audivisual en formato de cursos.`
          }
        />
        <meta
          name="keywords"
          content={` developer, 3d, 3d-design, multimeda, video, audio`}
        />

        <meta property="og:title" content={`${title}` || "Cursos Online"} />
        <meta
          itemProp="image"
          content={image || `${origin}/assets/img/Logo.svg`}
        />
        <meta
          property="og:description"
          content={
            pageDescription ||
            `Producimos contenido digital y audivisual en formato de cursos.`
          }
        />
        <meta
          property="og:image"
          content={image || `${origin}/assets/img/Logo.svg`}
        />
        <meta name="twitter:card" content={title || "Cursos Online"} />
        <meta name="twitter:site" content={"https://bladelink.company"} />
        <meta name="twitter:title" content={title || "Cursos Online"} />
        <meta
          name="twitter:description"
          content={
            pageDescription ||
            `Producimos contenido digital y audivisual en formato de cursos.`
          }
        />
        <meta
          name="twitter:image"
          content={image || `${origin}/assets/img/Logo.svg`}
        />
        <link
          rel="canonical"
          href={`${origin}${router.asPath}`}
          key="canonical"
        />
      </Head>

      <CustomNavbar />
      {children}
      <footer>
        <CustomFooter />
      </footer>
    </CustomBox>
  );
};

export default Layout;
