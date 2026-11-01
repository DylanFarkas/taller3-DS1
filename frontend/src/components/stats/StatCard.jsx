export default function StatCard({ title, value, icon }) {
    return (
      <div className="p-5 rounded-xl bg-black text-white mb-10">
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-100">{title}</p>
            <span>{icon}</span>
        </div>
        <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
      </div>
    );
  }