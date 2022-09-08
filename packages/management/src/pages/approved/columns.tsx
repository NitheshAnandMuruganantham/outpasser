import { Button } from "@mui/material";
import { GridColumns, GridValueGetterParams } from "@mui/x-data-grid";
import decode from "jwt-decode";

const Columns: GridColumns = [
  {
    field: "student",
    headerName: "student name",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) => params.row?.student?.name,
  },
  {
    field: "hostel",
    headerName: "hostel",
    width: 100,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.student.hostel.name,
  },
  {
    field: "department",
    headerName: "department",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.student.department.name,
  },
  {
    field: "class",
    headerName: "class",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.student.class.name,
  },
  {
    field: "class_approval",
    headerName: "class approval",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.class_approved === false && params.row.class_rejected === false
        ? "processing"
        : params.row.class_approved === true
        ? "approved"
        : params.row.class_rejected === true
        ? "approved"
        : "",
  },
  {
    field: "hostel_approval",
    headerName: "hostel approval",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.hostel_approval === false &&
      params.row.hostel_rejected === false
        ? "processing"
        : params.row.hostel_approval === true
        ? "approved"
        : params.row.hostel_rejected === true
        ? "approved"
        : "",
  },
  {
    field: "department_approval",
    headerName: "department approval",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      params.row.hod_approved === false && params.row.hod_rejected === false
        ? "processing"
        : params.row.hod_approved === true
        ? "approved"
        : params.row.hod_rejected === true
        ? "approved"
        : "",
  },
  {
    field: "checked_in",
    headerName: "checked in",
    width: 200,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params) => (params.row.checked_in ? "done" : "pending"),
  },
  {
    field: "checked_out",
    headerName: "checked out",
    width: 150,
    sortable: false,
    filterable: false,
    editable: false,
    valueGetter: (params) => (params.row.checked_in ? "done" : "pending"),
  },
  {
    field: "title",
    headerName: "title",
    width: 200,
    sortable: false,
    filterable: false,
    editable: false,
  },
  {
    field: "reason",
    headerName: "reason",
    width: 500,
    sortable: false,
    filterable: false,
    editable: false,
  },
  {
    field: "created_at",
    headerName: "created At",
    sortable: true,
    width: 200,
    filterable: false,
    editable: false,
    valueGetter: (params: GridValueGetterParams) =>
      (params.value && new Date(params.value).toLocaleString("en-US")) || "",
  },
];

export default Columns;
