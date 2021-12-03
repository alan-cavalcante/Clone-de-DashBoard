import Image from 'next/image'
import '../functions/requisitions'
import useAppData from '../dados/hook/useAppData'

function Card(props) {
    const dados = useAppData()

    return (
        
        
        // Gera a cor do quadro baseado na props do nome
        <div className={`
        ${props.nome == 'Work' ? 'bg-vermelho-redWork' :
                props.nome == 'Play' ? 'bg-azul-bluePlay' :
                    props.nome == 'Study' ? 'bg-vermelho-redStudy' :
                        props.nome == 'Exercise' ? 'bg-exercicio-green' :
                            props.nome == 'Social' ? 'bg-social70-violet' :
                                'bg-selfcare70-orange'} flex flex-col justify-end rounded-2xl
            `}>

            {/* Gera o SVG correspondente */}
            <div className="flex justify-end px-5">
                {props.nome == 'Play' ? <Image src="/icon-play.svg" height={50} width={50} objectFit="contain" className=" right" /> :
                    props.nome == 'Study' ? <Image src="/icon-study.svg" height={50} width={50} objectFit="contain" className=" right" /> :
                        props.nome == 'Work' ? <Image src="/icon-Work.svg" height={50} width={50} objectFit="contain" className=" right" /> :
                            props.nome == 'Exercise' ? <Image src="/icon-Exercise.svg" height={50} width={50} objectFit="contain" className=" right" /> :
                                props.nome == 'Social' ? <Image src="/icon-Social.svg" height={50} width={50} objectFit="contain" className=" right" /> :
                                    <Image src="/icon-self-care.svg" height={50} width={50} objectFit="contain" className=" right" />}
            </div>

            {/* Card com as informações */}
            <div className="bg-azul-darkBlue hover:bg-azul-desaturado h-4/5 rounded-t-lg rounded-lg grid grid-cols-2 grid-rows-3 px-6 cursor-pointer">
                <div className="self-center text-size70 text-white font-rubik">
                    {props.nome}
                </div>
                <div className="self-center text-right font-rubik text-size70 text-white cursor-pointer">
                    ...
                </div>
                <div className="self-center col-span-2 font-rubik text-4xl text-white font-normal">
                    {props.current}
                </div>
                <div className="self-center col-span-2 font-rubik text-sm text-white font-light">
                    {props.periodo}: {props.previousTime}
                </div>
            </div>

        </div>
    )
}

export default Card
