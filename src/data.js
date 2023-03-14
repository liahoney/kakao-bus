import dayjs from "dayjs";
import { COLOR } from './color';


export const busStop = {
    id: 23284,
    name: "강남역12번출구",
    directionDescription: "강남역.강남역사거리",
    buses: [
        {
            type: "B",
            num: 146,
            directionDescription: "강남역.강남역사거리",
            isBookmarked: false,
            nextBusInfos: [
                {
                  arrivalTime: dayjs().add(8, 'minute'),
                  numOfRemainedStops: 5, 
                  numOfPassengers: 3,
                },
                {
                    arrivalTime: dayjs().add(21, 'minute').add(3, 'second'),
                    numOfRemainedStops: 11, 
                    numOfPassengers: 5,

                }
            ]
            

        }
    ]
}

export const getSections = (buses) => {
    const bBuses = []; // data
    const gBuses = []; // data 
    const rBuses = []; // data
  
    for (const bus of buses) {
      if (bus.type === "B") bBuses.push(bus);
      else if (bus.type === "G") gBuses.push(bus);
      else if (bus.type === "R") rBuses.push(bus);
    }
  
    const sections = [];
    if (bBuses.length > 0) {
      sections.push({
        title: "간선버스",
        data: bBuses,
      })
    }
    if (gBuses.length > 0) {
      sections.push({
        title: "지선버스",
        data: gBuses,
      })
    }
    if (rBuses.length > 0) {
      sections.push({
        title: "직행버스",
        data: rBuses,
      })
    }
  
    return sections;
  };

  export const getBusNumColorBytype = (type) => {
    switch (type) {
      case "B":
        return COLOR.BUS_B
      case "G":
        return COLOR.BUS_G
      case "R":
        return COLOR.BUS_R
      default:
        return "transparent";
        

    }
  }