Ext.define('view.window.ScrollableContainer', {
    extend: 'Ext.Container',
    alias: 'widget.scrollableContainer',
    requires: ['view.window.FieldRow'],
    defaults: {
        margin: '5 5 5 5'
    },
     layout: {
         type: 'vbox'
     },
    listeners: {
        plusClicked: function(button, index) {
            console.log('button clicked!');
        }
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
            xtype: 'fieldRow',
            id: 'fields'
        }
    ]
});