
import Image from "next/image";
import Link from "next/link";
import ProductUser from "./components/ProductUser";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import coffee from "../public/coffee.jpg"
import dynamic from "next/dynamic";
const HeavyComponent =dynamic(()=>import("./components/HeavyComponent")) 


export default async function Home() {
  const session= await getServerSession(authOptions)
  return (
    <main className="relative h-screen">
      {/* <h1>
        Hello {session  && session.user.name}
      </h1>
      <Link href={"/users"}>Users</Link>
      <ProductUser /> */}
      <HeavyComponent />
      <Image src={coffee} alt="coffee" style={{display:"none"}} />
      <br/>
      <Image
      //  width={500} height={500}
      fill
      // style={{objectFit:"cover"}}
      // style={{objectFit:"contain"}}
      className="object-cover"
      sizes="(max-width:480px) 100vw, (max-width:768px) 50vw, 30vw"
      quality={100}
      priority
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/375px-Latte_and_dark_coffee.jpg" alt="coffee"/>
      
    </main>
  );
}
