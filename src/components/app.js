import React from 'react';
import Header from './header';
import BoardPreview from './boardPreview';

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
                        <BoardPreview key={board.boardId} {...board} />
                    )}
                </div>
            </div>
        )
    }
}

export default App;
