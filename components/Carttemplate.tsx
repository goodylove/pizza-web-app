import Image from "next/image";
import React from "react";

function CartTemplate() {
  return (
    <table className="table-auto w-2/3 text-justify">
      <thead className="border-b ">
        <tr className="p-2">
          <th>Product</th>
          <th>Name</th>
          <th>Extra</th>
          <th>Price</th>
          <th>Quanity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="p-2">
          <td>
            <Image
              src="/pizza4.png"
              alt="product-image"
              width={50}
              height={50}
            />
          </td>
          <td>Buga</td>
          <td>none</td>
          <td>$50</td>
          <td>3</td>
          <td>$150</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTemplate;
