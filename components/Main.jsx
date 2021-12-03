import Card from "./Card"
import CardPerfil from "./CardPerfil"
import '../functions/requisitions'
import useAppData from '../dados/hook/useAppData'

function Main() {
    const dados = useAppData()
    
    return (
        <div className=" bg-azul-veryDarkBlue h-screen w-screen flex items-center justify-center">
            <div className="h-3/6 w-auto rounded-lg grid grid-cols-4 gap-8">
                <CardPerfil nome={dados.nome} sobrenome={dados.sobrenome}/>
                <Card periodo="Periodo" previousTime={dados.workprevious} current={dados.workcurrent} nome="Work" />
                <Card periodo="Periodo" previousTime={dados.playprevious} current={dados.playcurrent} nome="Play" />
                <Card periodo="Periodo" previousTime={dados.studyprevious} current={dados.studycurrent} nome="Study" />
                <Card periodo="Periodo" previousTime={dados.exerciseprevious} current={dados.exercisecurrent} nome="Exercise" />
                <Card periodo="Periodo" previousTime={dados.socialprevious} current={dados.socialcurrent} nome="Social" />
                <Card periodo="Periodo" previousTime={dados.scprevious} current={dados.sccurrent} nome="Self Care" />
            </div>
        </div>
    )
}

export default Main
