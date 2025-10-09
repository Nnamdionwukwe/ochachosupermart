function CardDisplay() {
  return (
    <div>
      <div class="container my-5">
        <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
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
    </div>
  );
}

export default CardDisplay;
