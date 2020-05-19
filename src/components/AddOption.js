import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    addOption = event => {
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        if (!error) event.target.elements.option.value = "";

        this.setState(() => ({ error }));
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form 
                    className="add-option" 
                    onSubmit={this.addOption}
                >
                    <input 
                        className="add-option__input"
                        type="text" 
                        name="option" 
                    />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}