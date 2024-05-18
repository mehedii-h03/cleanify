import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

type TSectionHeaderProps = {
  title: string;
  description?: string;
  url?: string;
};

const SectionHeader = ({
  title,
  description,
  url = "/",
}: TSectionHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h3 className="text-TPrimary text-2xl md:text-3xl font-bold">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[#666666] max-w-[60ch] mt-4">
            {description}
          </p>
        )}
      </div>
      <Link href={url} className="primary-btn">
        View All
        <MdArrowForwardIos />
      </Link>
    </div>
  );
};

export default SectionHeader;
