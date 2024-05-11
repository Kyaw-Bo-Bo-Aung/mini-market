import React, { useContext, useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import ProductTable from "../components/ProductTable";
import Pagination from "../components/common/Pagination/Pagination";
import _ from "lodash";
import Loading from "../components/common/Loading";
import { ProductContext } from "../context/ProductProvider";

const Product = () => {
  const { products, handleProducts } = useContext(ProductContext);
  // states
  const [state, setState] = useState({
    currentPage: 1,
    pageSizeOption: [5, 10, 20, 50],
    pageSize: 5,
    search: null,
  });

  // fetching data
  const generateURL = (pageSize, skip, search) => {
    const query = search == "All" ? false : search;
    if (query) {
      return `https://dummyjson.com/products/category/${query}`;
    }
    return `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`;
  };

  const { data, loading, error, fetchData } = useFetchData(
    generateURL(
      state.pageSize,
      (state.currentPage - 1) * state.pageSize,
      state.search
    )
  );

  useEffect(() => {
    if (data) {
      handleProducts(data);
    }
  }, [data]);

  // event handlers
  const handlePageChange = (page) => {
    setState({ ...state, currentPage: page });
  };

  const handlePageSizeChange = (size) => {
    setState({ ...state, pageSize: size });
  };

  const handleSearchCategory = (value) => {
    setState({ ...state, search: value });
  };

  if (!products) return <Loading />;

  let { products: response, total, skip, limit } = products;

  return (
    <main>
      <h1>Products</h1>
      {response && (
        <ProductTable
          options={state.pageSizeOption}
          selectedPageSize={state.pageSize}
          searchCategory={handleSearchCategory}
          onSizeChange={handlePageSizeChange}
          products={response}
        />
      )}
      {products && (
        <Pagination
          itemsCount={total}
          pageSize={limit}
          currentPage={state.currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
};

export default Product;
