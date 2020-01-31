// image slidebar code
function slider() {
  $current = $('.slider img.active');
  if ($current.length == 0) {
    $('.slider img:first-child').addClass('active');
  } else {
    $next = $current.removeClass('active').next();
    if ($next.length == 0) {
      $('.slider img:first-child').addClass('active');
    } else {
      $next.addClass('active');
    }
  }
}
setInterval(slider, 5000);

// reservation form
(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);
			// on focus add cladd active to label
			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);
// loader
var myVar;

function onloadFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {

  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// Email
function sendEmail() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var city = document.getElementById("city").value;
	var country = document.getElementById("country").value;
	var arrive = document.getElementById("arrive").value;
	var depart = document.getElementById("depart").value;
	var bed = document.getElementById("bed").value;
	var ppl = document.getElementById("ppl").value;
	var comments = document.getElementById("comments").value;
	var body ="Име:" + name 
	 + "Имейл:" + email
	 + "Телефон:" + phone
	 + "Град:" + city
	 + "Държава:" + country 
	 + "Дата на пристигане:"+arrive
	 + "Дата на заминаване:"+depart
	 + "Брой възрастни:"+ppl
	 + "Брой легла:"+ bed
	 + "Коментар:" + comments
	Email.send({
	Host : "smtp25.elasticemail.com",
    Username : "",
    Password : "",
    To : '',
    From : "",
    Subject : "Нова резервация",
    Body : "Нова резервация" + body

}).then(

);
}
//reload
function reloadPage() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}
//validation
$(function() {  
    $("#btnsub").click(function() {
   	   $("#form1").submit(function(e) {
       e.preventDefault();
    });
    if($("#name").val() !="" && $("#email").val() !=""
       	&& $("#phone").val() !="" && $("#city").val() !=""
       	&& $("#country").val() !="" && $("#arrive").val() !=""
       	&& $("#depart").val() !="") {
         $('#myModal').modal('show');
    }
   });
});
// snow efect
$.letItSnow('#myDiv', {
  stickyFlakes:'lis-flake--js',
  makeFlakes:true,
  sticky:true
});

