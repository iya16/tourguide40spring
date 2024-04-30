import React, { Component } from 'react'
// import React from 'react';

class HayileResort extends Component {
  render() {
    return (
      <div>
         <div className="content">
          <div className="container">
            <h1 className="text-center text-success display-1 fst-italic fw-bold">  Hayile Resort</h1>
            <img src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/SZLs-haile-resorts-outdoor5.jpg"
              alt="" className="img-fluid rounded mx-auto d-block" />
            <div className="row">
              <div className="p-3 bg-light rounded-top rounded-end border-info">
                <h1 className="text-center text-success fst-italic fw-bold"> OUR AWESOME SERVICES </h1>
              </div>
              <div className="col">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                  <h4 className="text-center text-danger p-3 bg-light rounded-lg ">Meeting Hell</h4>
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/ti5O-haile-resorts-meetingHell1.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className="text-success text-center text-black">Swimming Pool</h5>
                        <p className="text-black">
                          {" "}
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/oYhx-haile-resorts-meetingHell2.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className="text-success text-center text-black">Swimming Pool</h5>
                        <p className="text-black">
                          {" "}
                          Some representative placeholder content for the second
                          slide{" "}
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/ZKtE-haile-resorts-meetingHell3.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5 className="text-success text-center text-black">Swimming Pool</h5>
                        <p className="text-black">
                          {" "}
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>


              <div className="col">

                <h3 className="text-center text-danger p-3 bg-light rounded-lg " id="meeting">Meeting Hell</h3>
                <div
                  id="carouselExampleCaptions1"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions1"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions1"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/43nq-haile-resorts-pool1.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/BDQK-haile-resorts-pool2.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the second
                          slide{" "}
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/9H8U-haile-resorts-pool.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            {/* the second one here */}
            <div className="row">
              <div className="col">
                <h3 className="text-center text-danger p-3 bg-light rounded-lg " id="meeting">Meeting Hell</h3>
                <div
                  id="carouselExampleCaptions2"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions2"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions2"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions2"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/43nq-haile-resorts-pool1.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/BDQK-haile-resorts-pool2.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the second
                          slide{" "}
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/9H8U-haile-resorts-pool.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions2"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>


              {/* the new one */}
              <div className="col">

                <h3 className="text-center text-danger p-3 bg-light rounded-lg " id="meeting">Meeting Hell</h3>
                <div
                  id="carouselExampleCaptions3"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions3"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions3"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions3"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/43nq-haile-resorts-pool1.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the first
                          slide.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/BDQK-haile-resorts-pool2.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the second
                          slide{" "}
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="https://uploads.codesandbox.io/uploads/user/3922daae-aa0d-4b76-93c8-4531ad83d340/9H8U-haile-resorts-pool.jpg"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>
                          {" "}
                          Some representative placeholder content for the third
                          slide.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions1"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions3"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>



          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="text-center p-3 border rounded">
                <br />
                <div>
                  <p className="text-center text-black fst-italic" id="paragraphOne">
                    Haile-Arba Minch is a 107 room four-star resort located at a grand
                    view overlooking the twin lakes of Abaya and Chamo along the beautiful evergreen
                    vegetation and chain of mountains that form the most beautiful pattern.
                    Haile-Arba Minch is an all-inclusive concept that provides five-star services to its guests.
                    Our new resort features food and beverage outlets on viewpoints;
                    complete health club and wellness center, conference and wedding venue,
                    outdoor activities with kid’s playground and several other facilities.

                  </p>
                </div>
              </div>
              <div className="  p-3 border rounded">
                <br />
                <p className="bold"> Our destinations are often visited by: –</p>
                <ul className="  justify-content-between">
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Business and Leisure travelers</li>
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Family vacationers</li>
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Couple retreat and honeymooners</li>
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Meeting and event planners</li>
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Sports lovers and wellness travelers</li>
                  <li className="list-unstyled   justify-content-between list-block-item align-items-center">Researchers</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    )
  }
}
export default HayileResort;