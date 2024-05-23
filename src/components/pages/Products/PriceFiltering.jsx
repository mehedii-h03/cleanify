const PriceFiltering = () => {
    return (
        <div className="border border-[#E2E2E2] py-10 px-[30px]">
            <h3 className="text-xl border-s-4 border-[#2D2D2D] ps-4">
                Price Range
            </h3>
            <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-4 text-[#414141] w-52">
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox size-4 rounded-sm border-[#414141]"
                    />
                    <p>$20.00 - $ 50.00</p>
                </li>
                <li className="flex items-center gap-4 text-[#414141] w-52">
                    <input
                        type="checkbox"
                        className="checkbox size-4 rounded-sm border-[#414141]"
                    />
                    <p>$20.00 - $ 50.00</p>
                </li>
                <li className="flex items-center gap-4 text-[#414141] w-52">
                    <input
                        type="checkbox"
                        className="checkbox size-4 rounded-sm border-[#414141]"
                    />
                    <p>$20.00 - $ 50.00</p>
                </li>
                <li className="flex items-center gap-4 text-[#414141] w-52">
                    <input
                        type="checkbox"
                        className="checkbox size-4 rounded-sm border-[#414141]"
                    />
                    <p>$20.00 - $ 50.00</p>
                </li>
            </ul>
        </div>
    );
};

export default PriceFiltering;