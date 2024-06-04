document.querySelector('.intBtn').addEventListener('click', function() {
    
    const p = parseFloat(document.getElementById('p').value);
    const r = parseFloat(document.getElementById('r').value);
    const t = parseFloat(document.getElementById('t').value);
    
    const interest = (p * r * t) / 100;

    document.querySelector('.intConv').innerText = interest + " %";
});