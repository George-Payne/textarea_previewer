/*!
 * jQuery Textarea Live preview plugin
 * Author: George Payne
 * Licensed under the MIT license
 */

jQuery.fn.extend({
	textareaPreview: function(){
		return this.each(function(){
			var $this = $(this);
	        var $parent = $this.parent();
	        var $previewer = $('<div/>', {
	        	class:'previewer',
	        });
	        $parent.append($previewer);

			$this.on('input keyup', function(event) {
		        $previewer.html($this.val().replace(/\n\n\r?/g, '<br/>'));
			});
		});
	}
});
