Ext.define('view.ModalWindow', {
        extend : 'Ext.window.Window',
        requires: ['view.window.ScrollableContainer'],
        width:690,
        height:300,
        closeAction:'hide',
        cls: 'mainWindow',
        disabledCls: 'mainWindow',
        bodyCls: 'windowBody',
        autoScroll: true,
        plain: true,
        border: false,
        frame: false,
        resizeHandles: 's n',
        fbar: {
            height: 34
        },
        header: {
            cls: 'headerCls'
        },
        title: 'Filter',
        tools:[{
             type:'help',
            qtip: 'Go to help page',
            handler: function(){
                Ext.Msg.alert('Button', 'Help button was pressed.');
            }
        }
        ],
        items: [
            {
               xtype: 'scrollableContainer'
            }
        ],
        listeners: {
            move: function(in_this, x, y){
                var maxX = Ext.getBody().getViewSize().width-20;
                var maxY = Ext.getBody().getViewSize().height-20;
                x = parseInt(x);
                y = parseInt(y);
                if(x < 0 || x > maxX || y < 0 || y > maxY) {
                    y = Math.max(0,y);
                    y = Math.min(y,maxY - in_this.getHeight());

                    x = Math.max(0,x);
                    x = Math.min(x, maxX - in_this.getWidth());

                    in_this.setPosition(x, y);
                }
            }
        }
});