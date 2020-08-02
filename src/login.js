import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
    height: "360px",
    justifyContent: "center",
    alignIems: "center",
    display: "grid",
  },
  span: {
    font: "roboto",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#6d6c6c",
    },
  },
});

function Login({ history, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <form style={{ margin: "10%" }}>
        <Paper className={classes.paper}>
          <h1 style={{ textAlign: "center" }}>Bem vinde!</h1>
          <TextField id="email" label="Email" variant="filled" />
          <TextField id="senha" label="Senha" variant="filled" />
          <Button
            variant="contained"
            style={{ height: "50px", background: "#199f4e" }}
            onClick={() => history.push("/dash")}
          >
            ENTRAR
          </Button>
          <span
            className={classes.span}
            onClick={() => history.push("/cadastro")}
          >
            Se cadastre
          </span>
        </Paper>
      </form>
    </div>
  );
}
export default Login;
