import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calender from 'react-icons/lib/fa/calendar'


const percentToDecimal = (decimal) => {
    return((decimal * 100) + '%')

}

const calcGoalProgress = (total,goal) => {
    return percentToDecimal(total/goal);

}

export const SkiDayCount = (props) => (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{props.total}</span>
                    <Calender/>
                    <span> days</span>
                </div>
                <div className="powder-days">
                    <span>{props.powder}</span>
                    <SnowFlake/>
                    <span> days</span>
                </div>
                <div className="backcountry-days">
                    <span>{props.backcountry}</span>
                    <Terrain/>
                    <span> hiking days</span>
                </div>
                <div>
                    <span>{
                    calcGoalProgress(props.total,props.goal)
                } </span>
                </div>
            </div>
        )