$(document).ready(function(){
  
    const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    
    fetchQuote()

    $('#new-quote').on('click', ()=>{
        fetchQuote()
    })

    function fetchQuote(){
        $.ajax({
            url: URL,
            success: (data)=>{
                $('#text').html(data[0].quote)
                $('#author').html(data[0].character)
                console.log(data)
            }
        })
    }

})
