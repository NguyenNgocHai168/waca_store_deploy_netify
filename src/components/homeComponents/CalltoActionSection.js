import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn có muốn nhận thông điệp tư vấn từ chúng tôi?</h2>
              <p>hãy để lại thông tin Email của bạn sẽ nhận được các lời tư vấn hữu ích.</p>
              <form className="form-section">
                <input placeholder="Email bạn là..." name="email" type="email" />
                <input value="Tôi Đồng Ý!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
