import React from "react";

const Filter = ({ onFilterChange }) => {
  const [title, setTitle] = React.useState("");
  const [rating, setRating] = React.useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ title, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
