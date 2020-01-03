$(document).on('turbolinks:load', function () {
  function buildHTML(message) {
    if (message.image) {
      var html =
        `<div class="message_box" data-message-id=${message.id}>
         <div class="message_box_info">
           <div class="message_box_info_name">
             ${message.user_name}
           </div>
           <div class="message_box_info_date">
             ${message.created_at}
           </div>
         </div>
         <div class="message_box_content">
           <p class="message_box_text">
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
      return html;
    } else {
      var html =
        `<div class="message_box" data-message-id=${message.id}>
         <div class="message_box_info">
           <div class="message_box_info_name">
             ${message.user_name}
           </div>
           <div class="message_box_info_date">
             ${message.created_at}
           </div>
         </div>
         <div class="message_box_content">
           <p class="message_box_text">
             ${message.content}
           </p>
         </div>
       </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function (data) {
        var html = buildHTML(data);
        $('.messages').append(html);
        $('form')[0].reset();
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })
      .fail(function(data){
        alert('エラーが発生したためメッセージは送信できませんでした');
      })
      return false;
  })
});