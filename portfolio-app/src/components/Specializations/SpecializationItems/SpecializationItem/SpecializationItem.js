import React, { Component } from 'react';
import './index.css';

export class SpecializationItem extends Component {
    render() {
        return (
            <div className="spec_item">
                <img className="spec_icon" src={this.props.item.icon_url} />
                <h2 className="spec_title">{this.props.item.title}</h2>
                {this.props.item.text}
            </div>
        );
    }
}

export default SpecializationItem;
