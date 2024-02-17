function convert() {
    let bw = document.getElementById("inp1").value;
    let aw = document.getElementById("inp2").value;
    let result1 = (aw-bw)/bw;
    let shrinkage = result1 * 100;
    document.getElementById("res").innerText="Result is: "+ shrinkage+ " %";        
}   