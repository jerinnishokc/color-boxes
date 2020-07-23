import React from 'react';
import Box from '../box/box.component';
import './color-container.styles.css';
// import {rgbToHex} from '../../helper';

class ColorContainer extends React.Component {    
    constructor(props) {
        super(props);
        this.randomColorGenerator();
    }

    static defaultProps = {
        nBoxes: 18,
        randomColors: [
            '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
            '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
            '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
            '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
            '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
            '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
            '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
            '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
            '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
            '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
        ]
    }; 

    state = {
        boxes: this.randomColorGenerator()
    };

    colorGetter(currentColor) {
        let randomIndex = Math.floor(Math.random() * this.props.randomColors.length);
        let newColor = this.props.randomColors[randomIndex];

        if(!!currentColor) {            
            while(currentColor === newColor) {
                //console.log('loop hit', currentColor, newColor);
                randomIndex = Math.floor(Math.random() * this.props.randomColors.length);
                newColor = this.props.randomColors[randomIndex];
                //console.log(randomIndex,newColor);
            }
            //console.log('loop exit', currentColor, newColor);
        }
        
        return newColor;
    }

    randomColorGenerator() {
        const arr = Array.from({length: this.props.nBoxes});

        const initialBoxArr = arr.map((value,i) => ({id: i, color: this.colorGetter()}));
        console.log(initialBoxArr);

        return initialBoxArr;
    }

    handleClick = (e) => {    
        const id = +e.target.id;
        this.setState(state => {
            const arr =  state.boxes.map(box => {   
                return box.id === id ? { ...box, color: this.colorGetter(box.color)} : box;
            });
            return {boxes: arr};
        }); 
    }

    render() {
        return (
            <div>
                <h1>color container</h1>
                <div className="box-container">
                    {
                        this.state.boxes.map(box => <Box key={box.id} id={box.id} color={box.color} onClickHandler={this.handleClick}></Box>)
                    }
                </div>
            </div>
        );
    }
}

export default ColorContainer;
