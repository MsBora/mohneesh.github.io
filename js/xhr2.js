
var x;
var y=[];
function successListener() {  
    var data = JSON.parse(this.responseText);
    x=data;
    
    // console.log(data);
    // console.log(X)  
    
    // document.write(this.responseText)  
  }
  
  function failureListener(err) {  
    console.log('Request failed', err);  
  }
  
  var request = new XMLHttpRequest();  
  request.onload = successListener;  
  request.onerror = failureListener;  
//   request.setRequestHeader('Authorization','012814972460e69ab8bf9f169c1767e49f49eeb8')
  request.open('get', 'https://api.github.com/users/MsBora/repos', true);  
  request.send();
 
function clickhandler(){
  
       Object.keys(x).forEach((key)=>{
           y =document.getElementsByTagName('a')
           Object.keys(y).forEach((i)=>{
            if (y[i].id === key) { 
              y[i].href= x[key].html_url
                      document.getElementById(key).innerText=x[key].name;

              // console.log(x[key].html_url)
           }
           })  
                
        })
        // console.log(y)
        document.getElementById('para').innerText="Ta Daaaa"
      
        
}
function displayMsg(){
  document.getElementById('ten').innerHTML=`<h1 style="size=200%">Queen's Sen. Sec. School</h1><p>Haldwani,Nainital</p><p>Apr-2011 -- Mar-2012</p>`
}
function displayMsg1(){
  document.getElementById('twe').innerHTML=`<h1 style="size=200%">Queen's Sen. Sec. School</h1><p>Haldwani,Nainital</p><p>Apr-2013 -- Mar-2014</p>`
}
function displayMsg2(){
  document.getElementById('uni').innerHTML=`<h1 style="size=200%">Birla Institute of Applied Sciences</h1><p>Bhimtal,Nainital</p><p>Aug-2015 -- May-2019</p>`
}