var time_start_chat = new Date();

var intervalID = window.setInterval(func_interval, 100);

function func_interval() {
    
    var now = new Date();
    
    var v_hour = now.getHours();
    if(v_hour < 10)
        v_hour = '0' + v_hour;
    
    var v_min = now.getMinutes();
    if(v_min < 10)
        v_min = '0' + v_min;
    
    var dif_hour = now.getHours() - time_start_chat.getHours();
    var dif_min = now.getMinutes() - time_start_chat.getMinutes();

	document.getElementById("local_time").innerHTML = v_hour + ':' + v_min;
	document.getElementById("time_online").innerHTML = dif_hour + 'h ' + dif_min + 'm';
	
	// пользователей онлайн
	var count_users = document.getElementsByClassName('list_users').length;
	document.getElementById('online_users').innerHTML = count_users;

}

function Edtit_Pers_Info() {
    alert('Edit personal info ');
}

