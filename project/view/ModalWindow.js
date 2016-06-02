Ext.define('view.ModalWindow', {
        extend : 'Ext.window.Window',
        requires: ['view.window.ScrollableContainer'],
        width:800,
        height:300,
        closeAction:'hide',
        plain: true,
        modal: true,
        title: 'Filters',
        tools:[{
            id:'help',
            qtip: 'Go to help page',
            handler: function(){
                Ext.Msg.alert('Button', 'Help button was pressed.');
            }
        }],

        items: [
            {
               xtype: 'scrollableContainer',
               id: 'mainContainer'
            }
        ]
});