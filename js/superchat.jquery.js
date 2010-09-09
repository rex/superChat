$(document).ready(function() {
	
	
	$("#superchat_settings a").click(function() {
		var active = $(this).attr("name");
		var view_active = $("#superchat_view a").attr("name");
		var settingsWindow = $("#superchat_settings_displaybox");
		var viewWindow = $("#superchat_view_displaybox");
		var settingsButton = $("#superchat_settings a");
		var viewButton = $("#superchat_view a");
		
		if(view_active == 'active') {
			viewWindow.fadeOut("fast");
			viewButton.removeClass("superchat_view_active").attr("name","");
		}
		if(active == 'active') {
			settingsWindow.fadeOut("fast");
			settingsButton.removeClass("superchat_settings_active").attr("name","");
		} else {
			settingsButton.addClass("superchat_settings_active").attr("name","active");
			settingsWindow.children(".tab_name").text("settings");
			settingsWindow.css("marginLeft","870px").fadeIn("fast");
		}
	});
	
	$("#superchat_view a").click(function() {
		var active = $(this).attr("name");
		var settings_active = $("#superchat_settings a").attr("name");
		var settingsWindow = $("#superchat_settings_displaybox");
		var viewWindow = $("#superchat_view_displaybox");
		var settingsButton = $("#superchat_settings a");
		var viewButton = $("#superchat_view a");
		
		if(settings_active == 'active') {
			settingsWindow.fadeOut("fast");
			settingsButton.removeClass("superchat_settings_active").attr("name","");
		}
		if(active == 'active') {
			console.log('View is active.');
			viewWindow.fadeOut("fast");
			viewButton.removeClass("superchat_view_active").attr("name","");
		} else {
			viewButton.addClass("superchat_view_active").attr("name","active");
			viewWindow.children(".tab_name").text("find something to view");
			viewWindow.css("marginLeft","825px").fadeIn("fast");
		}
	});
	
	$("#superchat_chats a").click(function() {
	
		var chatClass = $(this).attr("class");
		var id = $(this).attr("id");
		var name = $(this).text();
		var chat_num = $(this).prevAll().size();
		var num_chats = $("#superchat_chats a").size();
		var pixel_correct = (chat_num * 147) - 25;
		var box_obj_id = "#superchat_chat_boxes #" + id;
		var count = $(box_obj_id).size();
		var settingsWindow = $("#superchat_settings_displaybox");
		var viewWindow = $("#superchat_view_displaybox");
		
		console.log("Clicked item class is '" + chatClass + "'");
		if (chatClass == 'chat_container_min chat_name_active') {
			$(box_obj_id).fadeOut("fast");
			$(this).removeClass("chat_name_active");
		} else {
			//console.log("Hiding all open chat windows...");
			$("#superchat_chat_boxes .chat_box").not(settingsWindow).not(viewWindow).fadeOut("fast");
			
			//console.log("Removing active class from other chats..");
			$("#superchat_chats a").removeClass("chat_name_active");
			//.animate({
			//		marginLeft: 0,
			//		marginRight: 0,
			//		marginTop: 0},
			//		50,function() {
			//	});
			//console.log("Changing class to active..");
			$(this).addClass("chat_name_active");
			//.animate({
			//		marginLeft: 5,
			//		marginRight: 5,
			//		marginTop: -5},
			//		500,function() {
			//	});
			console.log("Selected chat #" + (chat_num + 1) + " out of " + num_chats + " total chats.");
			console.log("Name of tab: " + name + ", user id: #" + id);
			
			//console.log("Trying to move chat box into window..");
			
			console.log("Elements matching: " + box_obj_id + "... " + count);
			
			$(box_obj_id + " .tab_name").text(name);
			$(box_obj_id).css("marginLeft", pixel_correct).fadeIn("fast");
			console.log('\n\n');
		}
	});
	
	$("#superchat_container a").click(function() {
		//console.log("Clicked, returning false...");
		return false;
	});
});
