var componentsStore = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"value":"title", "name":"Title"},
        {"value":"text", "name":"Text"},
        {"value":"author", "name":"Author"}
    ]
});

var positionsStore = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"value":"begin", "name":"Starts with"},
        {"value":"end", "name":"Ends with"},
        {"value":"contains", "name":"Contains"}
    ]
});

// Ext.define('view.window.ComboBox', {
//     extend : 'Ext.Container',
//     alias: 'widget.select',
//     width: 100,
//     height: 50,
//     queryMode: 'local',
//     displayField: 'name',
//     valueField: 'value',
//     renderTo: Ext.getBody()
// });


Ext.define('view.window.FieldRow', {
    extend : 'Ext.Container',
    alias: 'widget.fieldRow',
    requires: [
        //'view.window.ComboBox'
        //,
        // 'store.ComponentsStore'
    ],
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
            emptyText:'Select this',
            //store: Ext.create('store.ComponentsStore'),
            store:componentsStore,

            width: 200,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            renderTo: Ext.getBody()
        },
        {
            xtype: 'combo',
            name: 'select2',
            emptyText:'And this',
            //store: Ext.create('store.ComponentsStore'),
            store:componentsStore,
            width: 200,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            renderTo: Ext.getBody()
        },
        {
            xtype: 'textfield',
            name: 'typeSymbol',
            emptyText: 'Type symbol'
        }
    ]
});
