import React from 'react';

const boardPreview = (board) => (
    <div className="boardPreview">
        <div>
            {board.id}
        </div>
        <div>
            {board.name}
        </div>
    </div>
);

export default boardPreview;
