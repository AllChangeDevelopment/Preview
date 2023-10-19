import React from 'react'
import './App.css'

export default function App() {
  return (
      <div style={{fontFamily: "Figtree"}}>
          <div className="p-4 d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
              <div className="text-center">
                  <h1><strong>All Change - Coming Soon</strong></h1>
                  <h2>A short showcase of our progress</h2>

              </div>
          </div>

          <div className="p-4 bg-dark-subtle text-black text-center">
              <span className="fs-2">"Providing an immersive experience step by step, from the smaller picture to the bigger picture"</span>
              <br /><span className="fs-4">- @jackiehades, Project Leader</span>
          </div>

          <div className="p-4 bg-secondary text-black justify">
              <h1 className="text-center mt-5 mb-5"><strong>Showcase</strong></h1>
              <div className="container text-center">
                  <div className="row mb-5">
                      <div className="col">
                          <div className="img-blur">
                              <img className="img-fluid rounded-4" src="signals.png" />
                          </div>
                      </div>
                      <div className="col d-flex align-items-center justify-content-center">
                          <div>
                              <span className="fs-2">Signals</span>
                              <br />
                              <span className="fs-4">An example of our signalling in a weathered state providing a consistent style across the game.</span>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-5">
                      <div className="col d-flex align-items-center justify-content-center">
                          <div>
                              <span className="fs-2">Points</span>
                              <br />
                              <span className="fs-4">An example of our pointwork and how we aim to get every last detail. From every power ramp, to every rail.</span>
                          </div>
                      </div>
                      <div className="col">
                          <div className="img-blur">
                              <img className="img-fluid rounded-4" src="points.png" />
                          </div>
                      </div>
                  </div>
                  <div className="row mb-5">
                      <div className="col">
                          <div className="img-blur">
                              <img className="img-fluid rounded-4" src="stations.png" />
                          </div>
                      </div>
                      <div className="col d-flex align-items-center justify-content-center">
                          <div>
                              <span className="fs-2">Stations</span>
                              <br />
                              <span className="fs-4">An example of one our stations from Chassis Testing.</span>
                          </div>
                      </div>
                  </div>
                  <div className="row mb-5">
                      <div className="col d-flex align-items-center justify-content-center">
                          <div>
                              <span className="fs-2">Signage</span>
                              <br />
                              <span className="fs-4">An Arnos Grove station sign in the evening showing an example of how weathering can be used to create immersion.</span>
                          </div>
                      </div>
                      <div className="col">
                          <div className="img-blur">
                              <img className="img-fluid rounded-4" src="roundel.png" />
                          </div>
                      </div>
                  </div>

              </div>

              <div className="text-center mt-5 mb-3">
                  <div className="img-blur">
                      <img className="img-fluid rounded-4" src="dmi.png" />
                  </div>
              </div>
              <div className="text-center mt-xxl-5 mb-5">
                <span className="fs-3 text-center">"The DMI looks amazing, one of our best models so far in the game"  </span>
                  <br /><span className="fs-5 text-center">- @redredstone, Programmer</span>
              </div>

              <div className="text-center mb-5">
                  <span className="fs-3 text-center">"damn this shi looks sweet"</span>
                  <br /><span className="fs-5 text-center">- @blaz3d, Supporter</span>
              </div>

          </div>
      </div>
  )
}
