import { Component} from 'react'
import {SkiDayList} from "./SkiDayList";
import {SkiDayCount} from "./SkiDayCount";

export class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            allSkiDays : 		[
                {
                    resort: "Squa Valley",
                    date : new Date("1/2/2016"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Timous Chapter",
                    date : new Date("3/4/2016"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Beyond Wine & Dine",
                    date : new Date("7/4/2016"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Ski Tampolon",
                    date : new Date("1/22/2016"),
                    powder: false,
                    backcountry: true
                }
            ]
        }

    }
    countDays(filter){
        return this.state.allSkiDays.filter(function(day) {
                if(filter){
                    return day[filter]
                }else{
                    return day
                }
        }).length
    }
    render(){
        return(
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                powder={this.countDays("powder")}
                backcountry={this.countDays("backcountry")}/>
            </div>
        )
    }
}