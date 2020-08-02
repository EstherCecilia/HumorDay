import React, { useState } from "react";
import { Chart } from "react-google-charts";
import Button from "@material-ui/core/Button";

function App({ history }) {
  const [options, setOptions] = useState({
    title: "Gráfico de Humor",
  });
  const [optionsBar, setOptionsBar] = useState({
    title: "Gráfico de Áreas da Vida",
  });
  const [data, setData] = useState([
    ["Humores", "Quantidade"],
    ["Feliz", 100],
    ["Triste", 80],
    ["Normal", 50],
  ]);
  const [dataBar, setDataBar] = useState([
    ["Areas", "Valor"],
    ["Familia", 80],
    ["Amigos", 70],
    ["Profissão", 20],
    ["Relação", 40],
    ["Outros", 100],
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{
              height: "50px",
              background: "#a0cb96",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            onClick={() => history.push("/home")}
          >
            REGISTRAR HUMOR DE HOJE
          </Button>
        </div>
        <div style={{ display: "flex" }}>
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="PieChart"
            data={data}
            options={options}
          />
          <Chart
            width={"770px"}
            height={"300px"}
            chartType="BarChart"
            data={dataBar}
            options={optionsBar}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
