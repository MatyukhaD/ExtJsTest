Ext.define('view.window.DateSelectField', {
    extend : 'Ext.Container',
    alias: 'widget.dateField',
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
            fieldCls: 'gray-button',
            store:Ext.create('store.DaysStore'),
            width: 60,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        },
        {
            xtype: 'combo',
            name: 'monthSelect',
            fieldCls: 'gray-button',
            emptyText:'MM',
            store:Ext.create('store.MonthStore'),
            width: 60,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        },
        {
            xtype: 'combo',
            fieldCls: 'gray-button',
            name: 'yearsSelect',
            emptyText:'YY',
            store:Ext.create('store.YearsStore'),
            width: 80,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value'
        }
    ]
});