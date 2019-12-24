$(document).ready(function() {
  const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

  fetchQuote();

  $("#new-quote").on("click", () => {
    fetchQuote();
  });

  function fetchQuote() {
    $.ajax({
      url: URL,
      success: data => {
        $("#text").html('<blockquote>"' + data[0].quote + '"</blockquote>');
        $("#author").html("Author: <strong>" + data[0].character + "</strong>");
      }
    });
  }
});
