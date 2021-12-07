import Card from "./Card"
import CardPerfil from "./CardPerfil"
import '../functions/requisitions'
import useAppData from '../dados/hook/useAppData'

function Main() {
    const dados = useAppData()
    
    return (
        <div className=" bg-azul-veryDarkBlue md:h-screen w-screen flex items-center justify-center">
            <div className="h-3/6 w-auto rounded-lg m-7 grid grid-cols-1 md:grid-cols-4 gap-8">
                <CardPerfil nome={dados.nome} sobrenome={dados.sobrenome}/>
                <Card periodo={dados.speriodoatual} previousTime={dados.workprevious} current={dados.workcurrent} nome="Work" />
                <Card periodo={dados.speriodoatual} previousTime={dados.playprevious} current={dados.playcurrent} nome="Play" />
                <Card periodo={dados.speriodoatual} previousTime={dados.studyprevious} current={dados.studycurrent} nome="Study" />
                <Card periodo={dados.speriodoatual} previousTime={dados.exerciseprevious} current={dados.exercisecurrent} nome="Exercise" />
                <Card periodo={dados.speriodoatual} previousTime={dados.socialprevious} current={dados.socialcurrent} nome="Social" />
                <Card periodo={dados.speriodoatual} previousTime={dados.scprevious} current={dados.sccurrent} nome="Self Care" />
            </div>
        </div>
    )
}

export default Main
