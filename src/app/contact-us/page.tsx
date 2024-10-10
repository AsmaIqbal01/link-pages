export default function Contactus() {
    return (
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        <div className="flex flex-wrap gap-10 p-10 justify-center">
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-10">
            <h2 className="font-bold text-2xl mb-4">Get in Touch</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <i className="fas fa-phone text-lg text-blue-600"></i>
                <p className="text-lg">Tel: 03018205037</p>
              </div>
              <div className="flex gap-4">
                <i className="fas fa-envelope text-lg text-blue-600"></i>
                <p className="text-lg">Email: <a href="mailto:info@habitt.com" className="text-blue-600 hover:text-blue-800">info@habitt.com</a></p>
              </div>
              <div className="flex gap-4">
                <i className="fas fa-map-marker-alt text-lg text-blue-600"></i>
                <address className="text-lg">Tipu Sultan Road, Shahra-e-Faisal Rd, Memon Co-operative Housing Society Karachi</address>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }