 import Link from "next/link"
 import About from "../about/page"
 import contact from "../contact/page"
 export default function Navbar(){
    return(
        <div>
        <h1>My Navbar component</h1>
        <Link href="https://www.google.com">google</Link><br/>
        <Link href = "/about">about</Link> <br/>
        <Link href = "/contact">contact</Link>
        </div>
    )
} 