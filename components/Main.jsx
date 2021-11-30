import Card from "./Card"

function Main() {
    return (
        <div className=" bg-azul-veryDarkBlue h-screen w-screen flex items-center justify-center">
            <div className="h-3/5 w-auto rounded-lg grid grid-cols-4 gap-8">
                <div className="rounded-lg bg-gray-500 row-span-2"></div>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Work"/>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Play"/>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Study"/>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Exercise"/>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Social"/>
                <Card periodo="Periodo" previousTime="10hrs" current="32hrs"nome="Self Care"/>
            </div>
        </div>
    )
}

export default Main
