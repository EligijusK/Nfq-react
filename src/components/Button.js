import React from 'react';

export default class Button extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            showDescription: true,
        };
    }

    InputChange = (id) => {
        this.props.changeHandler(id);
    }

    render()
    {
        const { id, genre } = this.props;
        return (
            <div>
                <button onClick={() => {
                    this.InputChange(id);
                }}>
                    {genre}
                </button>
            </div>
        );
    }
}