/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */

(function($){
	$(document).ready(function(){
		var slide_number = 1;
	    $(".slide-control").click(function(){
	        if ( slide_number % 2 == 0) {
                $(".process-for-center").fadeOut();
                $(".process-for-seeker").fadeIn();
            }
            else {
                $(".process-for-seeker").fadeOut();
                $(".process-for-center").fadeIn();
            }
            slide_number = slide_number + 1;
        });
	}); // End document ready
})(this.jQuery);
