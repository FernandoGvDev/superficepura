import Header from "../../components/Header";
import Footer from "../../components/Footer";

import SobreHeader from "./SobreHeader";
import HistoriaEmpresa from "./HistoriaEmpresa"
import MissaoVisaoValores from "./MissaoVisaoValores";
import ExperienciaDiferenciais from "./ExperienciaDiferenciais"
import MateriaisServicos from "./MateriaisServicos"
import ChamadaParaAcao from "./ChamadaParaAcao"

export default function Sobre() {
  return (
    <section>
      <Header />
      <SobreHeader />
      <HistoriaEmpresa />
      <MissaoVisaoValores />
      <ExperienciaDiferenciais />
      <MateriaisServicos/>
      <ChamadaParaAcao />
      <Footer />
    </section>
  );
}
