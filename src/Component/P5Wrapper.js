import React, {Component} from 'react';
import p5 from "p5";

import PropTypes from 'prop-types'



class P5Wrapper extends Component {
    static propTypes = {
        p5Props: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.canvas = new p5(this.props.sketch, "parent");
        if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
        }
    }

    componentWillReceiveProps(newprops) {
        if(this.props.sketch !== newprops.sketch){
            this.wrapper.removeChild(this.wrapper.childNodes[0]);
            this.canvas = new p5(newprops.sketch, "parent");
        }
        if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
            this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
        }
    }


    render() {
        return (
            <>
                <div id="parent"/>
            </>
        );
    }

}

export default P5Wrapper;