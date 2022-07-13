import React from "react";

const Posts = ({ loading, posts }) => {
  // if (loading) {
  //   return <h2> Loading...</h2>;
  // }

  return (
    <div className="card">
      {posts.map((rota) => (
        <div className="bg-warning card-body  m-1 list-group-item d-flex justify-content-between align-items-start">
          <span>
            <h5 className="card-title">{rota.jobTitle}</h5>
            <p className="card-text">
              {" "}
              {rota.startTime} - {rota.endTime}
            </p>
          </span>

          <span class="badge bg-primary ">
            <ul className="list-group">
              <li className="list-group-item bg-primary">
                {" "}
                1 of {rota.availableSpots} slots filled{" "}
              </li>
              <li className="list-group-item bg-primary">
                Sign UP
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value=""
                  aria-label="..."
                />
              </li>
            </ul>
          </span>
        </div>
      ))}{" "}
    </div>
  );
};

export default Posts;
