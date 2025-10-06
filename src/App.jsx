// import bootstrap from "bootstrap";

// // Functions first
// import "../node_modules/bootstrap/scss/functions";

// // Variable overrides second
// // $primary: #;
// // $enable-shadows: true;
// // $prefix: "mo-";

// // Required Bootstrap imports
// import "../node_modules/bootstrap/scss/variables";
// import "../node_modules/bootstrap/scss/variables-dark";
// import "../node_modules/bootstrap/scss/maps";
// import "../node_modules/bootstrap/scss/mixins";
// import "../node_modules/bootstrap/scss/root";
// // Optional components
// import "../node_modules/bootstrap/scss/utilities";
// import "../node_modules/bootstrap/scss/reboot";
// import "../node_modules/bootstrap/scss/containers";
// import "../node_modules/bootstrap/scss/grid";
// import "../node_modules/bootstrap/scss/helpers";
// import "../node_modules/bootstrap/scss/utilities/api";

import "./App.css";

function App() {
  return (
    <>
      <header class="p-3 bg-white text-black">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none me-3"
            >
              <span class="fs-4">Ochacho</span>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-black">
                  About
                </a>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                class="form-control form-control-dark text-bg-black"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end d-flex align-items-center">
              <button type="button" class="btn btn-outline-black me-2">
                <i class="bi bi-person"></i>
              </button>
              <button type="button" class="btn btn-warning position-relative">
                <i class="bi bi-cart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3<span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="container my-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div class="col">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x300.png?text=Product+1"
                class="card-img-top"
                alt="Product 1"
              />
              <div class="card-body">
                <h5 class="card-title">Product Name 1</h5>
                <p class="card-text text-success fw-bold">$29.99</p>
              </div>
              <div class="card-footer d-grid">
                <a href="#" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x300.png?text=Product+2"
                class="card-img-top"
                alt="Product 2"
              />
              <div class="card-body">
                <h5 class="card-title">Product Name 2</h5>
                <p class="card-text text-success fw-bold">$49.99</p>
              </div>
              <div class="card-footer d-grid">
                <a href="#" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x300.png?text=Product+3"
                class="card-img-top"
                alt="Product 3"
              />
              <div class="card-body">
                <h5 class="card-title">Product Name 3</h5>
                <p class="card-text text-success fw-bold">$19.99</p>
              </div>
              <div class="card-footer d-grid">
                <a href="#" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/400x300.png?text=Product+4"
                class="card-img-top"
                alt="Product 4"
              />
              <div class="card-body">
                <h5 class="card-title">Product Name 4</h5>
                <p class="card-text text-success fw-bold">$89.99</p>
              </div>
              <div class="card-footer d-grid">
                <a href="#" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
