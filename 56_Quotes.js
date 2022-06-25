
    const text=document.querySelector('.text');
    const button=document.querySelector('.bnt');

const generateQuote=()=>{

    fetch('https://api.quotable.io/random')
    .then((res)=>res.json())
    .then((data)=>text.innerHTML=data.content)
    .catch((err)=>console.log(err))
}

    
button/addEventListener('click',generateQuote);
generateQuote();
