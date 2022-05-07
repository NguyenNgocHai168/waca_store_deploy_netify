import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactScreen = () => {
  window.scrollTo(0, 0);

  return (
    <div style={{ background: "#d7d8de" }}>
      <Header />
      <div className="container">
        <div className="section">
          {/* đường ngăn Cách */}
          <div className="d-flex align-items-baseline my-4">
            <div className="flex-fill jazzy_jon_lines_warm"></div>
            <h2
              className="mx-4 mb-0 text-center"
              style={{
                fontWeight: "600",
                fontFamily: "'Brush Script MT', cursive",
              }}
            >
              Liên Hệ Với Chúng Tôi
            </h2>
            <div className="flex-fill jazzy_jon_lines_warm"></div>
          </div>
          {/*  */}
          <div className="row">
            <div className="col-12 col-md-4 contact-Box">
              <div className="box-info">
                <div className="info-image">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h5>Call Phone</h5>
                <p>0999 912 345</p>
              </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
              <div className="box-info">
                <div className="info-image">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h5>Trụ Sở Chính</h5>
                <p>Tòa Nhà WACA - P2-Q.Bình Thạnh-TPHCM</p>
              </div>
            </div>
            <div className="col-12 col-md-4 contact-Box">
              <div className="box-info">
                <div className="info-image">
                  <i className="fas fa-envelope"></i>
                </div>
                <h5>Email</h5>
                <p>wacastore@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                <div className="mt-5 mb-5">
                  <form className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 mt-2 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div className="col-lg-6 mt-2 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last Name"
                        />
                      </div>
                      <div className="col-lg-12 mt-2 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Email ID"
                        />
                      </div>
                      <div className="col-lg-12 mt-2 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile"
                        />
                      </div>
                      <div className="col-lg-12">
                        <button className="btn btn-md btn-warning">
                          <b>Gữi Đi</b>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactScreen;
