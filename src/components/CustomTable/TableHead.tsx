import { ITableHead } from "../../interfaces/CustomTable";

export const TableHead = ({ columns }: ITableHead) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          return <th key={accessor}>{label}</th>;
        })}
      </tr>
    </thead>
  );
};
