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
        c-=d-1
        console.log(c);
    }
    else if (i==y1){
        if (t){
            for(let k=1; k<m1; k++){
                c+=l_y[k-1];
            }
        }
        else{
            for(let k=1; k<m1; k++){
                c+=n_y[k-1];
            }
        }
        c+=d1;
    }
    else{
        if (t){
            c+=366
            b+=366
        }
        else{
            c+=365
            b+=365
        }
    }
 }
    if (y1-y-1<0){
        show.innerText=`You are less than one year old.`;
    }
    else if (y1-y-1<=0){
        show.innerText=`You are Approximately one year old.`;
    }
    else{
       console.log(c);
       console.log(b);
       show.innerText=`You are ${y1-y-1} years, ${Math.round((c-b)/30)} months, ${(c-b)%30} days old.`;
    }
}
bu.addEventListener("click",Age);
