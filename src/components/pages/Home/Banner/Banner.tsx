import Container from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import BannerInfo from "./BannerInfo";

const Banner = () => {
  return (
    <section className="mb-24">
      <div className="relative h-full py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/disinfection-equipment-table_23-2148577795.jpg?t=st=1715970149~exp=1715973749~hmac=8f703edd9b9b63faee37c6797c4ebb56010c17b255d297f2050b94aaa9b27ddd&w=900)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <Container>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
            <div className="max-w-full ">
              <BannerInfo />
              <BannerCarousel />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
