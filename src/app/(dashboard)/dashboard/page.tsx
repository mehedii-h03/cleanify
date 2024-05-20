const Page = () => {
  // TODO have to make the data dynamic

  return (
    <div>
      <h1 className="text-TPrimary font-bold text-3xl">All Products</h1>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#9A9A9A] text-white text-base">
              <th>Sl No</th>
              <th>Items</th>
              <th>Brand</th>
              <th>Product Id</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="border">
              <th>
                <p>1</p>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                <p>Renuar</p>
              </td>
              <td>Purple</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
