import { Field, Formik, FormikProps } from "formik";
import { TextField } from "formik-mui";
import * as React from "react";

import { Box, Button, LinearProgress } from "@mui/material";

import Grid from "../../components/dataGrid";
import {
  useGetReqsSubscription,
  useUpdate_PassesMutation,
  useGetTotalReqCountSubscription,
} from "../../generated";
import useRole from "../../hooks/role";
import { GridValueGetterParams } from "@mui/x-data-grid";

const Bills = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [role, loadingRole] = useRole();
  const [filter, setFilter] = React.useState<any[]>([]);
  const [sort, setSort] = React.useState<any[]>([]);
  const [filterByDateTime, setFilterByDateTime] =
    React.useState<boolean>(false);

  const [update, { loading: MutationLoading }] = useUpdate_PassesMutation();

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

  React.useEffect(() => {
    if (role === "class_advisor") {
      setFilter([
        {
          class_approved: {
            _eq: false,
          },
        },
        {
          class_rejected: {
            _eq: false,
          },
        },
      ]);
    } else if (role === "hod") {
      setFilter([
        {
          hod_approved: {
            _eq: false,
          },
        },
        {
          hod_rejected: {
            _eq: false,
          },
        },
      ]);
    } else if (role === "warden") {
      setFilter([
        {
          hostel_approval: {
            _eq: false,
          },
        },
        {
          hostel_rejected: {
            _eq: false,
          },
        },
      ]);
    }
  }, [role]);

  return (
    <Box>
      <Box width={"100%"} textAlign="center">
        <LinearProgress
          sx={{
            visibility:
              totalRowsLoading || loading || totalRowsLoading || MutationLoading
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
          loading={
            totalRowsLoading || loading || loadingRole || MutationLoading
          }
          columns={[
            {
              field: "student",
              headerName: "student name",
              width: 150,
              sortable: false,
              filterable: false,
              editable: false,
              valueGetter: (params: GridValueGetterParams) =>
                params.row?.student?.name,
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
                params.row.checked_in ? "done" : "pending",
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
                (params.value &&
                  new Date(params.value).toLocaleString("en-US")) ||
                "",
            },
            {
              field: "approve",
              headerName: "",
              sortable: false,
              width: 120,
              renderCell: (params) => (
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={() => {
                    let updateValues: any = {};
                    if (role === "class_advisor") {
                      updateValues = { class_approved: true };
                    } else if (role === "hod") {
                      updateValues = { hod_approved: true };
                    } else if (role === "warden") {
                      updateValues = { hostel_approval: true };
                    }
                    update({
                      variables: {
                        pkColumns: {
                          id: params.row.id,
                        },
                        set: updateValues,
                      },
                    });
                  }}
                >
                  approve
                </Button>
              ),
            },
            {
              field: "reject",
              headerName: "",
              sortable: false,
              width: 120,
              renderCell: (params) => (
                <Button
                  variant="contained"
                  onClick={() => {
                    let updateValues: any = {};
                    if (role === "class_advisor") {
                      updateValues = { class_rejected: true };
                    } else if (role === "hod") {
                      updateValues = { hod_rejected: true };
                    } else if (role === "warden") {
                      updateValues = { hostel_rejected: true };
                    }
                    update({
                      variables: {
                        pkColumns: {
                          id: params.row.id,
                        },
                        set: updateValues,
                      },
                    });
                  }}
                  size="small"
                  color="error"
                >
                  reject
                </Button>
              ),
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Bills;
