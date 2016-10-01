define([], function()
{
    var LOCAL_PASSWORD = "demo@demo";
    var Base  = bin.ui.NaviPageView; 
    var Class = {};

    Class.vmData = 
    {
        password:null,
        username:null,
    }
    
    Class.vmMethod_goRegister=function()
    {
        bin.hudManager.showStatus("注册");

        bin.naviController.push("vmDemo/vmDemo");
    }

    Class.vmMethod_goForget=function()
    {
        bin.hudManager.showStatus("忘记密码");
    }

    Class.vmMethod_login=function()
    {
        var username = this.vm.username;
        var password = this.vm.password;
        
        if(!username){
            bin.hudManager.showStatus('请输入手机号')
            return ;
        };

        if(!password)
        {
            bin.hudManager.showStatus("请输入密码");
            return ;
        };
        
        bin.hudManager.showStatus("登录 username["+username+"] password["+password+"]");
    }
    return Base.extend(Class)
})