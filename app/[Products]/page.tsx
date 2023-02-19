import Link from "next/link"
//import Image from "next/image"

export default function Home({params} : 
  {params : {Products:string}}) {
  return (
    <>
    <h1> HOME </h1> 
    <Link href = {"/About"}> About</Link>
  
    <div>The Product is : {params.Products}</div>
    </>
    
  );
}