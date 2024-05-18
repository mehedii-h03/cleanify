import Container from "@/components/ui/Container";


const ProductDescription = () => {
    return (
        <Container>
            <h4 className="#696969 text-2xl font-bold">Description</h4>
            <div className="mt-10">
                <p className="text-[#414141] text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
                <ul className="mt-7 text-[15px] text-[#414141] list-disc space-y-1 px-5">
                    <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
                    <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
                </ul>
            </div>
        </Container>
    );
};

export default ProductDescription;