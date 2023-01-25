On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.
When the rook moves, it chooses one of four cardinal directions (north, east, south, or west), then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn, or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn. The number of available captures for the white rook is the number of pawns that the rook is attacking.
Return the number of available captures for the white rook.

Example 1:
Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: In this example, the rook is attacking all the pawns.

Example 2:
Input: board = [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: The bishops are blocking the rook from attacking any of the pawns.

Example 3:
Input: board = [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: The rook is attacking the pawns at positions b5, d6, and f5.

Constraints:
board.length == 8
board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let Rpos;let ans=0;
    for(let i=0;i<8;i++){for(let j=0;j<8;j++){
        if(board[i][j]=='R'){Rpos=[i,j]}
    }}
    for(let i=Rpos[1];i>=0;i--){
        if(board[Rpos[0]][i]=='B'){break;}
        if(board[Rpos[0]][i]=='p'){ans++;break;}
    }
    for(let i=Rpos[1];i<8;i++){
        if(board[Rpos[0]][i]=='B'){break;}
        if(board[Rpos[0]][i]=='p'){ans++;break;}
    }
    for(let i=Rpos[0];i>=0;i--){
        if(board[i][Rpos[1]]=='B'){break;}
        if(board[i][Rpos[1]]=='p'){ans++;break;}
    }
    for(let i=Rpos[0];i<8;i++){
        if(board[i][Rpos[1]]=='B'){break;}
        if(board[i][Rpos[1]]=='p'){ans++;break;}
    }
    return ans;
};

//fast way 
var numRookCaptures = function(board) {
    let [x, y] = [0, 0];
    for (let row in board) {
        if (board[row].indexOf('R') > -1) {
            [x, y] = [row, board[row].indexOf('R')];
            break;
        }
    }
    let captures = [0, 0];  
    let i = 0;
    let j = 0;
    while (i < 8) {
        if (board[i][y] === 'p' || board[i][y] === 'B') {
            let n = +(board[i][y] === 'p');
            captures[0] = (i < x ? 0 : captures[0]) + n;
            if (i > x) break;
        }
        i ++;
    }
    while (j < 8) {
        if (board[x][j] === 'p' || board[x][j] === 'B') {
            let n = +(board[x][j] === 'p');
            captures[1] = (j < y ? 0 : captures[1]) + n;
            if (j > y) break;
        }
        j ++;
    }
    return captures[0] + captures[1];
};
