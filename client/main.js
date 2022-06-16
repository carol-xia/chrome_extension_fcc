$(document).ready((e) => {
    $('#type-dropdown').on('click', () => {
      getPokemon();
    });
  });
  
  function getPokemon() {
    $.ajax({
      type: 'GET',
      url: './pokemon'
    })
      .done((data) => {
        render(data);
        // setTimeout(getMessage, 2000);
      });
  }
  
  function render(messages) {
    console.log(messages);
    // const $messages = $('<ol></ol>');
    // for (let i = 0; i < messages.length; i++) {
    //   $messages.append('<li>' + messages[i].message + '<br>' + messages[i].created_by + '</li>');
    // }
    // $('#message-box').append($messages);
  }
  