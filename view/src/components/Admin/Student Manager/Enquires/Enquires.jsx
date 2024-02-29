import React, { useState } from "react";
import {
  Card,
  CardBody,
  Breadcrumbs,
  Typography,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  PhoneIcon,
  TrashIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
  QueueListIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { TABLE_HEAD, TABLE_ROWS } from "./enquiresData.js";

function Enquires() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedBy, setSortedBy] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredAndSortedRows = TABLE_ROWS.filter((row) => {
    if (searchTerm === "") return true;
    // Filter based on search term
    return Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }).sort((a, b) => {
    // Sort based on selected column and order
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
    <Card className="my-5 mx-5 md:mx-10 p-1 rounded-sm">
      <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
        ENQUIRES
      </Typography>
      <hr className="mt-2" />
      <CardBody className="overflow-auto">
        <Breadcrumbs>
          <Link to="/enquires/new-enquire" className="opacity-60">
            New enquire
          </Link>
          <Link to="/enquires/todys-followup" className="opacity-60">
            Todys Followup
          </Link>
          <Link to="/enquires/import-enquire" className="opacity-60">
            Import Enquires
          </Link>
          <Link to="/enquires/download-template" className="opacity-60">
            Download template
          </Link>
        </Breadcrumbs>

        <div className="flex justify-between my-4">
          <div>
            <Input
              type="text"
              placeholder="Search..."
              label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              icon={<MagnifyingGlassIcon />}
            />
          </div>
          <div>
            Sort by:
            <select
              onChange={(e) => {
                setSortedBy(e.target.value);
                setAscending(true);
              }}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ml-2"
            >
              <option value="">--Select--</option>
              {TABLE_HEAD.map((head) => (
                <option key={head} value={head}>
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

        <div className="overflow-x-auto max-h-96 overflow-auto">
          <table className="w-full table-auto text-left">
            <thead className=" sticky top-0 z-10">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-gray-800"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((row, index) => (
                <tr key={row["Enquire No"]} className="bg-white text-gray-700">
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Enquire No"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Student Name"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Mobile No"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Course"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Enquire Source"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Enquire Date"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    {row["Assign to"]}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        color={
                          row["Enquire Status"] == "Enrolled"
                            ? "green"
                            : row["Enquire Status"] == "Pending"
                            ? "deep-orange"
                            : "blue-gray"
                        }
                        value={row["Enquire Status"]}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    <Menu>
                      <MenuHandler>
                        <IconButton variant="text" className="rounded-full">
                          <Bars3Icon className="h-4 w-4" />
                        </IconButton>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem>
                          <PencilSquareIcon className="h-5 w-5 pr-1.5 inline" />
                          Update Enquire
                        </MenuItem>
                        <MenuItem>
                          <PhoneIcon className="h-5 w-5 pr-1.5 inline" />
                          Follow Up
                        </MenuItem>
                        <MenuItem>
                          <TrashIcon className="h-5 w-5 pr-1.5 inline" />
                          Remove Enquire
                        </MenuItem>
                        <MenuItem>
                          <PlusCircleIcon className="h-5 w-5 pr-1.5 inline" />
                          New Admission
                        </MenuItem>
                        <MenuItem>
                          <PaperAirplaneIcon className="h-5 w-5 pr-1.5 inline" />
                          Whatsapp
                        </MenuItem>
                        <MenuItem>
                          <QueueListIcon className="h-5 w-5 pr-1.5 inline" />
                          View Details
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
      </CardFooter>
    </Card>
  );
}

export default Enquires;
