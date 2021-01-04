function nightDayHandler(self) {
  var Links = {
    setColor:function(color){
      $('a').css('color', color);
    }
  }
  var Body = {
    setColor:function(color){
      $('body').attr('class', color);
    }
  }
  var Border = {
    setColor:function(color){
      $('h1,#article').attr('class',color);
    },
    reMove:function(color){
      $('h1,#article').removeClass(color);
    }
  }
  var Button = {
    setValue:function(value){
      $('#nightButton').val(value);
    }
  }
  //왠지 모르겠지만 if문 안에는 jquery문이 통하지 않는다... 중요!!
  if (self.value === 'night') {
    Body.setColor('black');
    Links.setColor('white');
    Border.setColor('white');
    Button.setValue('day');
  } else {
    Body.setColor('white');
    Links.setColor('black');
    Border.reMove('white');
    Button.setValue('night');
  }

}
