type TPageHeaderProps = {
  title: string;
  primaryDesc: string;
  secondaryDesc: string;
};

const PageHeader = ({
  title,
  primaryDesc,
  secondaryDesc,
}: TPageHeaderProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-TPrimary text-2xl md:text-3xl font-bold">{title}</h3>
      <div className="space-y-2">
        <h5 className="text-[#414141] font-bold">{primaryDesc}</h5>
        <p className="text-[#949494]">{secondaryDesc}</p>
      </div>
    </div>
  );
};

export default PageHeader;
