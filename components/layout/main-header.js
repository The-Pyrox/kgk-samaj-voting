import { Navbar, Text, Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import {useRouter} from 'next/router';

function MainHeader() {
  const { data: session, status } = useSession();
    const router = useRouter();

  async function onLogOutHandler() {
    await signOut();
    router.push('/');
  }

  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Text>KGK Samaj Voting</Text>
      </Navbar.Brand>
        <Navbar.Content>
            {session && <Navbar.Link href="/admin/voters">Voters</Navbar.Link>}
            {session && <Navbar.Link href="/admin/candidates">Candidates</Navbar.Link>}
            {session && <Navbar.Link href="/admin/startvoting">Start Voting</Navbar.Link>}
            {session && <Button onPress={onLogOutHandler}>Logout</Button>}
            {!session && <Button onPress={(e) => router.push('/admin/login')}>Login</Button>}
        </Navbar.Content>
    </Navbar>
  );
}

export default MainHeader;
