type StatCardProps = {
  title: string;
  value: number;
  color: string;
};

function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className={`mt-4 text-4xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;