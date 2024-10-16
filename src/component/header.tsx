import Link from "next/link"
export default function Header(){
    return(
        <header className="header-container">
          <div className="logo">
        <Link href={"/"}>Food<span>..</span></Link></div>
            <nav className="nav-container">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#menu"}>Menu</Link></li>  
            </nav>
        </header>
    )
};