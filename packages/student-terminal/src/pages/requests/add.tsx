import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { LinearProgress, TextField as TF } from "@mui/material";
import { Box } from "@mui/system";
import * as Yup from "yup";
import { useRequestPassMutation } from "../../generated";
import { toast } from "react-toastify";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const AddNewClient: React.FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [addNewClient, { loading }] = useRequestPassMutation();
  return (
    <div>
      <Button variant="outlined" sx={{ m: 1 }} onClick={handleClickOpen}>
        new Request
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>New Request</DialogTitle>
        <Formik
          initialValues={{
            title: "",
            reason: "",
            from: "",
            to: "",
          }}
          validationSchema={() => {
            return Yup.object().shape({
              title: Yup.string().required("Required"),
              reason: Yup.string().required("Required"),
            });
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);

            addNewClient({
              variables: {
                object: {
                  title: values.title,
                  reason: values.reason,
                  start_datetime: values.from,
                  end_datetime: values.to,
                },
              },
            })
              .catch(() => {
                toast.error("can not create new client");
              })
              .then((dt) => {
                dt && dt.data && toast.success("client created successfully");
                setSubmitting(false);
                handleClose();
              });
          }}
        >
          {({
            submitForm,
            isSubmitting,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <>
              <DialogContent>
                <Form>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Field
                      component={TextField}
                      sx={{
                        my: 2,
                      }}
                      name="title"
                      type="text"
                      label="title"
                    />
                    <Field
                      component={TextField}
                      sx={{
                        my: 2,
                      }}
                      name="reason"
                      type="text"
                      label="reason"
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        renderInput={(props) => (
                          <TF
                            error={Boolean(touched.from && errors.from)}
                            // helperText={
                            //   touched.from && errors.from ? errors.from : ""
                            // }
                            {...props}
                          />
                        )}
                        disableFuture
                        InputProps={{
                          sx: {
                            my: 1,
                          },
                        }}
                        label="from date"
                        value={values.from}
                        onChange={(newValue) => {
                          setFieldValue("from", newValue);
                        }}
                      />
                      <DateTimePicker
                        InputProps={{
                          sx: {
                            my: 1,
                          },
                        }}
                        renderInput={(props) => (
                          <TF
                            error={Boolean(touched.to && errors.to)}
                            {...props}
                          />
                        )}
                        label="to date"
                        minDateTime={values.from}
                        value={values.to}
                        onChange={(newValue) => {
                          setFieldValue("to", newValue);
                        }}
                      />
                    </LocalizationProvider>
                    {(isSubmitting || loading) && <LinearProgress />}
                  </Box>
                </Form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  onClick={() => {
                    submitForm();
                  }}
                >
                  Add
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default AddNewClient;
