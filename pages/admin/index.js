import { Fragment, useState } from "react";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import MainHeader from "../../components/layout/main-header";

function AdminPage() {
  const router = useRouter();

  return (
    <Fragment>
      <MainHeader />
    </Fragment>
  );
}

export default AdminPage;

