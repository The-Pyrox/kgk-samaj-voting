import { Navbar, Text } from "@nextui-org/react";
import { Fragment } from "react";
import { useSession} from 'next-auth/react';
import {Button} from "@nextui-org/react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  return (
  <div><Button onPress={(e) => router.push('/admin') }>Go To Admin Page</Button></div>
  );
}


