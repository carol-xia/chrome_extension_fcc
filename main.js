$(document).ready((e) => {
    getMessage();
    $('#message-button').on('click', () => {
      sendMessage();
    });
  });
  
  function getMessage() {
    $('#message-box').empty();
    $.ajax({
      type: 'GET',
      url: './messages',
      headers: {
        'Authorization': 'Basic secret_key'
      }
    })
      .done((data) => {
        renderMessages(data);
        // setTimeout(getMessage, 2000);
      });
  }
  
  function renderMessages(messages) {
    const $messages = $('<ol></ol>');
    for (let i = 0; i < messages.length; i++) {
      $messages.append('<li>' + messages[i].message + '<br>' + messages[i].created_by + '</li>');
    }
    $('#message-box').append($messages);
  }
  