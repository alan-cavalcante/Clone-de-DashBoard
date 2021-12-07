import Image from 'next/image'
import { AppProvider, cliqueBtn, ajeitar } from '../dados/context/AppContext'
import useAppData from '../dados/hook/useAppData'
export default function CardPerfil(props) {
    const dados = useAppData()

    return (
        <div className="bg-azul-darkBlue rounded-t-lg rounded-lg row-span-2 flex flex-col">
            <div className="self-center text-size70 bg-azul-base h-4/6 rounded-lg text-white font-rubik p-6 flex flex-col items-start">

                <div className="rounded-full border-2 border-white overflow-hidden flex">
                    <Image src="/image-jeremy.png" height={75} width={75} layout="fixed" alt="user" />
                </div>

                <p className="text-xs font-thin mt-10">
                    Report for
                </p>
                <div className="text-3xl font-extralight">
                    {props.nome} {props.sobrenome}
                </div>
            </div>

            <div className="p-6 flex flex-col text-left items-start justify-between text-azul-desaturado font-rubik font-thin h-2/6">
                <button onClick={dados.cliqueBtn} className="hover:text-white focus:text-white">Daily</button>
                <button onClick={dados.cliqueBtn} className="hover:text-white focus:text-white">Weekly</button>
                <button onClick={dados.cliqueBtn} className="hover:text-white focus:text-white">Monthly</button>
            </div>
        </div>
    )
}
