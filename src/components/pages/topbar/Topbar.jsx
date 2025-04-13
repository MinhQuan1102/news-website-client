import React from 'react';


const Topbar = () => {

    return (
        <div className="topbar container-fluid">
            <div className="row align-items-center bg-light px-lg-5">
                <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between">
                        <div className="bg-primary text-white text-center py-2" style={{ width: "100px" }}>Tranding</div>
                        <div className="owl-carousel owl-carousel-1 tranding-carousel position-relative d-inline-flex align-items-center ml-3" style={{ width: "calc(100% - 100px)", paddingLeft: "90px" }}>
                            <div className="text-truncate"><a className="text-secondary" href="">Labore sit justo amet eos sed, et sanctus dolor diam eos</a></div>
                            <div className="text-truncate"><a className="text-secondary" href="">Gubergren elitr amet eirmod et lorem diam elitr, ut est erat Gubergren elitr amet eirmod et lorem diam elitr, ut est erat</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right d-none d-md-block">
                    Monday, January 01, 2045
                </div>
            </div>
            <div className="row align-items-center py-2 px-lg-5">
                <div className="col-lg-4">
                    <a href="/home" className="navbar-brand d-none d-lg-block">
                        <h1 className="m-0 display-5 text-uppercase"><span className="text-primary">News</span>Room</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar