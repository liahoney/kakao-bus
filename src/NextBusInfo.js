import { Text } from "react-native"
import { View } from "react-native"
import { COLOR } from "./color"

export default ({
    hasInfo, // remainedtimeText="도착정보 없음"  -> 일때 true
    remainedtimeText, //8분 0초, 곧 도착, 도착 정보 없음
    numOfRemainedStops,  // 1, 2, 15
    seatStatusText, // 1석, 여유, 보통


}) => {

    if(!hasInfo) return <Text style={{ color: COLOR.GRAY_2}}>도착 정보 없음</Text>
    return (
         <View style={{ flexDirection: "row", alignItems:"center"}}>
            <Text style={{ color: COLOR.BLACK}}>{remainedtimeText}</Text>
            <View style={{
                borderWidth: 0.5,
                borderColor: COLOR.GRAY_1,
                borderRadius: 3,
            }}>
                <Text>{numOfRemainedStops}번째 전</Text>
                <Text>{seatStatusText}</Text>
            </View>
           
            
        </View> 
    )
}