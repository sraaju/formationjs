console.log('hello world')
function LoadDate(){
  setInterval(function(){
    var date1 = new Date().toLocaleString()
    var foot1 = document.getElementById('footer')
    foot1.innerHTML =   date1
  }, 1000 )
}
document.addEventListener('DOMContentLoaded', function(){
    LoadDate();
})
