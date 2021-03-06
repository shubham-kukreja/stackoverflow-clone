import { Navbar, Button } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <>
      <Head>
        <title>StackOverlow</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand>
            <img
              alt=""
              src="icons/favicon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Stakoverflow Clone
            {/* <Link href="/">
              <a className="nav-link text-white">StackOverflow</a>
            </Link> */}
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}
