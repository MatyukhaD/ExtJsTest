Ext.define('view.ModalWindow', {
        extend : 'Ext.window.Window',
        requires: ['view.window.ScrollableContainer'],
        width:800,
        height:300,
        closeAction:'hide',
        cls: 'mainWindow',
        bodyCls: 'windowBody',
        autoScroll: true,
        plain: true,
        modal: true,
        border: false,
        frame: false,
        resizeHandles: 's n',
        fbar: {
            height: 34
        },
        header: {
            cls: 'headerCls'
        },
        title: 'Filters',
        tools:[{
            id:'help',
            qtip: 'Go to help page',
            handler: function(){
                Ext.Msg.alert('Button', 'Help button was pressed.');
            }
        }
        ],
        items: [
            {
               xtype: 'scrollableContainer',
               id: 'mainContainer'
            }
        ]
});