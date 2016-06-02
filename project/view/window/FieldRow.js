
 Ext.define('view.window.DateSelectField', {
    extend : 'Ext.Container',
     alias: 'widget.dateSelect',
    width: 210,
     layout:{
         type: 'hbox',
         align: 'left',
         pack: 'center'
     },
     defaults: {
         margins: '0 5 0 0'
     },
     items: [
         {
             xtype: 'combo',
             name: 'daySelect',
             emptyText:'DD',
             store:Ext.create('store.DaysStore'),
             width: 60,
             queryMode: 'local',
             displayField: 'name',
             valueField: 'value',
             renderTo: Ext.getBody()
         },
         {
             xtype: 'combo',
             name: 'monthSelect',
             emptyText:'MM',
             store:Ext.create('store.MonthStore'),
             width: 60,
             queryMode: 'local',
             displayField: 'name',
             valueField: 'value',
             renderTo: Ext.getBody()
         },
         {
             xtype: 'combo',
             name: 'yearsSelect',
             emptyText:'YY',
             store:Ext.create('store.YearsStore'),
             width: 80,
             queryMode: 'local',
             displayField: 'name',
             valueField: 'value',
             renderTo: Ext.getBody()
         }
     ]
});

Ext.define('view.window.FieldRow', {
    extend : 'Ext.Container',
    alias: 'widget.fieldRow',
    height: 200,
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
        {
            xtype: 'combo',
            name: 'select1',
            emptyText: 'Select this',
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
                                parent.add(Ext.create('widget.dateSelect'));
                            }
                        }
                        else {
                            if (visibleComponent.xtype !== 'textfield') {
                                parent.remove(visibleComponent);
                                parent.add({
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
            width: 200
        }
    ]
});
