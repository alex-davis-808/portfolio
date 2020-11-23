import React, { Component } from 'react';
import './index.css';

export class Hero extends Component {
    render() {
        return (
            <section className="hero_section">
                <div className="hero_accent_box"></div>
                <div className="hero_texts">
                    <h1 className="hero_title">{this.props.hero.title}</h1>
                    <p className="hero_text">{this.props.hero.text}</p>
                </div>
                <div className="hero_animation"></div>
            </section>
        );
    }
}

export default Hero;
