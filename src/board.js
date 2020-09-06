import React from 'react';
import Square from './square.js'


class Board extends React.Component {
  renderSquare(i) {
    const list = this.props.winlist.slice();
    const index = [
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ]
    const table =  (
      <div>
        {
          index.map(item => 
            <div key={`key-${item[0]}`} className="board-row">
              {
                item.map(it =>{
                  let classwin = list.indexOf(it) >= 0 ? "game-win" : "";
                  return (
                    <Square
                      key={it}
                      winclass={classwin}
                      value={this.props.squares[it]}
                      onClick={() => this.props.onClick(it)}
                    /> 
                  )
                })
              }
            </div>
          )
        }
      </div>
    )
    return table
  }

  render() {
    return (this.renderSquare());
  }
}

export default Board;