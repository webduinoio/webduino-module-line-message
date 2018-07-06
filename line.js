+(function (window, document) {

  'use strict';

  function line_ifttt(event, key, v1, v2, v3) {
    var obj = {};
    if (v1 != "''" || v1.length > 0) {
      obj.value1 = v1;
    }
    if (v2 != "''" || v1.length > 0) {
      obj.value2 = v2;
    }
    if (v3 != "''" || v1.length > 0) {
      obj.value3 = v3;
    }
    var uri = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key;
    $.post(uri, obj, function (e) {
      console.log(e);
    });
  }

  function line_notify(token, msg) {
    var data = {
      token: token
    };
    if (typeof msg != 'object') {
      data.message = msg;
    } else {
      if (msg.type == 'sticker') {
        data.message = msg.message;
        data.stickerPackageId = msg.stickerPackageId;
        data.stickerId = msg.stickerId;
      } else if (msg.type == 'image') {
        data.message = msg.message;
        data.imageThumbnail = msg.imageUri;
        data.imageFullsize = msg.imageUri;
      }
    }

    $.post('https://script.google.com/macros/s/AKfycbyJClsatp_iLXCzBfdhqaQGriloa0JS5BwMldbyO25M8KiNVUs/exec',
      data,
      function (e) {
        console.log(e);
      });
  }

  function line_bot(token, uid, msg) {
    var data = {
      token: token,
      uid: uid
    };
    if (typeof msg != 'object') {
      data.type = 'text';
      data.text = msg;
    } else {
      if (msg.type == 'sticker') {
        data.type = 'sticker';
        data.text = '';
        data.packageId = msg.stickerPackageId;
        data.stickerId = msg.stickerId;
      } else if (msg.type == 'image') {
        data.type = 'image';
        data.text = '';
        data.previewImageUrl = msg.imageUri;
        data.originalContentUrl = msg.imageUri;
      }
    }
    $.post('https://script.google.com/macros/s/AKfycbwM1sSrweL1tv-UsyDnG-rUjMgXSzDLA1p5HAH64lXPOP8pcVE/exec',
      data,
      function (e) {
        console.log(e);
      });
  }

  window.line_ifttt = line_ifttt;
  window.line_notify = line_notify;
  window.line_bot = line_bot;

}(window, window.document));
