jQuery(document).ready(function(e){var a,t,i=1+parseInt("070")-56,l=e("#emg_images_container ul.images_list"),o=e(".noimgs");jQuery(".emg_add_images").on("click",function(e){var r;a=jQuery("ul.images_list li").length,jQuery("#moreimages").text(""),jQuery("#mutiplemsg").text(""),jQuery("#emg-mm-additional-note").remove();var n=function(){jQuery('<p id="emg-mm-additional-note" style="display:none; color:red;margin-left:10px;float:right;margin-top:16px;font-style:italic;">NOTE: Use <strong>Ctrl + Click</strong> on each image to select multiple images at once</p>').insertAfter(jQuery("#media-attachment-date-filters")),jQuery("#emg-mm-additional-note").fadeIn(500)};return setTimeout(n,300),clearTimeout(n),a>=i?(jQuery("#mutiplemsg").html("Free version only allows you to display "+i+" images per galleries, please upgrade to <b>Pro Version</b> so you can insert unlimited images."),jQuery("#moreimages").text(""),jQuery("#myModal").modal({keyboard:!1,backdrop:"static"}),!1):(e.preventDefault(),t?void t.open():(t=wp.media.frames.downloadable_file=wp.media({title:"Select Images",button:{text:"Insert Images"},multiple:!0,library:{type:"image"}}),t.on("select",function(){var e=t.state().get("selection");e.map(function(t){if(t=t.toJSON(),t.id){r="undefined"==typeof t.sizes.thumbnail?"undefined"==typeof t.sizes.medium?t.sizes.full.url:t.sizes.medium.url:t.sizes.thumbnail.url;var n=a+e.length,m=i-a;if(n>i)return jQuery("#mutiplemsg").html("Free version only allows you to display "+i+" images per galleries, please upgrade to <b>Pro Version</b> so you can insert unlimited images."),jQuery("#moreimages").html('<b>NOTE: You still have <span style="font-weight:bold;color: #E9910C;">'+m+"</span> image(s) left.</b>"),jQuery("#myModal").modal({keyboard:!1,backdrop:"static"}),!1;o.hide();var s='                                <li class="emgthumbhandler" data-attachment_id="'+t.id+'">								<input type="hidden" name="easmedia_meta[easmedia_metabox_media_gallery][]" value="'+t.id+'" />                                <img src="'+r+'" />								<span class="emg-del-images"></span>                                </li>';l.append(s).find("li:last").hide().fadeIn("slow")}})}),void t.open()))}),e("#emg_images_container").on("click",".emg-del-images",function(){return jQuery(this).parent().fadeOut(500,function(){e(this).closest("li.emgthumbhandler").remove(),"0"==e(".emg-del-images").length&&o.show()}),!1}),jQuery("#prcngtableclr").on("click",function(){return jQuery("#myModalupgrade").modal({keyboard:!1,backdrop:"static"}),!1}),jQuery("#myModal").on("hidden.bs.modal",function(){return jQuery("#myModalupgrade").modal({keyboard:!1,backdrop:"static"})})});