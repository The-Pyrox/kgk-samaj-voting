import { Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import {useRef} from 'react'

function VotersPage(props) {
  const router = useRouter();
  const contactList = useRef(props.voters)
  console.log(props.voters)

function updateData(){
    
}

  return (
    <div>
       
      <Button onPress={(e) => router.push("/admin")}>Go Back</Button>
      <Textarea ref={contactList}/>
      <Button onPress={updateData}>Update</Button>
    </div>
  );
}

export default VotersPage;

export async function getServerSideProps(context) {
  const response = await fetch('http:localhost:3000/api/voters');
  const data = await response.json();
  return {
    props: {
        voters : data
    },
  };
}
