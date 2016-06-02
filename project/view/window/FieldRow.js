
//  Ext.define('view.window.DateSelectField', {
//     extend : 'Ext.Container',
//      alias: 'widget.select',
//     width: 200,
//      layout:{
//          type: 'hbox',
//          align: 'center',
//          pack: 'center'
//      },
//      defaults: {
//          margins: '0 5 0 0'
//      },
//      items: [
//          {
//              xtype: 'combo',
//              name: 'daySelect',
//              emptyText:'Select day',
//              //store: Ext.create('store.ComponentsStore'),
//              store:daysStore,
//
//              width: 200,
//              queryMode: 'local',
//              displayField: 'name',
//              valueField: 'value',
//              renderTo: Ext.getBody()
//          },
//          {
//              xtype: 'combo',
//              name: 'select2',
//              emptyText:'And this',
//              //store: Ext.create('store.ComponentsStore'),
//              store:componentsStore,
//              width: 200,
//              queryMode: 'local',
//              displayField: 'name',
//              valueField: 'value',
//              renderTo: Ext.getBody()
//          },
//          {
//              xtype: 'textfield',
//              name: 'typeSymbol',
//              emptyText: 'Type symbol'
//          }
//      ]
//
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
            store:Ext.create('store.ComponentsStore'),

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
            store:Ext.create('store.PositionsStore'),
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
