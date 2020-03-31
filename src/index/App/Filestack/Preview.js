import React from "react";

export default ({ preview }) => {
  return (
    <img
      src={preview || "http://placehold.it/400x300?text=Collage"}
      className="object-fill"
    />
  );
};
