import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Name",
    headerName: "Name",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.Name}`,
  },
  { field: "size", headerName: "Size", width: 130 },
  { field: "Modified/Time", headerName: "Modified/Time", type: "folder", width: 120 },

  // {
  //   field: 'Name',
  //   headerName: 'Name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.Name || ''} ${row.Size|| ''}`,
  // },
];

const rows = [
  { id: 1, Name: "myfolder1", size: "106.56MB", type: "folder" },
  { id: 2, Name: "folder2", size: "106.56MB", type: "folder" },
  { id: 3, Name: "folder3", size: "106.56MB", type: "folder" },
  { id: 4, Name: "folder3", size: "106.56MB", type: "folder" },
  { id: 5, Name: "folder3", size: "106.56MB", type: "folder" },
  { id: 6, Name: "folder3", size: "106.56MB", type: "folder" },
  { id: 7, Name: "folder3", size: "106.56MB", type: "folder" },
];

const Hero = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Hero;
