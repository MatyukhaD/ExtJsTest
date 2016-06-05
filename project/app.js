Ext.require([
    'Ext.Msg',
    'Ext.panel.*',
    'store.ComponentsStore',
    'view.window.DateSelectField',
    'view.window.FieldRow',
    'view.window.ScrollableContainer',
    'view.ModalWindow'
    ]);

Ext.application({
    name : 'TestApp',

    launch : function(){
        var dialog;
        var mainPanel = Ext.create('Ext.panel.Panel', {
            layout: {
                align: 'middle',
                pack: 'center',
                type: 'hbox'
            },

            title: 'Main Panel',
            items: [
                {
                    xtype: 'button',
                    text: 'Push me',
                    cls: 'mainButton',
                    listeners: {        
                       click: function(b,e) {
                           dialog  = Ext.create('view.ModalWindow');
                           dialog.show();
                        }
                    }
                }
            ]
        });

        Ext.create('Ext.container.Viewport', 
        {
            layout : 'fit',
        
            items : [
                        mainPanel
                    ]
        });
        
    }
});