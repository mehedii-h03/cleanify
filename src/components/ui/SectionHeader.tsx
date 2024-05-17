import { MdArrowForwardIos } from "react-icons/md";

type TSectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: TSectionHeaderProps) => {
  return (
    <div className="flex justify-between mb-8">
      <h3 className="text-TPrimary text-3xl font-bold">{title}</h3>
      <button className="primary-btn">
        View All
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default SectionHeader;
