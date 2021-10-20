//Get maxValue function 
//This is what I was trying to explain but I couldn't say it clearly-__-.
const numArrays = [1,40,50,20,30,11];

const getMaxValue = (array) =>{
  let prevNum = 0;

  for(let i=0; i<= array.length; i++){
    const currentNum = array[i];
    if(prevNum < currentNum){
      prevNum = currentNum
    }
  }
  return prevNum;
}
console.log(getMaxValue(numArrays))  // 50


//maxNum and averageNum difference in percentage
const maxNum = 50;
const avgNum = 25;
const sum = maxNum+avgNum
const numDifference = (maxNum/sum) - (avgNum/sum) || (maxNum-avgNum)/sum

