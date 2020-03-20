function banScroll(){
$('#header').on('scroll touchmove mousewheel', function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});
}
function callScroll(){
    $('#header').off('scroll touchmove mousewheel');
}