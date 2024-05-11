import React, { useEffect, useState } from "react";
import Table from "./common/Table/Table";
import _ from "lodash";
import Search from "./common/Table/Search";
import PageSizeDropdown from "./common/Table/PageSizeDropdown";
import Dropdown from "./common/Dropdown";

const ProductTable = ({
  products,
  options,
  selectedPageSize,
  onSizeChange,
  searchCategory,
}) => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearchProducts(products);
  }, [products]);
  const columns = [
    { path: "title", label: "TITLE", visible: true },
    { path: "category", label: "CATEGORY", visible: true },
    { path: "brand", label: "BRAND", visible: true },
    { path: "price", label: "PRICE", visible: true },
    { path: "stock", label: "STOCK", visible: true },
    { path: "rating", label: "RATING", visible: true },
    // { path: "username", label: "USERNAME" },
    // { path: "bloodGroup", label: "BLOODGROUP" },
    // { path: "eyeColor", label: "EYECOLOR" },
  ];

  const paths = _.map(columns, "path");

  const searchProduct = (value) => {
    console.log(searchProducts);
    return searchProducts.filter((product) => {
      let a = _.pick(product, paths);
      return Object.values(a).some((field) => {
        return field.toString().toLowerCase().includes(value.toLowerCase());
      });
    });
  };

  const computedProducts = searchProduct(search);

  const handleSearchButtonClick = (value) => {
    setSearch(value);
  };

  const handleSelect = (value) => {
    searchCategory(value);
  };

  const handleFilter = (field) => {
    const filtercolumn = columns
      .map((col) => {
        if(field == col.label)
          col.visible = !col.visible;
        return col;
      })
  };

  return (
    <>
      <div className="table-wrapper">
        <div className="table-filter">
          <div>
            <PageSizeDropdown
              options={options}
              selectedPageSize={selectedPageSize}
              onSizeChange={onSizeChange}
            />
          </div>
          <div>
            <Search value={search} onSearch={handleSearchButtonClick} />
          </div>
        </div>
        <div>
          <Dropdown options={["All", "Laptops"]} onSelect={handleSelect} />
        </div>
      </div>
      <Table
        columns={columns}
        data={computedProducts}
        // sortColumn={sortColumn}
        // onSort={onSort}
      />
    </>
  );
};

export default ProductTable;
