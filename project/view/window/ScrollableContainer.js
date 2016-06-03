Ext.define('view.window.RadioGroup', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.filterRadioGroup',
    width: 520,
    columns: [120,120,150],
    vertical: false,
    cls: 'boldLabel',
    items: [
        {boxLabel: 'All conditions', name: 'rb', inputValue: '1', checked: true},
        {boxLabel: 'At least one', name: 'rb', inputValue: '2'},
        {boxLabel: 'None of conditions', name: 'rb', inputValue: '3'}
    ]
});


Ext.define('view.window.ButtonGroup', {
    extend: 'Ext.Container',
    alias: 'widget.buttonGroup',
    width: 520,
    height: 50,
    layout: {
        type: 'hbox',
        pack: 'start'
    },
    defaults: {
        margins: '0 10 0 0'
    },

    items: [
        {
            xtype: 'button',
            text: 'Apply filter',
            cls: 'gray-button',
            width: 120,
            height: 30
        },
        {
            xtype: 'button',
            text: 'Save filter',
            cls: 'gray-button',
            width: 120,
            height: 30
        },
        {
            xtype: 'button',
            text: 'Cancel',
            cls: 'gray-button',
            width: 100,
            height: 30
        }
    ]
});



Ext.define('view.window.ScrollableContainer', {
    extend: 'Ext.Container',
    alias: 'widget.scrollableContainer',
    requires: ['view.window.RowsContainer'],
    defaults: {
        margin: '5 5 5 5'
    },
     layout: {
         type: 'vbox',
         pack: 'left'
     },
     items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Filter name',
            labelCls: 'boldLabel',
            width: 300
        },
        {
            xtype: 'tbspacer',
            width: 20
        },
        {
            xtype: 'container',
            layout:{
                type: 'hbox'
            },
            defaults: {
                margins: '0 5 0 0'
            },
            items:[
                {
                    xtype: 'label',
                    text: 'Filters',
                    width: 95,
                    cls: 'boldLabel'
                },
                {
                    xtype: 'rowsContainer'
                }
            ]
        },
        {
            xtype: 'container',
            layout:{
                type: 'hbox',
                align: 'center',
                pack: 'left'
            },
            items: [
                {
                    xtype: 'label',
                    text: 'For entry: ',
                    width: 95,
                    cls: 'boldLabel'
                },
                {
                    xtype: 'container',
                    defaults: {
                        margin: '0 0 15 0'
                    },
                    layout: {
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'filterRadioGroup',
                        },
                        {
                            xtype: 'buttonGroup'
                        }
                    ]
                }
            ]

        }


    ]
});