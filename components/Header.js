import Link from "next/link";

const Header = () => (
  <div className="Header-root">
    <Link href="/">
      <a className="Header-link">
        <img src="/logo.png" alt="logo" />
      </a>
    </Link>
    <style jsx>{`
      .Header-root {
        display: flex;
        justify-content: center;
        width: 100%;
        min-width: 398px;
        height: 133px;
        margin-bottom: 11px;
      }
      .Header-link {
        height: 100%;
      }
      img {
        height: 100%;
        width: auto;
      }
    `}</style>
  </div>
);
export default Header;
