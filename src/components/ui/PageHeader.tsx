type TPageHeaderProps = {
  title: string;
  description: string;
};

const PageHeader = ({ title, description }: TPageHeaderProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-TPrimary text-2xl md:text-3xl font-bold">{title}</h3>
      <div>
        <h5 className="text-[#414141] font-bold">Showing 1–12 of 24 items</h5>
        <p className="text-[#949494]">{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
