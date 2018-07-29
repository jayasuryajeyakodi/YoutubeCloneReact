import React from 'react'


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "d"
        }
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            term: e.target.value
        }, () => {
            this.props.searchVideo(this.state.term);  
        })
    }
    render() {
        return( 
                <div>
                <input value={this.state.term} onChange={this.handleChange} />
                </div>
        );
    }
}

export default SearchBar