import React from 'react';
import Header from './header';
import boardPreview from './boardPreview';

class App extends React.Component {
    state = {
        pageHeader: 'PinGredients'
    };

    render() {
        return (
            <div>
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.boards.map(board =>
                        <boardPreview key={board.id} {...board} />
                    )}
                </div>
            </div>
        )
    }
}

export default App;
