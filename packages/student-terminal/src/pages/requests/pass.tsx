import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DoneIcon from "@mui/icons-material/Done";
import QRCode from "react-qr-code";
import CloseIcon from "@mui/icons-material/Close";
import { toPng } from "html-to-image";

const Pass = (props: { data: any }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const PassRef = React.useRef<HTMLDivElement>(null);
  return (
    <div>
      <Button variant="outlined" sx={{ m: 1 }} onClick={handleClickOpen}>
        VIEW PASS
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div
            ref={PassRef}
            style={{
              backgroundColor: "white",
              width: "290px",
              display: "flex",
              borderRadius: "10px",
              height: "auto",
              border: "1px solid",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>online out pass</h3>
            <div
              style={{
                width: "300px",
              }}
            >
              <QRCode
                size={135}
                style={{
                  marginLeft: "83px",
                  marginRight: "auto",
                }}
                value={`${props.data.id} ${props.data.key}`}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                  marginTop: "10px",
                }}
              >
                <div>name</div>
                <div style={{ fontWeight: "bolder" }}>
                  {props.data.student.name}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                  marginTop: "10px",
                }}
              >
                <div>department</div>
                <div style={{ fontWeight: "bolder" }}>
                  {props.data.student.department.name}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                  marginTop: "10px",
                }}
              >
                <div>class</div>
                <div style={{ fontWeight: "bolder" }}>
                  {props.data.student.class.name}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                  marginTop: "10px",
                }}
              >
                <div>from</div>
                <div style={{ fontWeight: "bolder" }}>
                  {new Date(props.data.start_datetime).toLocaleString()}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                  marginTop: "10px",
                }}
              >
                <div>to</div>
                <div style={{ fontWeight: "bolder" }}>
                  {new Date(props.data.end_datetime).toLocaleString()}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                }}
              >
                {props?.data?.class_approved ? <DoneIcon /> : <CloseIcon />}
                <div>class apporval</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                }}
              >
                {props?.data?.hostel_approval ? <DoneIcon /> : <CloseIcon />}
                <div>hostel apporval</div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2px",
                }}
              >
                {props?.data?.hod_approved ? <DoneIcon /> : <CloseIcon />}
                <div>department apporval</div>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (!PassRef.current) {
                return;
              } else {
                toPng(PassRef.current, { cacheBust: true }).then(function (
                  dataUrl
                ) {
                  const link = document.createElement("a");
                  link.download = "pass.png";
                  link.href = dataUrl;
                  link.click();
                });
              }
            }}
          >
            Download
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Pass;
