import React from 'react'

const Banner = () => {
    return (
        <div className='container mt-5' style={{ background: '#141720' }}>
            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col">
                    <div className="card h-100 border-0 bg-transparent text-white">
                        <h1 className="card-title fw-bold text-white" style={{ fontSize: "65px" }}>Banking<br />made <span className='text-success'>simply</span> <br />for your</h1>
                        <p className="card-text mt-3 fw-bold">A bank system oversees transactions, provides financial services, and supports money flow in the economy.</p>

                        <div className="d-grid gap-2 d-sm-block">
                            <button className="btn py-2 fw-bold text-white me-md-2 px-5 rounded-pill border-0" style={{ background: 'linear-gradient(to right, #2BC96D, #378B29)' }} type="button">Get Started</button>
                            <button className="btn py-2 btn-primary px-5 rounded-pill border-0 fw-bold" style={{ background: 'linear-gradient(to right, #2BC96D , #228B22)' }} type="button"><i className="bi bi-youtube"> Watch Video</i></button>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0">
                        <img src="https://drive.google.com/file/d/1s6v2m7kJTNw-n3JVKtR8pJLWyLcyCFGz/view?usp=sharing" className='w-100' alt="card image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner