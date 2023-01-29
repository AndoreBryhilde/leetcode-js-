Design and implement a data structure for a Least Frequently Used (LFU) cache.
Implement the LFUCache class:
LFUCache(int capacity) Initializes the object with the capacity of the data structure.
int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.
When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.
The functions get and put must each run in O(1) average time complexity.

//最近不常使用的cache要背替換掉
//如果有兩個使用率同樣低的，替換掉比較就不被使用的
//每個cache有一個獨立的記數器，首次被投入使用就設為一

Example 1:
Input
["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, 3, null, -1, 3, 4]

Explanation
// cnt(x) = the use counter for key x
// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
LFUCache lfu = new LFUCache(2);
lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
lfu.get(1);      // return 1
                 // cache=[1,2], cnt(2)=1, cnt(1)=2
lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
                 // cache=[3,1], cnt(3)=1, cnt(1)=2
lfu.get(2);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,1], cnt(3)=2, cnt(1)=2
lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
                 // cache=[4,3], cnt(4)=1, cnt(3)=2
lfu.get(1);      // return -1 (not found)
lfu.get(3);      // return 3
                 // cache=[3,4], cnt(4)=1, cnt(3)=3
lfu.get(4);      // return 4
                 // cache=[4,3], cnt(4)=2, cnt(3)=3
 
Constraints:
0 <= capacity <= 104
0 <= key <= 105
0 <= value <= 109
At most 2 * 105 calls will be made to get and put.

//把最近不常用的cache替換掉 (簡單易懂使用doublelinkedlist)
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity=capacity;//容量
    this.size=0;//目前的內容大小
    this.least=0;最不常使用的
    this.nodeHash = new Map();//各cache的hash表
    this.freqHash = new Map();//使用次數Map
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    let node=this.nodeHash.get(key);//取得要查詢的cache
    if(!node)return -1;//不存在
    this.freqHash.get(node.freq).removenode(node);//從使用次數Map移除
    if(node.freq==this.least&&this.freqHash.get(node.freq).isempty()){
      this.least++ //如果這個cache的使用次數跟最不常使用的的相同且次數Map中沒有相同的 更新this.least;
    }
    node.freq++;
    if(!this.freqHash.get(node.freq)){
       this.freqHash.set(node.freq,new doublelinklist())更新使用次數的Map，創建這個使用次數的cache表
    }
    this.freqHash.get(node.freq).inserthead(node);//將這個cache依照使用次數插入相應的cache表中
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(!this.capacity)return; //容量為零，不可能執行
    let node=this.nodeHash.get(key); 從cache hash表中尋找是否存在在cache中
    if(!node){//不存在
        this.size++;//cache 內容增加
        if (this.size>this.capacity){//超出容量
            let tailKey=this.freqHash.get(this.least).removetail();拋棄最後一個不常使用的cache
            this.nodeHash.delete(tailKey);
            this.size--;
        }
        let newNode=new Node(key,value);
        if(!this.freqHash.get(1)){//不存在只使用1次的cache塊時
            this.freqHash.set(1, new doublelinklist())//建立新的，插入
        }
        this.freqHash.get(1).inserthead(newNode);加入只使1次的cache表中
        this.nodeHash.set(key, newNode);
        this.least = 1;
    }else{
        node.val=value;
        this.freqHash.get(node.freq).removenode(node);//刪除使用頻率表中的紀錄
        if(node.freq==this.least&&this.freqHash.get(node.freq).isempty()){
            this.least++;//如果是最不常使用的且沒有比他更不常使用的，更新this.least
        } 
        node.freq++;
        if (!this.freqHash.get(node.freq)){
            this.freqHash.set(node.freq,new doublelinklist())
        }
        this.freqHash.get(node.freq).inserthead(node);
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 function Node(key,value){
   this.key=key;this.val=value;this.next=this.prev=null;this.freq=1;  
}

function doublelinklist(){
   this.head=new Node(null,null);this.tail=new Node(null,null);
   this.head.next=this.tail;this.tail.prev=this.head;  
}

doublelinklist.prototype.inserthead=function(node){//插入紀錄表頭部
   node.prev=this.head;node.next=this.head.next;
   this.head.next.prev=node;this.head.next=node; 
}

doublelinklist.prototype.removenode=function(node){//移除目標節點
   let prev=node.prev;let next=node.next;prev.next=next;next.prev=prev; 
}

doublelinklist.prototype.removetail=function(){//移除最尾端
   let node=this.tail.prev;this.removenode(node);return node.key;
}

doublelinklist.prototype.isempty=function(){
   return this.head.next.val==null;
}

//利用fifo達成(類似doublelinkedlinst)
function FiFo(){
  this.size=0;
  this.front={};
  this.back={};
  this.front.next=this.back;
  this.back.prev=this.front;

  this.remove=function (node){
    node.next.prev=node.prev;
    node.prev.next=node.next;
    node.prev=undefined;
    node.next=undefined;
    this.size--;
  };

  this.poll=function(){
    if(this.front.next==this.back){return undefined;}
    let node=this.front.next;
    this.front.next=node.next;
    node.next.prev=this.front;
    node.prev=undefined;
    node.next=undefined;
    this.size--;
    return node;
  };

  this.add=function(node){
    node.prev=this.back.prev;
    node.next=this.back;
    this.back.prev.next=node;
    this.back.prev=node;
    this.size++;
  };

  this.insertAfter=function(node,prev){
    node.prev=prev;
    node.next=prev.next;
    prev.next.prev=node;
    prev.next=node;
    this.size++;
  };

  this.push = function (node) {
    node.prev=this.front;
    node.next=this.front.next;
    this.front.next.prev=node;
    this.front.next=node;
    this.size++;
  };
};

LFUCache = function (capacity) {
  this.capacity=capacity;
  this.keyMapping=new Map();
  this.counterMapping=new Map();
  this.counterFiFo=new FiFo();
};

LFUCache.prototype.addNodeToCounter = function (node) {
  let counte =node.counter;
  let fifo;
  if (this.counterMapping.has(counter)) {
    fifo = this.counterMapping.get(counter).fifo;
  }else{
    fifo = new FiFo();
    let counterNode = { counter, fifo };
    this.counterMapping.set(counter, counterNode);
    this.counterFiFo.insertAfter(
      counterNode,
      this.counterMapping.get(counter - 1)
    );
  }
  fifo.add(node);
};

LFUCache.prototype.addNewNodeToCounter = function (node) {
  let counter=1;
  let fifo;
  if(this.counterMapping.has(counter)){
    fifo=this.counterMapping.get(counter).fifo;
  }else{
    fifo=new FiFo();
    let counterNode={counter,fifo};
    this.counterMapping.set(counter,counterNode);
    this.counterFiFo.push(counterNode);
  }
  fifo.add(node);
};

LFUCache.prototype.removeCounter=function(counterNode){
  this.counterFiFo.remove(counterNode);
  this.counterMapping.delete(counterNode.counter);
};

LFUCache.prototype.get = function (key) {
  if(!this.keyMapping.has(key)){return -1;}
  let node=this.keyMapping.get(key);
  let counter=node.counter;
  let prevCounterNode=this.counterMapping.get(counter);
  prevCounterNode.fifo.remove(node);
  node.counter++;
  this.addNodeToCounter(node);
  if(!prevCounterNode.fifo.size){
    this.removeCounter(prevCounterNode);
  }
  return node.value;
};

LFUCache.prototype.put=function(key, value){
  if(this.capacity<=0){return;}
  i (this.get(key)>-1){
    this.keyMapping.get(key).value=value;
    return;
  }
  if(this.keyMapping.size==this.capacity){
    let counterNode=this.counterFiFo.front.next;
    let node=counterNode.fifo.poll();
    if(counterNode.fifo.size==0){
      this.removeCounter(counterNode);
    }
    this.keyMapping.delete(node.key);
  }
  let node={key,value,counter:1};
  this.keyMapping.set(key,node);
  this.addNewNodeToCounter(node);
};
 
