import { Button, Navbar, Text } from "@nextui-org/react";
import { Fragment, useState } from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import VotersPage from "../../components/voters";
import CandidatesPage from "../../components/candidates";
import StartVotingPage from "../../components/startvoting";

function AdminPage() {
  const router = useRouter();

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const [currentPage, setCurrentPage] = useState(0);

  function onLogOutHandler() {
    signOut();
    router.push("/");
  }

  return (
    <Fragment>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text>KGK Samaj Voting</Text>
        </Navbar.Brand>
        {session && (
          <Navbar.Content hideIn="xs">
            <Navbar.Link onPress={(e) => setCurrentPage(0)}>Voters</Navbar.Link>
            <Navbar.Link onPress={(e) => setCurrentPage(1)}>
              Candidates
            </Navbar.Link>
            <Navbar.Link onPress={(e) => setCurrentPage(2)}>
              Start Voting
            </Navbar.Link>
          </Navbar.Content>
        )}
        {session && (
          <Navbar.Content>
            <Button auto flat onPress={onLogOutHandler}>
              Logout
            </Button>
          </Navbar.Content>
        )}
      </Navbar>
      {currentPage == 0 && <VotersPage />}
      {currentPage == 1 && <CandidatesPage />}
      {currentPage == 2 && <StartVotingPage />}
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      props: {},
    };
  } else {
    return {
      redirect: {
        destination: "/admin/login",
      },
    };
  }
}

export default AdminPage;
