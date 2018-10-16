(function($) {

	'use strict';

    Drupal.behaviors.tabLinks = {
        attach:function(context, settings) {

            $('body #block-featureslist .second-block ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');

                $('body #block-featureslist .second-block ul.tabs li').removeClass('current');
                $('body #block-featureslist .second-block .tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });

            $('body #block-featureslist ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');

                $('body #block-featureslist ul.tabs li').removeClass('current');
                $('body #block-featureslist .tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });

        }
    };


})(jQuery);
//# sourceMappingURL=../scripts/application.js.map
