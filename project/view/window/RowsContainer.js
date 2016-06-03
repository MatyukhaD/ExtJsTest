Ext.define('view.window.RowsContainer', {
    extend: 'Ext.Container',
    alias: 'widget.rowsContainer',
    requires: ['view.window.FieldRow'],
    defaults: {
        margin: '5 5 5 5'
    },
    layout: {
        type: 'vbox',
        pack: 'stretch'
    },
    autoScroll: true,
    listeners: {
        plusClicked: function(button) {
            
            var btnRow = button.up('container');
            var frstValue = btnRow.items.get(0).getValue();
            var scndValue = btnRow.items.get(1).getValue();
            var lastIndex = this.items.length - 1;

            btnRow.remove(button);
            btnRow.add({
                xtype: 'deleteRowButton'
            });
            
            this.add({
                xtype: 'fieldRow'
            })
        },

        minusClicked: function(button) {
            var btnParent = button.up('container');
            var rowIndex = this.items.indexOf(btnParent);

            if ((rowIndex === 0) || (rowIndex === this.items.length - 1)) {
                return;
            }

            var btnParent = button.up('container');
            this.remove(btnParent);
        }
    },

    items: [
        {
            xtype: 'fieldRow'
        }
    ]
});