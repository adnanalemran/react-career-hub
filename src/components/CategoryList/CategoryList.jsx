const CategoryList = () => {
  return (
    <div>
      <h2 className="text-5xl text-center py-4">Job Category List</h2>
      <div className="flex justify-center gap-4">
        <button className="btn btn-secondary">Remote</button>
        <button className="btn btn-secondary">Full time</button>
      </div>
    </div>
  );
};

export default CategoryList;
