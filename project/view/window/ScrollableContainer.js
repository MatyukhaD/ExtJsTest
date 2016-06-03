Ext.define('view.window.RadioGroup', {
    extend: 'Ext.form.RadioGroup',
    alias: 'widget.filterRadioGroup',
    width: 520,
    columns: [120,120,120],
    vertical: false,
    labelWidth: 95,
    items: [
        {boxLabel: 'RadioButton 1', name: 'rb', inputValue: '1', checked: true},
        {boxLabel: 'RadioButton 2', name: 'rb', inputValue: '2'},
        {boxLabel: 'RadioButton 3', name: 'rb', inputValue: '3'}
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
            height: 20
        },
        {
            xtype: 'button',
            text: 'Save filter',
            cls: 'gray-button',
            width: 120,
            height: 20
        },
        {
            xtype: 'button',
            text: 'Cancel',
            cls: 'gray-button',
            width: 100,
            height: 20
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
         type: 'vbox'
     },
     items: [
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Filter name'
        },
        {
            xtype: 'tbspacer',
            width: 20,
        },
        {
            xtype: 'container',
            layout:{
                type: 'hbox',
                align: 'center',
                pack: 'left'
            },
            defaults: {
                margins: '0 5 0 0'
            },
            items:[
                {
                    xtype: 'label',
                    text: 'Filters',
                    width: 95
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
                    width: 95
                },
                {
                    xtype: 'container',
                    defaults: {
                        margin: '15 0 0 0'
                    },
                    layout: {
                        type: 'vbox'
                    },
                    //width: 520,
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