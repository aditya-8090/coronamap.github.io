function updateMap()
 {   console.log("Updating map with realtime data ")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                
                Long = element.Lon;
                Lat = element.Lat;
               // cases = element.Cases;

              //  if(cases<2000)
               // {
              //      color = "rgb(250,0,0)"
              //  }
              //  else
              //  {
               //     color = `rgb("${cases},0,0")`
               // }



                new mapboxgl.Marker({
                    draggable: false,
                    color: "Red"

                })
                    .setLngLat([65.00,33.00])
                    .addTo(map);

            });

        })
}
//let interval=2000;
//setInterval(updateMap,interval);

updateMap();