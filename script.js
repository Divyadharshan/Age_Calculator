let bu = document.querySelector("button");
function getdays(year,month){
  return new Date(year,month,0).getDate();
}
function Age(){
  let d1 = document.getElementById("d").value;
  let m1 = document.getElementById("m").value+1;
  let y1 = document.getElementById("y").value; 
  let show = document.querySelector('p');
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth()+1;
  let y2 = today.getFullYear();
  let d3,m3,y3;
  y3=y2-y1;
  if(m2>=m1){
    m3=m2-m1;
  }
  else{
    y3--;
    m3=12+m2-m1;
  }
  if (d2>=d1){
    d3=d2-d1;
  }
  else{
    m3--;
    d3=getdays(y1,m1)+d2-d1;
  }
  if (m3<0){
    m3=11;
    y3--;
  }
   console.log(y3,m3,d3);
    show.innerText=`You are ${y3} years, ${m3} months, ${d3} days old.`;
}
bu.addEventListener("click",Age);
