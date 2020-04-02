function updateMap() {
    console.log("Updating map with realtime data ")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.Long)
            rsp.data.forEach(element => {

                latitude = element.Lat;
                longitude = element.long;
                deaths = element.TotalDeaths;
                cases = element.TotalConfirmed;
                if(cases<=1)
                {
                    color = "green"
                }
                else if (cases >1 && cases <=500)
                {
                    color = "rgb(255,153,153)"
                }
                else if  (cases >0 && cases <=500) 
                {
                    color = "rgb(255,51,51)"
                }
                else if  (cases >500 && cases <=1500) 
                {
                    color = "rgb(255,0,0)"
                }
                else if  (cases >1500 && cases <=2200) 
                {
                    color = "rgb(179,0,0)"
                }
                else if  (cases >2200 && cases <=5000) 
                {
                    color = "rgb(128,0,0)"
                }
                else if  (cases >5000 && cases <=10000) 
                {
                    color = "rgb(77,0,0)"
                }
                else if  (cases >10000 && cases <=25000) 
                {
                    color = "rgb(26,0,0)"
                }
                else 
                {
                    color = "rgb(0,0,0)"
                }
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                    zoom: 1,
                    center: [0, 20]

                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });

        })
}
let interval=2000;
setInterval(updateMap,interval);

updateMap();