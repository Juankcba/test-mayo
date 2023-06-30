import { useRouter } from "next/router";
import React, { FC, PropsWithChildren, useContext } from "react";

import Head from "next/head";
import { CustomBox } from "@/components/ui/CustomBox";
interface Props {
  title?: string;
  pageDescription?: string;
  image?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const AdminLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,

  pageDescription,
  image,
}) => {
  const router = useRouter();
  return (
    <CustomBox
      css={{
        maxW: "100%",
      }}
    >
      {children}
    </CustomBox>
  );
};

export default AdminLayout;
