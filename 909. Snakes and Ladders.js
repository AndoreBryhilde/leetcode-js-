//蛇行棋(例:6*6)
//棋盤編號(以此類推)
//36 35 34 33 32 31
//25 26 27 28 29 30
//24 23 22 21 20 19
//13 14 15 16 17 18
//12 11 10 09 08 07
//01 02 03 04 05 06

//一般棋盤只能走一格 矩陣內容會是-1 特殊棋盤可以直接移動 會表示可以直接去的格子編號
//然後每次移動的格數為1-6 最少幾次移動可以到最後一格？
//利用BFS去探索每次移動後的位置 如果到N*N就是終點
//利用q紀錄每次要移動的目的地 利用v紀錄移動過的地方
//如果把所給的棋盤內容矩陣reverse，或許會比較快
//檢視曾經移動過的地方如果用Set儲存 之後尋找也可能比較快

You are given an n x n integer matrix board where the cells are labeled from 1 to n2 in a Boustrophedon style starting from the bottom left of the board (i.e. board[n - 1][0]) and alternating direction each row.
You start on square 1 of the board. In each move, starting from square curr, do the following:
Choose a destination square next with a label in the range [curr + 1, min(curr + 6, n2)].
This choice simulates the result of a standard 6-sided die roll: i.e., there are always at most 6 destinations, regardless of the size of the board.
If next has a snake or ladder, you must move to the destination of that snake or ladder. Otherwise, you move to next.
The game ends when you reach the square n2.
A board square on row r and column c has a snake or ladder if board[r][c] != -1. The destination of that snake or ladder is board[r][c]. Squares 1 and n2 do not have a snake or ladder.
Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do not follow the subsequent snake or ladder.
For example, suppose the board is [[-1,4],[-1,3]], and on the first move, your destination square is 2. You follow the ladder to square 3, but do not follow the subsequent ladder to 4.
Return the least number of moves required to reach the square n2. If it is not possible to reach the square, return -1.

Example 1:
Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]
Output: 4
Explanation: 
In the beginning, you start at square 1 (at row 5, column 0).
You decide to move to square 2 and must take the ladder to square 15.
You then decide to move to square 17 and must take the snake to square 13.
You then decide to move to square 14 and must take the ladder to square 35.
You then decide to move to square 36, ending the game.
This is the lowest possible number of moves to reach the last square, so return 4.

Example 2:
Input: board = [[-1,-1],[-1,3]]
Output: 1
 
Constraints:
n == board.length == board[i].length
2 <= n <= 20
grid[i][j] is either -1 or in the range [1, n2].
The squares labeled 1 and n2 do not have any ladders or snakes.

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
  const N = board.length;
  const getLoc=(pos)=>{
    pos--;
    let row=~~((pos)/N);
    let col=(pos)%N;
    col=(row%2)===1?N-col-1:col;
    row=N-row-1;
    return [row,col];
  }
  const q=[1];
  const v={'1': 0};
  while(q.length){
    const n=q.shift();
    if(n===N*N)return v[n];
    for(let i=n+1;i<=Math.min(n+6,N*N);i++){
      const [r,c]=getLoc(i);
      const next=board[r][c]===-1?i:board[r][c];
      if(v[next]===undefined) {
        q.push(next);
        v[next]=v[n]+1;
      }
    }
  }
  return -1;
};
