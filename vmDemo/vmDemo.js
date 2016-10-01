define([], function()
{
    var Class = {};

    // The default VM datas
    Class.vmData = 
    {
        items:[],
        itemCount:0,
        titleValue:"",
    }
    
    // Add a VM method
    Class.vmMethod_addItem=function()
    {
        this.vm.items.push({label:"ITEM "+this.vm.items.length});
        this.vm.itemCount = this.vm.items.length;
    }

    Class.vmMethod_clearAll =function()
    {
        this.vm.items = [];
        this.vm.itemCount = 0;
    }

    // Add a VM watch
    Class.vmWatch_itemCount = function(value, oldValue)
    {
        bin.hudManager.showStatus("vm.itemCount changed");

        console.log("==> new");
        console.log(value);
        console.log("==> old");
        console.log(oldValue);
    }

    Class.vmWatch_titleValue = function(value, oldValue)
    {
        this.vm.title = this.vm.titleValue;
    }

    // Add a VM computed
    Class.vmComputed_title = function()
    {
        return "TITLE: "+this.vm.titleValue;
    }

    Class.prepareVMOptions = function(VMOptions)
    {
        // You can change VMOptions here
        return VMOptions;
    }
    
    return bin.ui.NaviPageView.extend(Class)
})