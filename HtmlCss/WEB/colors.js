var Links = {
  Links: function(color) {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //     }
    $('a').css('color', color);
  }
}
var Body = {
  setColor: function(color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color)
  },
  setBackgroundColor: function(color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
  }
}

function nightDayHandler(sleepy) {
  if (sleepy.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    sleepy.value = 'day';
    Links.Links('powderblue')
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    sleepy.value = 'night';
    Links.Links('blue');
  }
}