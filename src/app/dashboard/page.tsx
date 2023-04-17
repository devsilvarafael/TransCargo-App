import React from "react";
import DefaultLayout from "@/app/layouts/DefaultLayout";
import Heading from "@/app/components/Heading";

export default function Dashboard(): JSX.Element {
  return (
    <DefaultLayout
      leftSideBar={{ active: true }}
      rightSideBar={{ active: false }}
    >
      <Heading variant="h2">Carregamentos</Heading>
    </DefaultLayout>
  );
}
