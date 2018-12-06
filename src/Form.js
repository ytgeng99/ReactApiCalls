import React, {Component} from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name : '',
            job : ''
        }
        this.state = this.initialState;
    }
    // write the input
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }
    // to submit form
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, job} = this.state;
        return (
            <form>
                <label>
                    Name:
                    <input 
                        type = "text"
                        name = "name"
                        value = { name }
                        onChange = { this.handleChange }
                    />
                </label>
                <label>
                    Job:
                    <input
                        type = "text"
                        name = "job"
                        value = {job}
                        onChange = { this.handleChange }
                    />
                        
                </label>
                <input 
                    type = "button"
                    value = "submit"
                    onClick = { this.submitForm }
                />
            </form>
        )
    }
}
export default Form;