import React from "react";

interface SpecificationsTableProps {
  specifications: Record<string, string>;
}

const SpecificationsTable: React.FC<SpecificationsTableProps> = ({
  specifications,
}) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5">
      <table className="table table-zebra w-full">
        <tbody>
          {Object.entries(specifications).map(([key, value], index) => (
            <tr key={index}>
              <th
                className="bg-base-300 font-bold capitalize"
                style={{ width: "20%" }}
              >
                {key}
              </th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;
