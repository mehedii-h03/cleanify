import { MdArrowForwardIos } from "react-icons/md";

type TSectionHeaderProps = {
  title: string;
  description?: string;
};

const SectionHeader = ({ title, description }: TSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-TPrimary text-3xl font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-[#666666] max-w-[60ch] mt-4">{description}</p>
        )}
      </div>
      <button className="primary-btn">
        View All
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SectionHeader;
