import logo from "./images/logo.svg";

function App() {
  return (
    <>
      <div id="app" data-v-app="" bis_skin_checked={1}>
        <div
          className="vertline"
          bis_skin_checked={1}
          style={{ left: "10%" }}
        />
        <div className="horline" bis_skin_checked={1} style={{ top: "51%" }} />
        <div className="container home" data-theme="dark" bis_skin_checked={1}>
          <div className="grid" bis_skin_checked={1}>
            <div className="header" bis_skin_checked={1}>
              <img className="logo animate fade" src={logo} alt="logo" />
            </div>
            <div className="main animate fade delay-8" bis_skin_checked={1}>
              <h1>
                <span>
                  The <b>Smart Contract Sidechain</b>
                </span>{" "}
                <span>
                  for the XRPL Ecosystem{" "}
                  <small>- Xahau Launch Alliance, 2023</small>
                </span>
              </h1>
              <a
                href="https://xahuadapps.on.fleek.co"
                role="button"
                target="_blank"
                className="contrast whitepaper"
                rel="noreferrer"
              >
                {" "}
                Claim Airdrop&nbsp;{" "}
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  size={28}
                  className="lucide lucide-file-code-icon"
                >
                  <path
                    d="M14.1297 11.3386C14.5197 9.69856 13.0897 8.26856 11.4497 8.65856C10.6797 8.84856 10.0497 9.47856 9.85974 10.2486C9.46974 11.8886 10.8997 13.3186 12.5397 12.9286C13.3197 12.7386 13.9497 12.1086 14.1297 11.3386Z"
                    fill="#292D32"
                  />
                  <path
                    d="M6.02094 17.97C5.84094 17.97 5.65094 17.9 5.51094 17.77C3.57094 15.97 2.46094 13.43 2.46094 10.79C2.46094 5.53 6.74094 1.25 12.0009 1.25C17.2609 1.25 21.5409 5.53 21.5409 10.79C21.5409 13.45 20.4709 15.91 18.5309 17.74C18.2309 18.02 17.7509 18.01 17.4709 17.71C17.1909 17.41 17.2009 16.93 17.5009 16.65C19.1409 15.11 20.0409 13.04 20.0409 10.8C20.0409 6.37 16.4309 2.76 12.0009 2.76C7.57094 2.76 3.96094 6.37 3.96094 10.8C3.96094 13.06 4.87094 15.14 6.53094 16.68C6.83094 16.96 6.85094 17.44 6.57094 17.74C6.42094 17.89 6.22094 17.97 6.02094 17.97Z"
                    fill="#292D32"
                  />
                  <path
                    d="M15.9995 15.2986C15.8195 15.2986 15.6295 15.2286 15.4895 15.0986C15.1895 14.8186 15.1695 14.3386 15.4595 14.0386C16.2895 13.1586 16.7495 11.9986 16.7495 10.7986C16.7495 8.17859 14.6195 6.05859 12.0095 6.05859C9.39953 6.05859 7.26953 8.18859 7.26953 10.7986C7.26953 12.0086 7.72953 13.1586 8.55953 14.0386C8.83953 14.3386 8.82953 14.8186 8.52953 15.0986C8.22953 15.3886 7.74953 15.3686 7.46953 15.0686C6.37953 13.9086 5.76953 12.3886 5.76953 10.7986C5.76953 7.35859 8.56953 4.55859 12.0095 4.55859C15.4495 4.55859 18.2495 7.35859 18.2495 10.7986C18.2495 12.3886 17.6495 13.9086 16.5495 15.0686C16.3995 15.2186 16.1995 15.2986 15.9995 15.2986Z"
                    fill="#292D32"
                  />
                  <path
                    d="M10.3009 16.66L8.86086 18.45C7.72086 19.88 8.74086 22 10.5609 22H13.4309C15.2609 22 16.2809 19.88 15.1309 18.46L13.6909 16.67C12.8309 15.57 11.1709 15.57 10.3009 16.66Z"
                    fill="#292D32"
                  />
                </svg>
              </a>
              <a
                href="https://xahuadapps.on.fleek.co"
                role="button"
                target="_blank"
                className="contrast whitepaper"
                style={{ marginTop: ".5rem" }}
                rel="noreferrer"
              >
                {" "}
                Rectify Issues&nbsp;{" "}
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  size={28}
                  className="lucide lucide-file-code-icon"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.75 12L10.58 14.83L16.25 9.17004"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="developers" bis_skin_checked={1}>
              <div
                className="vertline"
                bis_skin_checked={1}
                style={{ position: "fixed", marginTop: "-8rem", right: "8%" }}
              />
              <div
                className="devbox animate fade delay-10"
                bis_skin_checked={1}
              >
                <hgroup>
                  <h4>Developer?</h4>
                  <p>
                    <strong
                      style={{
                        display: "inline-block",
                        marginBottom: 5,
                        color: "var(--yellow)",
                      }}
                    >
                      Hooks are the native smart contracts on the Xahau network.
                    </strong>
                    <br />
                    Checkout our docs and tools.
                  </p>
                </hgroup>
                <a
                  href="https://hooks-builder.xrpl.org"
                  role="button"
                  className="primary btnsm"
                  style={{ marginBottom: 8 }}
                >
                  Hooks builder{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    size={20}
                    className="lucide lucide-hammer-icon"
                  >
                    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
                    <path d="M17.64 15 22 10.64" />
                    <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
                  </svg>
                </a>
                <a
                  href="https://xrpl-hooks.readme.io"
                  role="button"
                  className="primary btnsm"
                  style={{ marginBottom: 8 }}
                >
                  Hooks docs{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    size={20}
                    className="lucide lucide-file-code-icon"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m10 13-2 2 2 2" />
                    <path d="m14 17 2-2-2-2" />
                  </svg>
                </a>
                <a
                  href="https://hooks-testnet.xrpl-labs.com"
                  role="button"
                  className="primary btnsm"
                  style={{ marginBottom: 8 }}
                >
                  Hooks testnet{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    size={18}
                    className="lucide lucide-flask-conical-icon"
                  >
                    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                    <path d="M8.5 2h7" />
                    <path d="M7 16h10" />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="horline"
              bis_skin_checked={1}
              style={{ bottom: 100 }}
            />
            <div className="footer animate slide delay-12" bis_skin_checked={1}>
              <a
                href="https://github.com/Xahau"
                role="button"
                className="primary btnsm"
              >
                Github{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  size={18}
                  className="lucide lucide-github-icon"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://x.com/XahauNetwork"
                role="button"
                className="primary btnsm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  size={18}
                  className="lucide lucide-twitter-icon"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>{" "}
                /{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  size={18}
                  className="lucide lucide-xicon"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </a>
              <a
                href="https://github.com/Xahau/Graphics"
                role="button"
                className="primary btnsm"
              >
                Download Brand Assets{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  size={18}
                  className="lucide lucide-download-cloud-icon"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
                </svg>
              </a>
              <a
                href="Xahau-Whitepaper.pdf"
                role="button"
                className="primary btnsm"
              >
                Download Witepaper{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  size={18}
                  className="lucide lucide-file-digit-icon"
                >
                  <rect width={4} height={6} x={2} y={12} rx={2} />
                  <path d="M14 2v6h6" />
                  <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                  <path d="M10 12h2v6" />
                  <path d="M10 18h4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="backgroundfade" bis_skin_checked={1} />
        <canvas
          data-scene="380f1445-75bd-4c4f-8925-77afa94dea34"
          className="animate blur delay-3"
          data-engine="three.js r157"
          width={1921}
          height={535}
          style={{
            display: "block",
            width: 1647,
            height: 459,
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "auto",
            touchAction: "none",
          }}
        />
      </div>
    </>
  );
}

export default App;
