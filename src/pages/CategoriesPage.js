import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categories/categoriesSlice";

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { items: categories, status } = useSelector(s => s.categories);

  useEffect(() => { if (status === "idle") dispatch(fetchCategories()); }, [dispatch, status]);

  if (status === "loading") return <div className="container mt-5">Loading categories...</div>;

  return (
    <div className="container mt-4">
      <h3>Categories</h3>
      <ul>
       {categories.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
};

export default CategoriesPage;
