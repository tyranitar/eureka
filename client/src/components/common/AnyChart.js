import React, { Component } from 'react';
import Chart from 'chart.js';

function* idMaker() {
    let id = 0;

    while (true) {
        yield id++;
    }
}

const idGenerator = idMaker();

const generateChartId = () => {
    return `eureka-chart-${ idGenerator.next().value }`;
};

class AnyChart extends Component {
    constructor(props) {
        super(props);

        this.id = generateChartId();
    }

    componentDidMount() {
        const ctx = document.getElementById(this.id).getContext('2d');
        ctx.canvas.height = ctx.canvas.width / 1.1; // Aspect ratio.

        new Chart(ctx, Object.assign({}, this.props)); // Since props are frozen.
    }

    render() {
        return (
            <canvas
                id={ this.id }
            ></canvas>
        );
    }
}

export default AnyChart;