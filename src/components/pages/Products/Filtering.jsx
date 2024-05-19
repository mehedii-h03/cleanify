const Filtering = () => {
    return (
        <div className="space-y-6">
            {/* Price Filtering */}
            <div className="border border-[#E2E2E2] py-10 px-[30px]">
                <h3 className="text-xl border-s-4 border-[#2D2D2D] ps-4">Price  Range</h3>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" defaultChecked className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>$20.00 - $ 50.00</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>$20.00 - $ 50.00</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>$20.00 - $ 50.00</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>$20.00 - $ 50.00</p>
                    </li>
                </ul>
            </div>
            {/* Category Filtering */}
            <div className="border border-[#E2E2E2] py-10 px-[30px]">
                <h3 className="text-xl border-s-4 border-[#2D2D2D] ps-4">Categories / Brands</h3>
                <ul className="mt-6 space-y-4">
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                    <li className="collapse collapse-arrow w-52">
                        <input type="checkbox" />
                        <div className="collapse-title min-h-0 ps-0 pb-0 pt-1 after:top-10">
                            Lorem Ipsum
                        </div>
                        <div className="collapse-content p-0 pt-1">
                            <p>hello</p>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Ratings Filtering */}
            <div className="border border-[#E2E2E2] py-10 px-[30px]">
                <h3 className="text-xl border-s-4 border-[#2D2D2D] ps-4">Ratings</h3>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" defaultChecked className="checkbox size-4 rounded-sm border-[#414141] " />
                        <p>1 star</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>2 star</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>3 star</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>4 star</p>
                    </li>
                    <li className="flex items-center gap-4 text-[#414141] w-52">
                        <input type="checkbox" className="checkbox size-4 rounded-sm border-[#414141]" />
                        <p>5 star</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filtering;