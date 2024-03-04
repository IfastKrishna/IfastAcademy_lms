import React, { useState } from "react";
import { Typography, Button, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Table({ rows = [], cols = [], Trow, Thead }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredAndSortedRows = rows
    .filter((row) => {
      if (searchTerm === "") return true;
      return Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (sortedBy) {
        const factor = ascending ? 1 : -1;
        return factor * a[sortedBy].toString().localeCompare(b[sortedBy]);
      }
      return 0;
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedRows.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between items-center my-4 flex-col lg:flex-row">
        <div className="mb-4 lg:mb-0">
          <Input
            type="text"
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
            icon={<MagnifyingGlassIcon />}
          />
        </div>
        <div className="mb-4 lg:mb-0">
          Sort by:
          <select
            onChange={(e) => {
              setSortedBy(e.target.value);
              setAscending(true);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ml-2"
          >
            <option value="">--Select--</option>
            {cols.map((head, index) => (
              <option key={index} value={head}>
                {head}
              </option>
            ))}
          </select>
          <Button
            onClick={() => setAscending(!ascending)}
            size="sm"
            className="ml-2"
          >
            {ascending ? "Ascending" : "Descending"}
          </Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead className="sticky top-0 z-10 bg-white">
            <tr>
              {Thead ? <Thead key="table-header" headers={cols} /> : null}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) =>
              Trow ? <Trow key={index} row={row} /> : null
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of{" "}
          {Math.ceil(filteredAndSortedRows.length / itemsPerPage)}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredAndSortedRows.length / itemsPerPage)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Table;
