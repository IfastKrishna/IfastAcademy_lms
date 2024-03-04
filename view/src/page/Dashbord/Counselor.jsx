import React from "react";
import { DashbordCard } from "../../components";
import { Bars3Icon, ServerStackIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

function Counselor() {
  const thClass =
    "p-2 border-b border-gray-200 bg-gray-100 text-gray-800 text-sm";

  const followData = [];
  return (
    <div className="w-full p-2 md:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <DashbordCard
          label="Todys Admissions"
          icon={<ServerStackIcon className="h-6 w-6 mr-3 text-gray-500" />}
        />
        <DashbordCard
          label="Todys Enquires"
          icon={<ServerStackIcon className="h-6 w-6 mr-3 text-gray-500" />}
        />
        <DashbordCard
          label="Pending Follow-Ups"
          icon={<ServerStackIcon className="h-6 w-6 mr-3 text-gray-500" />}
        />
        <DashbordCard
          label="Overdue Follow-Ups"
          icon={<ServerStackIcon className="h-6 w-6 mr-3 text-gray-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="shadow-md rounded-md p-2 overflow-auto">
          <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
            Todys Follow-ups
          </Typography>
          <hr className="mt-2 border-b border-b-gray-300" />
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className={thClass}>LEAD NO</th>
                <th className={thClass}>STUDENT NAME</th>
                <th className={thClass}>MOBILE NO</th>
                <th className={thClass}>INTEREST</th>
                <th className={thClass}>FOLLOW UP DATE</th>
                <th className={thClass}>#</th>
              </tr>
            </thead>
            <tbody>
              {followData.map((row) => (
                <tr>
                  <td className={thClass}>{row["Lead No"]}</td>
                  <td className={thClass}>{row["Student Name"]}</td>
                  <td className={thClass}>{row["Mobile No"]}</td>
                  <td className={thClass}>{row["Interest"]}</td>
                  <td className={thClass}>{row["Follow Up Date"]}</td>
                  <td className={thClass}>
                    <Bars3Icon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="shadow-md rounded-md p-2 overflow-auto">
          <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
            Overdue Follow-ups
          </Typography>
          <hr className="mt-2 border-b border-b-gray-300" />
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className={thClass}>LEAD NO</th>
                <th className={thClass}>STUDENT NAME</th>
                <th className={thClass}>MOBILE NO</th>
                <th className={thClass}>INTEREST</th>
                <th className={thClass}>FOLLOW UP DATE</th>
                <th className={thClass}>#</th>
              </tr>
            </thead>
            <tbody>
              {followData.map((row) => (
                <tr>
                  <td className={thClass}>{row["Lead No"]}</td>
                  <td className={thClass}>{row["Student Name"]}</td>
                  <td className={thClass}>{row["Mobile No"]}</td>
                  <td className={thClass}>{row["Interest"]}</td>
                  <td className={thClass}>{row["Follow Up Date"]}</td>
                  <td className={thClass}>
                    <Bars3Icon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-2 rounded-md shadow-md mt-5">
        <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
          Birthdays
        </Typography>
        <hr className="mt-2 border-b border-b-gray-300" />
        <table className="w-full">
          <thead className="bg-gray-300">
            <tr>
              <th className={thClass}>STUDENT NAME</th>
              <th className={thClass}>MOBILE NO</th>
              <th className={thClass}>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {followData.map((row) => (
              <tr>
                <td className={thClass}>{row["name"]}</td>
                <td className={thClass}>{row["mobileNo"]}</td>
                <td className={thClass}>{row["email"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Counselor;
