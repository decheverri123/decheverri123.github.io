import React from "react";

interface SpecRow {
  feature: string;
  prima: string;
  secunda: string;
  terza: string;
}

interface ComparisonTableProps {
  specifications: SpecRow[];
  title?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  specifications,
  title,
}) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 mb-8">
      {title && (
        <h3 className="text-xl font-bold mb-3 uppercase text-center">
          {title}
        </h3>
      )}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase text-sm">
              Feature
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase text-sm">
              Prima
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase text-sm">
              Secunda
            </th>
            <th className="text-left py-3 px-4 bg-base-200 font-bold uppercase text-sm">
              Terza
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-base-200">
              <td className="py-3 px-4 font-bold text-base-content bg-base-200">
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
