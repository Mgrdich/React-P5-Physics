import React, {Component} from 'react';

class Searchbox extends Component {

    render() {
        const {onChange}=this.props;
        return (
                <form className="form-inline pull-right fontify mt-5 middle  ">
                    <input className="search form-control " type="search" name="search" placeholder="Search" aria-label="Search" onChange={onChange}/>
                </form>
        );
    }
}

export default Searchbox;