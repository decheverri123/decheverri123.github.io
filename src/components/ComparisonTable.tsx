import React from "react";

interface SpecRow {
  feature: string;
  prima: string;
  secunda: string;
  terza: string;
}

interface ComparisonTableProps {
  specifications: SpecRow[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  specifications,
}) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 mb-8 shadow-xl">
      <table className="w-full border-collapse xs:text-sm">
        <thead>
          <tr className="xs:text-xs sm:text-sm md:text-md font-display">
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase ">
              Feature
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase ">
              Prima
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase ">
              Secunda
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase ">
              Terza
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-base-200 xs:text-xs sm:text-base font-serif"
            >
              <td className="py-3 px-4 xs:pr-1 font-semibold text-base-content bg-base-200 font-display">
                {row.feature}
              </td>
              <td className="py-3 px-4 bg-base-100">{row.prima}</td>
              <td className="py-3 px-4 bg-base-100">{row.secunda}</td>
              <td className="py-3 px-4 bg-base-100">{row.terza}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
