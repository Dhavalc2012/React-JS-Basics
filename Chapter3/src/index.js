import React from 'react'
import { render } from 'react-dom'
import { SkiDayList} from "./components/SkiDayList";
import {SkiDayRow} from "./components/SkiDayRow";
import {SkiDayCount} from "./components/SkiDayCount";
import {App} from "./components/app";

window.React = React;

render(
	<App/>,
	document.getElementById('react-container')
)

/*render(
    <SkiDayCount/>,
    document.getElementById('react-container')
)*/
