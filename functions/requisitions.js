function cliqueBtn(e) {
    requisitionHandler(e.target.outerText)
}

async function requisitionHandler(e) {
    let yy = []
    await fetch('http://localhost:3000/api/dados')
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
            }
            return yy
        })
        .then(res => console.log(res))
}

export default cliqueBtn