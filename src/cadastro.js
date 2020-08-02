import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    display: "flex",
    height: "40px",
    borderRadius: "8px",
    marginTop: "10px",
    width: "300px",
    background: "#ff6e0d",
    color: "#fafafa",
    "&:hover": {
      background: "#ff6e0dbf",
    },
  },
  b: {
    bottom: 0,
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    background: "#a0cb96",
    width: "600px",
    // height: "360px",
    justifyContent: "center",
    alignIems: "center",
    display: "grid",
  },
});

function Cadastro({ history, ...props }) {
  const { form } = props;
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <form style={{ margin: "10%" }}>
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: "center" }}>Cadastro</h1>
          <div>
            <TextField id="nome" label="Nome" variant="filled" />{" "}
            <TextField id="nome" label="Data" variant="filled" />{" "}
          </div>
          <div>
            <TextField id="email" label="Email" variant="filled" />{" "}
            <TextField id="senha" label="Senha" variant="filled" />
          </div>
          <Divider style={{ marginTop: "20px", marginBottom: "20px" }} />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "45%" }}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                style={{ color: "#199f4e" }}
                inputProps={{
                  "aria-label": "primary checkbox",
                }}
              />
              <span>FAMILIA</span>
            </div>

            <div style={{ width: "50%" }}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                style={{ color: "#199f4e" }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>RELACIONAMENTO</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "45%" }}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                style={{ color: "#199f4e" }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>AMIGOS</span>
            </div>

            <div style={{ width: "50%" }}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                style={{ color: "#199f4e" }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>CARREIRA</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "45%", marginTop: "13px" }}>
              <Checkbox
                // checked={checked}
                // onChange={handleChange}
                style={{ color: "#199f4e" }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>OUTRO</span>
            </div>

            <div style={{ width: "50%" }}>
              <TextField
                id="standard-basic"
                label="Outro"
                style={{ marginBottom: "15px", marginLeft: "13px" }}
              />
            </div>
          </div>
          <Button
            variant="contained"
            style={{
              height: "50px",
              background: "#199f4e",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            onClick={() => history.push("/")}
          >
            SALVAR
          </Button>
        </Paper>
      </form>
    </div>
  );
}
export default Cadastro;
