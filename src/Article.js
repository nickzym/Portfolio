import React, { Component } from 'react';
import './App.css';

class Article extends Component {

    render() {
        const {title, createAt, text, className } = this.props;
        const clsPrefix = `${className}--article`;
        return (
            <div className={`${clsPrefix}--container`}>
                <div className={`${clsPrefix}--title`}>
                    {title}
                </div>
                <div className={`${clsPrefix}--date`}>
                    {createAt}
                </div>
                <div className={`${clsPrefix}--text`}>
                    {text}
                </div>
                <hr />
            </div>
        );
    }
}

export default Article;
