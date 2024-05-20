const Page = async () => {
  // TODO have to convert it to server side rendering

  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store"
  });
  const products = await res.json();

  console.log(products)

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
            {products?.map((product, i) => <tr key={product._id} className="border">
              <th>
                <p>{i + 1}</p>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.images.image1} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <p>Sufexcel</p>
              </td>
              <td>sf3232ss3</td>
              <td>{product.price}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
