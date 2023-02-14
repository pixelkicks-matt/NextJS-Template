import Link from "next/link"
import Head from 'next/head';

export default function Header() {
  return (
    <header className="header">
      <Head>
        <title>Template Blank</title>
        <link rel="icon" href="favicon.png"></link>
      </Head>
      <div className="header-wrapper">
        <h1>Header Goes Here</h1>

        <nav>
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/blog"><a>Blog</a></Link>
            </li>
          </ul>
        </nav>


      </div>
    </header>
  )
}