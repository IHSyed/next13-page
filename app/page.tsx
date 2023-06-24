import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <h1> HOME </h1>
    <Link href = {"/About"}> About</Link>
    <img src="/nono.jpg" alt = "Nono's Image" width={"70"} height = "70" />
    <Image src="/nono.jpg" alt = "Nono's Image" width={"100"} height = "100" />
    
    
    </>
    
  );
}
