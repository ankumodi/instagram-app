const Bag = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-md-6 p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>

          {/* Vertical divider with OR */}
          <div className="col-md-1 d-flex justify-content-center align-items-center">
            <div className="border-start h-100 position-relative">
              <div className="position-absolute top-50 start-50 translate-middle text-muted fw-bold">
                OR
              </div>
            </div>
          </div>

          <div className="col-md-5 d-flex align-items-center justify-content-center bg-light p-4">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-pencil-square me-2"></i> Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bag;
