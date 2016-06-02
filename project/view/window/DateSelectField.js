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