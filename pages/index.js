import { Navbar, Text } from "@nextui-org/react";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text>KGK Samaj Voting</Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/admin">Admin</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Fragment>
  );
}
