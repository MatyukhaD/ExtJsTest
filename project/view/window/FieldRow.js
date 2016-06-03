Ext.define('view.window.AddRowButton', {
    extend : 'Ext.button.Button',
    alias: 'widget.addRowButton',
    text: '+',
    cls: 'plusButton',
    listeners: {
        click: function(b,e) {
            var parent =  b.up('container');
            var gParent = parent.up('container');
            gParent.fireEvent('plusClicked',b);
        }
    }
});

Ext.define('view.window.DeleteRowButton', {
    extend : 'Ext.button.Button',
    alias: 'widget.deleteRowButton',
    text: '—',
    cls: 'plusButton',
    listeners: {
        click: function(b,e) {
            var parent =  b.up('container');
            var gParent = parent.up('container');
            gParent.fireEvent('minusClicked',b);
        }
    }
});



Ext.define('view.window.FieldRow', {
    extend : 'Ext.Container',
    alias: 'widget.fieldRow',
    height: 30,
    layout:{
        type: 'hbox',
        align: 'center',
        pack: 'center'
    },
    defaults: {
        margins: '0 5 0 0'
    },
    autoScroll: true,
    items: [
        // {
        //     xtype: 'button',
        //     text: 'Select this',
        //     menu: {
        //         items: [{
        //             text: 'Item 1',
        //             handler: function() {
        //                 console.log('Item 1');
        //             }
        //         }, {
        //             text: 'Item 2',
        //             handler: function() {
        //                 console.log('Item 2');
        //             }
        //         }]
        //     }
        // }
        {
            xtype: 'combo',
            name: 'select1',
            emptyText: 'Select this',
            fieldCls: 'gray-button',
            //store: Ext.create('store.ComponentsStore'),
            store: Ext.create('store.ComponentsStore'),

            width: 150,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            renderTo: Ext.getBody(),
            editable: false,
            listeners: {
                'select': function (combo, selection) {
                    if (selection && selection[0]  && selection[0].data) {
                        var parent = combo.up('container');
                        var value = selection[0].data.value;
                        var visibleComponent = parent.items.get(2);
                        if (!visibleComponent) {
                            return;
                        }

                        var parent = combo.up('fieldRow');
                        if (value === 'date') {
                            if (visibleComponent.xtype !== 'dateSelect') {
                                parent.remove(visibleComponent);
                                parent.insert(2,Ext.create('widget.dateSelect'));
                            }
                        }
                        else {
                            if (visibleComponent.xtype !== 'textfield') {
                                parent.remove(visibleComponent);
                                parent.insert(2,{
                                    xtype: 'textfield',
                                    name: 'typeSymbol',
                                    emptyText: 'Type symbol',
                                    width: 200
                                });
                            }
                        }
                    }
                }
            }
        },
        {
            xtype: 'combo',
            name: 'select2',
            emptyText:'And this',
            store:Ext.create('store.PositionsStore'),
            width: 100,
            fieldCls: 'gray-button',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            renderTo: Ext.getBody(),
            editable: false
        },
        {
            xtype: 'textfield',
            name: 'typeSymbol',
            emptyText: 'Type symbol',
            width: 210
        },
        {
            xtype: 'addRowButton'
        }
    ]
});
