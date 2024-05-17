import Container from "@/components/ui/Container";

// TODO have to use next image component

const TopCategoriesContainer = () => {
  const imageLink =
    "https://img.freepik.com/free-photo/disinfection-equipment-table_23-2148577794.jpg?t=st=1715979257~exp=1715982857~hmac=ba04bfe0b756396473f009edf027aca7d5b57197a0ca9c4ea8d927028f159be2&w=740";
  return (
    <Container className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-4 row-span-2 rounded-[14px]">
        <img
          src={imageLink}
          alt=""
          className="w-full h-full object-cover rounded-[14px]"
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[14px]">
        <img src={imageLink} className="rounded-[14px]" />
      </div>
      <div className="col-span-12 lg:col-span-4 md:col-span-6 row-span-2 rounded-[14px]">
        <img
          src={imageLink}
          alt=""
          className="w-full h-full object-cover rounded-[14px]"
        />
      </div>
      <div className="lg:col-span-4 col-span-12 rounded-[14px]">
        <img src={imageLink} className="rounded-[14px]" />
      </div>
    </Container>
  );
};

export default TopCategoriesContainer;
