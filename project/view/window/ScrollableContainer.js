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
    height: 300,
    autoScroll: true,
    listeners: {
        plusClicked: function(button) {
            var btnParent = button.up('container');
            var lastIndex = this.items.length - 1;

            btnParent.remove(button);
            this.insert(lastIndex,{
                xtype: 'fieldRow'
            })
        },
        minusClicked: function(button) {
            var btnParent = button.up('container');
            var rowIndex = this.items.indexOf(btnParent);
            
            if ((rowIndex < 3) || (rowIndex === this.items.length - 2)) {
                return;
            }

            var btnParent = button.up('container');
            this.remove(btnParent);
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
            xtype: 'fieldRow'
        },
        {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Filter name'
        }
    ]
});