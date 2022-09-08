import { Field, Formik, FormikProps } from "formik";
import { TextField } from "formik-mui";
import * as React from "react";

import { Box, Chip, LinearProgress } from "@mui/material";

import Grid from "../../components/dataGrid";
import {
  useGetReqsSubscription,
  useGetTotalReqCountSubscription,
} from "../../generated";
import useRole from "../../hooks/role";
import Columns from "./columns";

const Bills = () => {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [role, loadingRole] = useRole();
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

  const FormikRef = React.useRef<FormikProps<any>>(null);

  React.useEffect(() => {
    if (role === "class_advisor") {
      setFilter([
        {
          class_approved: {
            _eq: true,
          },
        },
      ]);
    } else if (role === "hod") {
      setFilter([
        {
          hod_approved: {
            _eq: true,
          },
        },
      ]);
    } else if (role === "warden") {
      setFilter([
        {
          hostel_approval: {
            _eq: true,
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
          loading={totalRowsLoading || loading || loadingRole}
          columns={Columns}
        />
      </Box>
    </Box>
  );
};

const GetCols = () => {
  if (import.meta.env["VITE_ENABLE_PAYMENTS"] === "true") {
    return [
      {
        field: "paid",
        headerName: "status",
        sortable: true,
        width: 120,
        renderCell: (params: any) =>
          params.value ? (
            <Chip color="success" label="paid" />
          ) : (
            <Chip color="error" label="on due" />
          ),
      },
    ];
  } else {
    return [];
  }
};

export default Bills;
