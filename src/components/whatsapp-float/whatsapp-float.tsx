import "./whatsapp-float.css";

function WhatsappFloat() {
  return (
    <a
      href="https://wa.link/apjk9a"
      target="_blank"
      className="whatsapp-wrapper position-fixed bottom-0 end-0 mb-4 me-3 rounded-circle bg-white text-center"
    >
      <i className="bi-whatsapp whatsapp-float text-dark"></i>
    </a>
  );
}

export default WhatsappFloat;
