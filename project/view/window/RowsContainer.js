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
            button.hide();
            this.add({
                xtype: 'fieldRow'
            })
        },

        minusClicked: function(button, row) {
            if (this.items.getCount() === 1) {
                return;
            }

            if (!row.next())  {//это последний элемент в списке строк, значит с + и -
                var prevRow = row.prev();
                var addRowBtns = prevRow.query('addRowButton');
                if (addRowBtns.length > 0) {
                    addRowBtns[0].show();
                }
            }

            this.remove(row);
        }
    },

    items: [
        {
            xtype: 'fieldRow'
        }
    ]
});