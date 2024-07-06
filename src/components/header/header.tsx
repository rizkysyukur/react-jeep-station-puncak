import "./header.css";
import logo from "../../../public/assets/img/logo.png";

function Header() {
  return (
    <>
      <div className="header fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container-fluid">
            <div className="row">
              <div className="col pe-1">
                <img src={logo} alt="" width={50} />
              </div>
              <div className="col header-title pe-3 pt-2">
                <h1 className="navbar-brand text-white">Jeep Station Puncak</h1>
              </div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="bi-list text-white"></span>
            </button>
            <div
              className="collapse navbar-collapse text-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-secondary"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
