import { ITableBody } from "../../interfaces/CustomTable";

export const TableBody = ({ items, columns }: ITableBody) => {
  return (
    <tbody>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            {columns.map(({ accessor }) => {
              const tData = item[accessor] ? item[accessor] : "——";
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
