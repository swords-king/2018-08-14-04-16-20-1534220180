module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.itemcount()}
o) 平均值 = ${sequence.avg()}`);
};

class Sequence {
  constructor(input) {
    this.numlist = input
  }

  minimum() {
    // Write your code here
	var minnum = this.numlist[0];
	for (var i=1; i<this.numlist.length;i++)
		if(minnum > this.numlist[i]){
			minnum = this.numlist[i];}
	return minnum;
  }

  // Write your code here
  maxmum() {
	  var maxnum = this.numlist[0];
	  for (var i=1; i<this.numlist.length;i++)
		  if(maxnum < this.numlist[i]){
				maxnum = this.numlist[i];}
	  return maxnum;
  }
  itemcount() {
	  return this.numlist.length;
  }
  avg() {
	  var sum = 0;
	  for (var x of this.numlist){
		sum += x;
	  }
	  var avgs = sum/this.numlist.length
	  return avgs.toFixed(2);
  }
}
