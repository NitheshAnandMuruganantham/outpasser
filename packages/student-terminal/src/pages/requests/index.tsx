import * as React from "react";
import Add from "./add";
import { Box, Button, LinearProgress } from "@mui/material";
import Pass from "./pass";
import Grid from "../../components/dataGrid";
import {
  useGetReqsSubscription,
  useGetTotalReqCountSubscription,
} from "../../generated";
import { GridValueGetterParams } from "@mui/x-data-grid";

const Bills = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState<any[]>([]);
  const [sort, setSort] = React.useState<any[]>([]);
  const [filterByDateTime, setFilterByDateTime] =
    React.useState<boolean>(false);

  const { data, loading } = useGetReqsSubscription({
    variables: {
      orderBy: [
        ...sort,
        {
          created_at: "desc",
        },
      ],
      where: {
        _and: filter,
      },
      offset: (page - 1) * pageSize,
      limit: pageSize,
    },
  });
  const { data: totalRows, loading: totalRowsLoading } =
    useGetTotalReqCountSubscription({
      variables: {
        orderBy: [
          ...sort,
          {
            created_at: "desc",
          },
        ],
        where: {
          _and: filter,
        },
      },
    });

  return (
    <Box>
      <Add />
      <Box width={"100%"} textAlign="center">
        <LinearProgress
          sx={{
            visibility:
              totalRowsLoading || loading || totalRowsLoading
                ? "visible"
                : "hidden",
          }}
        />
        <Grid
          data={data?.passes}
          pageSize={pageSize}
          setPage={setPage}
          setSort={setSort}
          rowCount={totalRows?.passes_aggregate?.aggregate?.count || 0}
          setFilter={() => null}
          setPageSize={setPageSize}
          loading={totalRowsLoading || loading}
          columns={[
            {
              field: "pass",
              headerName: "",
              sortable: true,
              width: 200,
              filterable: false,
              editable: false,
              renderCell: (params) =>
                !params.row.hod_approved ||
                !params.row.hod_approved ||
                !params.row.hostel_approval ? (
                  <Button variant="outlined" sx={{ m: 1 }} disabled>
                    show pass
                  </Button>
                ) : (
                  <Pass data={params.row} />
                ),
            },
            {
              field: "class_approval",
              headerName: "class approval",
              width: 150,
              sortable: false,
              filterable: false,
              editable: false,
              valueGetter: (params: GridValueGetterParams) =>
                params.row.class_approved === false &&
                params.row.class_rejected === false
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
                params.row.hod_approved === false &&
                params.row.hod_rejected === false
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
              valueGetter: (params) =>
                params.row.checked_in ? "done" : "pending",
            },
            {
              field: "checked_out",
              headerName: "checked out",
              width: 150,
              sortable: false,
              filterable: false,
              editable: false,
              valueGetter: (params) =>
                params.row.checked_out ? "done" : "pending",
            },

            {
              field: "created_at",
              headerName: "created At",
              sortable: true,
              width: 200,
              filterable: false,
              editable: false,
              valueGetter: (params: GridValueGetterParams) =>
                (params.value &&
                  new Date(params.value).toLocaleString("en-US")) ||
                "",
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
          ]}
        />
      </Box>
    </Box>
  );
};

export default Bills;
