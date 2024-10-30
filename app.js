

ramadanCounter = () => {
    var ramazandate= new Date("Feb 27 , 2025").getTime()
    var todaysdate= new Date().getTime()
    var difference= ramazandate-todaysdate
    var month=Math.round(difference/(1000*60*60*24*30))
    var days=Math.round(difference/(1000*60*60*24))
    var hours=Math.round(difference/(1000*60*60))

    document.getElementById("month").innerHTML = `<span>${month}</span>`
    document.getElementById("days").innerHTML = `<span>${days}</span>`
    document.getElementById("hours").innerHTML = `<span>${hours}</span>`
}

ramadanCounter()

