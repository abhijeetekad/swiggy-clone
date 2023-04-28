import React from "react";
import "./Shimmer.css";
const Shimmer = () => (
  <dv className="shimmer">
    {Array(10)
      .fill()
      .map(() => {
        return (
          <div className="ShimmerCard">
            <div className="ShimmerName">Loading...</div>
            <div className="ShimmerLocation">Loading...</div>

            <div className="ShimmerInfo">
              <p>Loading...</p>
            </div>
          </div>
        );
      })}
  </dv>
);

export { Shimmer };
