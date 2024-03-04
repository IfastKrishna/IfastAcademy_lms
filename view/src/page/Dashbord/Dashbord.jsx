import React from "react";
import {
  Chip,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  PhoneIcon,
  TrashIcon,
  PlusCircleIcon,
  PaperAirplaneIcon,
  QueueListIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Table } from "../../components";
import { TABLE_ROWS } from "../../components/Student-manager/Enquires/enquiresData";
import { TABLE_HEAD } from "../../components/Student-manager/Enquires/enquiresData";

const Thead = ({ headers }) => {
  return headers.map((head) => (
    <th
      key={head}
      className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-gray-800"
    >
      {head}
    </th>
  ));
};

const Trow = ({ row }) => {
  return (
    <tr className="bg-white text-gray-700">
      <td className="px-4 py-2 border-b border-gray-200">
        {row["Enquire No"]}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">
        {row["Student Name"]}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">{row["Mobile No"]}</td>
      <td className="px-4 py-2 border-b border-gray-200">{row["Course"]}</td>
      <td className="px-4 py-2 border-b border-gray-200">
        {row["Enquire Source"]}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">
        {row["Enquire Date"]}
      </td>
      <td className="px-4 py-2 border-b border-gray-200">{row["Assign to"]}</td>
      <td className="px-4 py-2 border-b border-gray-200">
        <div className="w-max">
          <Chip
            variant="ghost"
            size="sm"
            color={
              row["Enquire Status"] === "Enrolled"
                ? "green"
                : row["Enquire Status"] === "Pending"
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
  );
};

function Dashbord() {
  return (
    <Table
      Thead={Thead} // Directly pass the component reference
      Trow={Trow} // Directly pass the component reference
      rows={TABLE_ROWS}
      cols={TABLE_HEAD}
    />
  );
}

export default Dashbord;
