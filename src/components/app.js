import React from 'react';
import Header from './header';

class App extends React.Component {
    state = {
        pageHeader: 'PinGredients'
    };

    render() {
        return (
            <div>
                <Header message={this.state.pageHeader}/>
                <div>

                </div>
            </div>
        )
    }
};

export default App;