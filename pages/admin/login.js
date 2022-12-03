import { Container, Button, Input } from "@nextui-org/react";
import { useRef } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

function AdminLoginPage() {
  const emailText = useRef("");
  const passwordText = useRef("");

  const router = useRouter();

  async function onLoginHandler() {
    console.log('login page email ' + emailText.current.value)
    const result = await signIn("credentials", {
      redirect: false,
      email: emailText.current.value,
      password: passwordText.current.value,
    });

    if (result.ok) {
      router.replace("/admin");
    }
  }

  return (
    <Container fluid>
      <Input
        ref={emailText}
        size="xl"
        label="Enter your email id"
        placeholder="Email Id"
      ></Input>
      <Input.Password
        ref={passwordText}
        size="xl"
        type="password"
        label="Password"
        placeholder="Enter your password"
      />
      <Button onPress={onLoginHandler}>Login</Button>
      <Button
        onPress={() => {
          router.push("/");
        }}
      >
        Go Home
      </Button>
    </Container>
  );
}

export default AdminLoginPage;
