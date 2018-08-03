jQuery(document).ready(function(){
	var appeared = false;
	jQuery("#qx-bar-counter-186359").appear();
	jQuery("#qx-bar-counter-186359").on("appear", function(){
		if(appeared) return;
		appeared = true;
		jQuery(this).find('.qx-progress').each(function(){
			var progress = jQuery(this).data('progress') + '%';
			jQuery(this).find('.qx-progress-bar').css('width', progress);
		});
	});
});;jQuery(document).ready(function(){
  var appeared = false;
  jQuery("#qx-number-counter-341389").appear();
  jQuery("#qx-number-counter-341389").on("appear", function(){
    if(appeared) return;
    appeared = true;
    var range = jQuery(this).attr('data-range');
    jQuery(this).find('.qx-nc-number').countTo({
      from: 0,
      to: range,
      speed: 2000,
      refreshInterval: 50,
    });
  });
});
;jQuery(document).ready(function(){
  var appeared = false;
  jQuery("#qx-number-counter-611472").appear();
  jQuery("#qx-number-counter-611472").on("appear", function(){
    if(appeared) return;
    appeared = true;
    var range = jQuery(this).attr('data-range');
    jQuery(this).find('.qx-nc-number').countTo({
      from: 0,
      to: range,
      speed: 2000,
      refreshInterval: 50,
    });
  });
});
