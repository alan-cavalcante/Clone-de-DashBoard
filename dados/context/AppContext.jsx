import { createContext, useState } from "react";

const AppContext = createContext({})

export function AppProvider(props) {
      
    function cliqueBtn(e) {
        requisitionHandler(e.target.outerText)
        .then(res => ajeitar(res))
    }
    
    function ajeitar(obj) {
        let objCurrent = obj.map(a => a.current)
        let objPrevious = obj.map(a => a.previous)
        setObjCurrent(objCurrent)
        setObjPrevious(objPrevious)
        return (objCurrent, objPrevious)
    }
    
    async function requisitionHandler(e) {
        let yy = []
        let x = await fetch('http://localhost:3000/api/dados')
        .then(res => res.json())
        .then(res => res.map(a => a.timeframes))
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                if (e == 'Daily') {
                    yy.push(res[i].daily)
                } else if (e == 'Monthly') {
                    yy.push(res[i].monthly)
                } else if (e == 'Weekly') {
                    yy.push(res[i].weekly)
                }
            } return yy
        })
        return x
    }
    
    const [objCurrent, setObjCurrent] = useState('')
    const [objPrevious, setObjPrevious] = useState('')
    
    return (
        <AppContext.Provider value={{
            nome: 'Alfredo',
            sobrenome: 'Neto',
            workcurrent: objCurrent[0],
            workprevious: objPrevious[0],
            playcurrent: objCurrent[1],
            playprevious: objPrevious[1],
            studycurrent: objCurrent[2],
            studyprevious: objPrevious[2],
            exercisecurrent: objCurrent[3],
            exerciseprevious: objPrevious[3],
            socialcurrent: objCurrent[4],
            socialprevious: objPrevious[4],
            sccurrent: objCurrent[5],
            scprevious: objPrevious[5],
            requisitionHandler,
            cliqueBtn,
            ajeitar
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext