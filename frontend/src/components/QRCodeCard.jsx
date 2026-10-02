import { QRCodeCanvas } from "qrcode.react";

function QRCodeCard() {
  const websiteURL = "https://mooddesk-2.onrender.com";

  return (
    <section className="qr-card">
      <div className="qr-content">
        <span className="card-icon">📱</span>

        <div>
          <h2>Open MoodDesk</h2>
          <p>Scan the QR code to open MoodDesk on your phone.</p>
        </div>
      </div>

      <div className="qr-code">
        <QRCodeCanvas
          value={websiteURL}
          size={180}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </div>
    </section>
  );
}

export default QRCodeCard;