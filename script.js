let bu = document.querySelector("button");
function Age(){
  let d = document.getElementById("d").value;
  let m = document.getElementById("m").value;
  let y = document.getElementById("y").value; 
  let show = document.querySelector('p');
  let c = 0;
  let b = 0;
  let n_y = [31,28,31,30,31,30,31,31,30,31,30,31]
  let l_y = [31,29,31,30,31,30,31,31,30,31,30,31]
  let today = new Date();
  let d1 = today.getDate();
  let m1 = today.getMonth();
  let y1 = today.getFullYear();
  for(let i=y; i<=y1; i++){
    let t=(i%4==0 && i%100!=0 || i%400==0)
    if (i==y){
        if (t){
            for(let k=m; k<13; k++){
                c+=l_y[k-1];
            }
        }
        else{
            for(let k=m; k<13; k++){
                c+=n_y[k-1];
            }
        }
        c-=d;
    }
    else if (i==y1){
        if (t){
            for(let k=1; k<=m1; k++){
                c+=l_y[k-1];
            }
        }
        else{
            for(let k=1; k<=m1; k++){
                c+=n_y[k-1];
            }
        }
        c+=d1;
    }
    else{
        if (t){
            c+=366
        }
        else{
            c+=365
        }
    }
 }
    show.innerText=`You are ${Math.floor(c/365)} years, ${Math.floor((c%365)/31)} months, ${(c%365)%31} days old.`;
}
bu.addEventListener("click",Age);
