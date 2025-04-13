import React from 'react';

const Tags = () => {
  return (
    <div className="col-lg-4 pt-3 pt-lg-0">
      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Follow Us</h3>
        </div>
        <div className="d-flex mb-3">
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#39569E' }}>
            <small className="fab fa-facebook-f mr-2"></small><small>12,345 Fans</small>
          </a>
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#52AAF4' }}>
            <small className="fab fa-twitter mr-2"></small><small>12,345 Followers</small>
          </a>
        </div>
        <div className="d-flex mb-3">
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#0185AE' }}>
            <small className="fab fa-linkedin-in mr-2"></small><small>12,345 Connects</small>
          </a>
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#C8359D' }}>
            <small className="fab fa-instagram mr-2"></small><small>12,345 Followers</small>
          </a>
        </div>
        <div className="d-flex mb-3">
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none mr-2" style={{ background: '#DC472E' }}>
            <small className="fab fa-youtube mr-2"></small><small>12,345 Subscribers</small>
          </a>
          <a href="#" className="d-block w-50 py-2 px-3 text-white text-decoration-none ml-2" style={{ background: '#1AB7EA' }}>
            <small className="fab fa-vimeo-v mr-2"></small><small>12,345 Followers</small>
          </a>
        </div>
      </div>

      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Newsletter</h3>
        </div>
        <div className="bg-light text-center p-4 mb-3">
          <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
          <div className="input-group" style={{ width: '100%' }}>
            <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </div>
          <small>Sit eirmod nonumy kasd eirmod</small>
        </div>
      </div>

      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Tranding</h3>
        </div>

        {[1, 2, 3, 4, 5].map(i => (
          <div className="d-flex mb-3" key={i}>
            <img src={`img/news-100x100-${i}.jpg`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} alt="news" />
            <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
              <div className="mb-1" style={{ fontSize: '13px' }}>
                <a href="#">Technology</a>
                <span className="px-1">/</span>
                <span>January 01, 2045</span>
              </div>
              <a className="h6 m-0" href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
            </div>
          </div>
        ))}
      </div>

      <div className="pb-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Tags</h3>
        </div>
        <div className="d-flex flex-wrap m-n1">
          {["Politics", "Business", "Corporate", "Sports", "Health", "Education", "Science", "Technology", "Foods", "Entertainment", "Travel", "Lifestyle"].map((tag, idx) => (
            <a key={idx} href="#" className="btn btn-sm btn-outline-secondary m-1">{tag}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
