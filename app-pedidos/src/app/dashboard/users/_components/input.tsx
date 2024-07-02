
export function InfoItem({ label, value }) {
    return (
      <div className="flex flex-col space-y-1 p-3 bg-gray-50 rounded-lg">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        <p className="text-lg text-gray-700">{value}</p>
      </div>
    );
  }