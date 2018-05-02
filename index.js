function theBeatlesPlay(musicians, instruments)
{
  var newArray = [];
  for(let i = 0; i < musicians.length; i++)
  {
    newArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return newArray;
}
function johnLennonFacts(array)
{
  var i = 0;
  while(i < array.length)
  {
    array[i] = array[i] + "!!!";
<<<<<<< HEAD
    i++;
  }
  return array;
}
function iLoveTheBeatles(int)
{
  var newArray = [];
  do
  {
    newArray.push("I love the Beatles!");
    int++;
  }
  while(int < 15)
  return newArray;
=======
  }
  return array;
>>>>>>> f6137e8f3b19f5809b5f62d59755679f6e3bce70
}