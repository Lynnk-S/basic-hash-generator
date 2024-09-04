const HashResult = ({ label, value }) => {
  return (
    <div className="mb-4">
      <p className="text-gray-800 font-semibold">
        <strong>{label}:</strong>
        <span className="block mt-1 bg-gray-100 p-2 rounded text-sm text-gray-700 break-all overflow-x-auto">
          {value || "N/A"}
        </span>
      </p>
    </div>
  );
};

export default HashResult;
