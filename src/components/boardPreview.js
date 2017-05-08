import React from 'react';

const boardPreview = (board) => (
    <div className="boardPreview">
        <div>
            {board.boardId}
        </div>
        <div>
            {board.boardName}
        </div>
    </div>
);

export default boardPreview;
