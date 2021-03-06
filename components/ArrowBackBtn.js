import Router from "next/router";

const ArrowBackBtn = () => (
  <div className="ArrowBackBtn-root" onClick={() => Router.back()}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="58"
      // height="53"
      viewBox="0 0 58 53"
      fill="none"
    >
      <path
        d="M32.7686 49.3397L29.9441 52.0279C28.7481 53.1662 26.8142 53.1662 25.6309 52.0279L0.896987 28.4994C-0.298995 27.3611 -0.298995 25.5205 0.896987 24.3943L25.6309 0.853711C26.8269 -0.28457 28.7608 -0.28457 29.9441 0.853711L32.7686 3.54199C33.9773 4.69238 33.9519 6.56934 32.7177 7.69551L17.3863 21.5971H53.9528C55.645 21.5971 57.0064 22.8928 57.0064 24.5033V28.3783C57.0064 29.9889 55.645 31.2846 53.9528 31.2846H17.3863L32.7177 45.1861C33.9646 46.3123 33.9901 48.1893 32.7686 49.3397Z"
        fill="white"
      />
    </svg>
    <style jsx>{`
      svg {
        width: 100%;
        height: 100%;
      }
      .ArrowBackBtn-root {
        width: 58px;
        height: 53px;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default ArrowBackBtn;
