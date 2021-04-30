$('img').on("click",function(){
    console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    let src = $(this).attr('src');
    let data = $(this).attr('data-alt-src');
    $(this).attr("src",data);
    $(this).attr("data-alt-src",src);
  });
  