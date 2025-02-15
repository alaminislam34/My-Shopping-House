// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="h-14 bg-red-500 w-6 rounded-lg inline-block"></span>

      <p className="font-black text-red-500 text-base lg:text-xl">{title}</p>
    </div>
  );
};

export default SectionTitle;
