import Image from "next/image";
import React from "react";

function CartTemplate() {
  return (
    <table className=" min-w-max divide-y divide-gray-200 ">
      <thead className="bg-gray-50 ">
        <tr>
          <th
            scope="col"
            className="md:px-3 px-1 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Product
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Extra
          </th>
          <th
            scope="col"
            className="md:px-3 px-1  py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Price
          </th>
          <th
            scope="col"
            className="md:px-3  px-1 py-3 text-left text-xs font-bold text-black uppercase tracking-wider"
          >
            Quantity
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
          <td className="md:px-6 py-4 whitespace-nowrap">
            <Image src="/pizza4.png" alt="product" width={30} height={30} />
          </td>
          <td className="md:px-6 py-4 whitespace-nowrap">peperoni</td>
          <td className="md:px-6 py-4 whitespace-nowrap">2</td>
          <td className="md:px-6 py-4 whitespace-nowrap">$290</td>
          <td className="md:px-6 py-4 whitespace-nowrap">2</td>
          <td className="md:px-6 py-4 whitespace-nowrap">$380</td>
        </tr>
        <tr>
          <td className="md:px-6 py-4 whitespace-nowrap">
            <Image src="/pizza4.png" alt="product" width={30} height={30} />
          </td>
          <td className="md:px-6 py-4 whitespace-nowrap">peperoni</td>
          <td className="md:px-6 py-4 whitespace-nowrap">2</td>
          <td className="md:px-6 py-4 whitespace-nowrap">$290</td>
          <td className="md:px-6 py-4 whitespace-nowrap">2</td>
          <td className="md:px-6 py-4 whitespace-nowrap">$380</td>
        </tr>
        {/* More table rows */}
      </tbody>
    </table>
  );
}

export default CartTemplate;
