import Badge from "./Badge";

const BadgesDisplay: React.FC<{ selected: string }> = ({ selected }) => {
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Beginner" course={selected} level={1} />
        <Badge rank="Beginner" course={selected} level={2} disabled />
      </div>
      <hr className="my-10" />
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Intermediate" course={selected} level={1} disabled />
        <Badge rank="Intermediate" course={selected} level={2} disabled />
        <Badge rank="Intermediate" course={selected} level={3} disabled />
      </div>
      <hr className="my-10" />
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Advanced" course={selected} level={1} disabled />
        <Badge rank="Advanced" course={selected} level={2} disabled />
        <Badge rank="Advanced" course={selected} level={3} disabled />
      </div>
    </div>
  );
};

export default BadgesDisplay;
