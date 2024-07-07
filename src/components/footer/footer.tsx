import "./footer.css";

function Footer() {
  return (
    <div className="footer pt-3 pb-3">
      <div className="row w-100 mb-1">
        <div className="col text-center">
          <div>
            <a
              href="https://www.instagram.com/jeepstationpuncak2023?utm_source=qr&igsh=cW51d3NleW5xbjZi"
              target="_blank"
              className="bi-instagram text-light me-3 fs-3"
            ></a>
            <a
              href="https://www.tiktok.com/@jspjeepstationpuncak7"
              target="_blank"
              className="bi-tiktok text-light me-3 fs-3"
            ></a>
            <a
              href="mailto:fabianmuhammad955@gmail.com"
              target="_blank"
              className="bi-envelope text-light me-3 fs-3"
            ></a>
            <a
              href="https://wa.link/apjk9a"
              target="_blank"
              className="bi-whatsapp text-light me-3 fs-3"
            ></a>
          </div>
        </div>
      </div>
      <div className="row w-100">
        <div className="col">
          <p className="text-center text-light">© 2024 JeepStationPuncak.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
