import "./package.css";

function Package() {
  return (
    <div className="container package text-white text-center mb-5">
      <div className="row w-100 mb-2 ms-auto me-auto">
        <div className="col">
          <h3>Paket Wisata Offroad Jeep Station Puncak</h3>
        </div>
      </div>
      <div className="row w-100 ms-auto me-auto fs-5">
        <div className="col-sm mb-3">
          <div className="card">
            <div className="card-header">
              <p className="fw-bold mb-0">PAKET 1</p>
              <p className="fw-bold mb-0">IDR 1.400K</p>
            </div>
            <div className="card-body text-start">
              <p className="fw-bold mb-2">Rute</p>
              <ul className="m-0 ps-3">
                <li>
                  <p className="mb-0">Kebun Teh</p>
                </li>
                <li>
                  <p className="mb-0">Daratan Lumpur</p>
                </li>
                <li>
                  <p className="mb-0">Hutan Lindung</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm mb-3">
          <div className="card">
            <div className="card-header">
              <p className="fw-bold mb-0">PAKET 2</p>
              <p className="fw-bold mb-0">IDR 1.100K</p>
            </div>
            <div className="card-body text-start">
              <p className="fw-bold mb-2">Rute</p>
              <ul className="m-0 ps-3">
                <li>
                  <p className="mb-0">Kebun Teh</p>
                </li>
                <li>
                  <p className="mb-0">Hutan Lindung</p>
                </li>
                <li>
                  <p className="mb-0">Air Terjun</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm mb-3">
          <div className="card">
            <div className="card-header">
              <p className="fw-bold mb-0">PAKET 1</p>
              <p className="fw-bold mb-0">IDR 1.100K</p>
            </div>
            <div className="card-body text-start">
              <p className="fw-bold mb-2">Rute</p>
              <ul className="m-0 ps-3">
                <li>
                  <p className="mb-0">Kebun Teh</p>
                </li>
                <li>
                  <p className="mb-0">Telaga Saat</p>
                </li>
                <li>
                  <p className="mb-0">Puncak View</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm mb-3">
          <div className="card">
            <div className="card-header">
              <p className="fw-bold mb-0">PAKET FOTOGRAFER</p>
              <p className="fw-bold mb-0">IDR 3.000K</p>
            </div>
            <div className="card-body text-start">
              <ul className="m-0 ps-3">
                <li>
                  <p className="mb-0">Foto</p>
                </li>
                <li>
                  <p className="mb-0">Video</p>
                </li>
                <li>
                  <p className="mb-0">Drone</p>
                </li>
                <li>
                  <p className="mb-0">Editing Video</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
