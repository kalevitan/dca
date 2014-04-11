function loadTasks() {
	var tasks = $('#tasks ul');
	
	$.ajax({
		type: 'GET',
		url: 'http://dcadev.herokuapp.com/shots.json',
		dataType: 'JSON',
		timeout: 5000,
		success: function(data) {
			$.each(JSON.parse(data), function(i,item){
        tasks.append('<li>'+item.name+'</li>')
			});
		},
		error: function(data) {
			tasks.append('<li>There was an error loading the tasks');
		}
	});
}

loadTasks();
