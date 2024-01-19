let bu = document.querySelector("button");
function getdays(year,month){
  return new Date(year,month,0).getDate();
}
function Age(){
  let d = document.getElementById("d").value;
  let m = document.getElementById("m").value;
  let y = document.getElementById("y").value; 
  let show = document.querySelector('p');
  let today = new Date();
  let d1 = today.getDate();
  let m1 = today.getMonth();
  let y1 = today.getFullYear();
  let d2,m2,y2;
  y2=y1-y;
  if(m1>=m){
    m2=m1-m;
  }
  else{
    y2--;
    m2=12+m1-m;
  }
  if (d1>=d){
    d2=d1-d;
  }
  else{
    d2=getdays(y,m)+d1-d;
  }
  if (m2<0){
    m2=11;
    y2--;
  }
    show.innerText=`You are ${y2} years, ${m2} months, ${d2} days old.`;
}
bu.addEventListener("click",Age);
