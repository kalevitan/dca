function loadTasks() {
	var tasks = $('#tasks ul');
	
	$.ajax({
		type: 'GET',
		url: 'http://dcadev.herokuapp.com/shots.json',
        data: {limit: 2, order: 'desc'},
		dataType: 'JSON',
		timeout: 5000,
		success: function(data) {
			$.each(JSON.parse(data), function(i,item){
                   tasks.append("<li><span class='shots'>"+item.name+"</span><img src='"+item.avatar_url+"'</li>")
			});
		},
		error: function(data) {
			tasks.append('<li>There was an error loading the tasks</li>');
		}
	});
}

loadTasks();
