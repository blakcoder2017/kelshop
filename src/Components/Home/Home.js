import React from "react";
import Banner1 from "../../banner1.jpg";
import Banner2 from "../../banner2.jpg";
import Banner3 from "../../banner3.jpg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} class="d-block w-100" height="500px" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={Banner2}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src={Banner3} class="d-block w-100" height="500px" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="section-background">
        <div class="text-center container py-5">
          <h4 class="mt-4 mb-5">
            <strong>Bestsellers</strong>
          </h4>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-success ms-2">Eco</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-success ms-2">Eco</span>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100"></div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">$61.99</h6>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-zoom ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
                    class="w-100"
                  />
                  <a href="#!">
                    <div class="mask">
                      <div class="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span class="badge bg-primary ms-2">New</span>
                          <span class="badge bg-success ms-2">Eco</span>
                          <span class="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div class="hover-overlay">
                      <div className="mask product-background"></div>
                    </div>
                  </a>
                </div>
                <div class="card-body">
                  <a href="" class="text-reset">
                    <h5 class="card-title mb-3">Product name</h5>
                  </a>
                  <a href="" class="text-reset">
                    <p>Category</p>
                  </a>
                  <h6 class="mb-3">
                    <s>$61.99</s>
                    <strong class="ms-2 text-danger">$50.99</strong>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
