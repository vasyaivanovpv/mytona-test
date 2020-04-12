import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>MyTona App</title>
    </Head>

    <div className="Container-root">
      <Header />
      {children}
    </div>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-size: 18px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        box-sizing: border-box;
        color: rgb(255, 255, 255);
        background: url("/bg_pattern_galaxy.png") repeat #333;
        background-size: auto;
      }
      a {
        text-decoration: none;
        color: white;
      }
      img {
        width: 100%;
        height: auto;
      }
      .Container-root {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        padding-bottom: 40px;
      }
    `}</style>
  </>
);

export default Layout;
