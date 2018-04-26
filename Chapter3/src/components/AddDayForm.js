import {PropTypes , Component} from 'react'

export class AddDayForm extends Component{
constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
}

    submit(e){
        e.preventDefault();
        console.log(this.refs.resort.value);
        console.log(this.refs.date.value);
        console.log(this.refs.powder);
        console.log(this.refs.backcountry);
    }

    render(){
        const { resort, date, powder,backcountry} = this.props
        return  (
        <form onSubmit={this.submit} className="add-day-form">
            <label htmlFor="resort">Resort Name</label>
            <input id="resort" type="text" defaultValue={resort} ref="resort" required />

            <label htmlFor="date">Date</label>
            <input id="date" type="date" required defaultValue={date} ref="date" />

            <div>
            <input id="powder"  defaultChecked={powder} type="checkbox" ref="powder"  />
                <label htmlFor="powder"  >Powder Day</label>
            </div>

            <div>
            <input id="backcountry" type="checkbox" ref="backcountry"  defaultChecked={backcountry}  />
                <label htmlFor="backcountry" >BackCountry Day</label>
            </div>
            <button>Add Day</button>
        </form>

        )
    }
}

AddDayForm.defaultProps = {
    resort : 'Kirkwood',
    date : '2017-02-12',
    powder : true,
    backcountry: false
}

AddDayForm.propTypes =  {
    resort : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    powder : PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}
