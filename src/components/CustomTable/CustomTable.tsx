import { useState } from "react";
import { Pagination } from "./Pagination";
import { TableHead } from "./TableHead";
import { IColumn, ICustomTable, Item } from "../../interfaces/CustomTable";
import { TableBody } from "./TableBody";

export const CustomTable = ({ items, options }: ICustomTable) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [sortField, setSortField] = useState<keyof Item | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleCurrentPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const sortItems = (items: Item[]): Item[] => {
    if (!sortField) return items;

    return [...items].sort((a, b) => {
      if (a[sortField] < b[sortField]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortField] > b[sortField]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const handleSort = (field: keyof Item) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedItems = sortItems(items);
  const itemsDisplayed = sortedItems.slice(startIndex, endIndex);
  const columns: IColumn[] = [
    { label: "Full Name", accessor: "fullName" },
    { label: "Email", accessor: "email" },
    { label: "Age", accessor: "age" },
    { label: "Start date", accessor: "startDate" },
  ];

  return (
    <div>
      <table>
        <caption>Caption here</caption>
        <TableHead columns={columns} />
        <TableBody items={itemsDisplayed} columns={columns} />
        {/* <thead>
          <tr>
            <th onClick={() => handleSort("fullName")}>Full Name</th>
            <th onClick={() => handleSort("email")}>E-mail</th>
            <th onClick={() => handleSort("age")}>Age</th>
            <th onClick={() => handleSort("startDate")}>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {itemsDisplayed.map(({ id, fullName, email, age, startDate }) => (
            <tr key={id}>
              <td>{fullName}</td>
              <td>{email}</td>
              <td>{age}</td>
              <td>{startDate.toString()}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
      <Pagination
        options={options}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        handleItemsPerPage={handleItemsPerPage}
        handleCurrentPage={handleCurrentPage}
      />
    </div>
  );
};
