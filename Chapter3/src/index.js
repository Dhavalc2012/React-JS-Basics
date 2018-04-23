import React from 'react'
import { render } from 'react-dom'
import { SkiDayList} from "./components/SkiDayList";
import {SkiDayRow} from "./components/SkiDayRow";
import {SkiDayCount} from "./components/SkiDayCount";
window.React = React;

render(
	<SkiDayList days={
		[
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
	}/>,
	document.getElementById('react-container')
)

/*render(
    <SkiDayCount/>,
    document.getElementById('react-container')
)*/
