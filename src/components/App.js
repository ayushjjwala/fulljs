import React from 'react';
import Header from './Header';
import axios from 'axios';
import ContestPreview from './ContestPreview';

class App extends React.Component {
    state = {
        pageHeader: 'Naming Contest',
        contest: []
    };
    componentDidMount() {
        axios.get('/api/contests')
            .then(resp=>{
                this.setState({
                    contest: resp.data.contests
                });
            })
            .catch(console.error);
    }
    componentWillUnmount() {
    // clean timers, listeners
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.contest.map(contest=>
                        <ContestPreview key={contest.id}{...contest}/>
                    )}
                </div>
            </div>
        );
    }
};

export default App;