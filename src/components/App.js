import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';

class App extends React.Component {

    state = {results: []};

    onSubmit = async (term) => {
       const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({results: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSubmit}/>
                Found {this.state.results.length} images
            </div>
        );
    }
}

export default App;