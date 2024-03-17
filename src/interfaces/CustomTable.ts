export interface Item {
  id: number;
  fullName: string;
  email: string;
  age: number;
  startDate: string;
}

export interface ICustomTable {
  items: Item[];
  options: number[];
}

export interface IColumn {
  label: string;
  accessor: keyof Item;
}

export interface ITableHead {
  columns: IColumn[];
}

export interface ITableBody {
    items: Item[];
    columns: IColumn[]; 
}

export interface IPagination {
  options: number[];
  itemsPerPage: number;
  totalPages: number;
  handleItemsPerPage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleCurrentPage: (pageNum: number) => void;
}
