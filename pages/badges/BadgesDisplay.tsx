import Badge from "./Badge";

const BadgesDisplay: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Beginner" level={1} />
        <Badge rank="Beginner" level={2} disabled />
      </div>
      <hr className="my-10" />
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Intermediate" level={1} disabled />
        <Badge rank="Intermediate" level={2} disabled />
        <Badge rank="Intermediate" level={3} disabled />
      </div>
      <hr className="my-10" />
      <div className="flex gap-4">
        {/* Beginner badges*/}
        <Badge rank="Advanced" level={1} disabled />
        <Badge rank="Advanced" level={2} disabled />
        <Badge rank="Advanced" level={3} disabled />
      </div>
    </div>
  );
};

export default BadgesDisplay;
