import Image from "next/image";
import React from "react";

function OrderTamplate() {
  return (
    <table className=" min-w-max divide-y divide-gray-200 ">
      <thead className="bg-gray-50 ">
        <tr>
          <th
            scope="col"
            className="md:px-3 px-1 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Order Id
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Customer
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Address
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Total
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {/* Table rows go here */}
        <tr>
          <td className="md:px-6 py-4 whitespace-nowrap">hdlfkhsalwleenq</td>
          <td className="md:px-6 py-4 whitespace-nowrap">0906778899</td>
          <td className="md:px-6 py-4 whitespace-nowrap">10 johnson street</td>
          <td className="md:px-6 py-4 whitespace-nowrap">$290</td>
        </tr>
        <tr>
          <td className="md:px-6 py-4 whitespace-nowrap">Payment</td>
          <td className="md:px-6 py-4 whitespace-nowrap">Preparing</td>
          <td className="md:px-6 py-4 whitespace-nowrap">On the way</td>
          <td className="md:px-6 py-4 whitespace-nowrap">Delivered</td>
        </tr>
        {/* More table rows */}
      </tbody>
    </table>
  );
}

export default OrderTamplate;
