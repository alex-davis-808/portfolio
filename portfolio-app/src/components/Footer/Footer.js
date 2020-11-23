import React, { Component } from 'react';
import './index.css';
import SocialIcons from './SocialIcons/SocialIcons';

export class Footer extends Component {
    render() {
        return (
            <section className="footer_section">
                <div className="footer_accent">
                    {this.props.footer.footer_cta}
                </div>
                <div className="social_icons">
                    <SocialIcons
                        social_icons={this.props.footer.social_icons}
                    />
                </div>
                <div class="footer_animation"></div>
            </section>
        );
    }
}

export default Footer;
