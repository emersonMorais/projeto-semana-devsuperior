import { BarChart } from "components/Barchart/idex";
import { DataTable } from "components/DataTable";
import { DonutChart } from "components/DonutChart";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

export function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container" >
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <hr />
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-dark">
              Taxa de Sucesso por Colaborador(%)
            </h5>
            <BarChart />
            <hr />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-dark">
              Total de Vendas por Colaborador(%)
            </h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary ">Histórico de Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}
