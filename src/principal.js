import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry,
  faGrinBeam,
  faMeh,
  faFrown,
  faGrin,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#a0cb96",
    alignItems: "center",
    justifyContent: "center",
    display: "grid",
  },
  div: {
    marginTop: "60px",
    marginBottom: "60px",
    justifyContent: "center",
    display: "flex",
  },
  margin: {
    height: theme.spacing(3),
  },
  icon: {
    fontSize: "50px",
    marginRight: "20px",
    cursor: "pointer",
  },
  span: {
    font: "roboto",
    color: "#f0ffffba",
    fontSize: "18px",
  },
  titulo: {
    color: "#f0ffffba",
    font: "roboto",
    fontWeight: "bold",
    margin: 0,
    fontSize: "28px",
    textAlign: "center",
    marginLeft: "4px",
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider({ history }) {
  const classes = useStyles();
  const [stat, setStat] = useState(0);

  return (
    <div className={classes.root}>
      <h1 className={classes.titulo}>Olá, como você se sente hoje?</h1>
      <div className={classes.div}>
        <FontAwesomeIcon
          icon={faAngry}
          className={classes.icon}
          style={
            stat === 0 || stat === 1
              ? { color: "#b84747" }
              : { color: "#fafafa" }
          }
          onClick={() => setStat(1)}
        />
        <FontAwesomeIcon
          icon={faFrown}
          className={classes.icon}
          style={
            stat === 0 || stat === 2
              ? { color: "#c98018" }
              : { color: "#fafafa" }
          }
          onClick={() => setStat(2)}
        />
        <FontAwesomeIcon
          icon={faMeh}
          className={classes.icon}
          style={
            stat === 0 || stat === 3
              ? { color: "#c0c03e" }
              : { color: "#fafafa" }
          }
          onClick={() => setStat(3)}
        />
        <FontAwesomeIcon
          icon={faGrin}
          className={classes.icon}
          style={
            stat === 0 || stat === 4
              ? { color: "#a1c676" }
              : { color: "#fafafa" }
          }
          onClick={() => setStat(4)}
        />
        <FontAwesomeIcon
          icon={faGrinBeam}
          className={classes.icon}
          style={
            stat === 0 || stat === 5
              ? { color: "#5ba505e0" }
              : { color: "#fafafa" }
          }
          onClick={() => setStat(5)}
        />
      </div>
      <div>
        <div style={{ display: "flex", width: "1000px" }}>
          <span className={classes.span} style={{ marginRight: "10pc" }}>
            Familia
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </div>
        <div style={{ display: "flex", width: "1000px" }}>
          <span className={classes.span} style={{ marginRight: "10pc" }}>
            Amigos
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </div>
        <div style={{ display: "flex", width: "1000px" }}>
          <span className={classes.span} style={{ marginRight: "10pc" }}>
            Relação
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </div>
        <div style={{ display: "flex", width: "1000px" }}>
          <span className={classes.span} style={{ marginRight: "8pc" }}>
            Profissional
          </span>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
          />
        </div>
      </div>

      <span className={classes.span} style={{ marginTop: "20px" }}>
        Observações
      </span>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ height: "250px", marginBottom: "5px" }}
      />

      <Button
        variant="contained"
        style={{
          height: "50px",
          background: "#199f4e",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        onClick={() => history.push("/dash")}
      >
        SALVAR
      </Button>
    </div>
  );
}
