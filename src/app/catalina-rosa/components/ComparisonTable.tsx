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
    <div className="mb-8 overflow-x-auto rounded-box border border-base-content/5 text-base-content shadow-xl">
      <table className="w-full border-collapse xs:text-sm">
        <thead>
          <tr className="md:text-md font-display text-base-content xs:text-xs sm:text-sm">
            <th className="bg-base-200 px-4 py-3 text-left font-bold uppercase">
              Feature
            </th>
            <th className="bg-base-200 px-4 py-3 text-left font-bold uppercase">
              Prima
            </th>
            <th className="bg-base-200 px-4 py-3 text-left font-bold uppercase">
              Secunda
            </th>
            <th className="bg-base-200 px-4 py-3 text-left font-bold uppercase">
              Terza
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-base-200 font-serif text-base-content xs:text-xs sm:text-base"
            >
              <td className="bg-base-200 px-4 py-3 font-display font-semibold text-base-content xs:pr-1">
                {row.feature}
              </td>
              <td className="bg-base-100 px-4 py-3 text-base-content">
                {row.prima}
              </td>
              <td className="bg-base-100 px-4 py-3 text-base-content">
                {row.secunda}
              </td>
              <td className="bg-base-100 px-4 py-3 text-base-content">
                {row.terza}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
