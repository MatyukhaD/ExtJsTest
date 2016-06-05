Ext.define('view.window.AddRowButton', {
    extend : 'Ext.button.Button',
    alias: 'widget.addRowButton',
    text: '+',
    cls: 'plusButton',
    listeners: {
        click: function(b) {
            var rowsContainer = this.findParentByType('rowsContainer');
            var btnRow = b.findParentByType('fieldRow');
            rowsContainer.fireEvent('plusClicked', b, btnRow);
        }
    }
});

Ext.define('view.window.DeleteRowButton', {
    extend : 'Ext.button.Button',
    alias: 'widget.deleteRowButton',
    text: '—',
    cls: 'plusButton',
    listeners: {
        click: function(b) {
            var rowsContainer = this.findParentByType('rowsContainer');
            var btnRow = b.findParentByType('fieldRow');
            rowsContainer.fireEvent('minusClicked', b, btnRow);
        }
    }
});


Ext.define('view.window.CustomSelect', {
    extend : 'Ext.form.field.ComboBox',
    alias: 'widget.customSelect',
    emptyText: 'Select this',
    fieldCls: 'gray-button',
    store: Ext.create('store.ComponentsStore'),
    width: 150,
    queryMode: 'local',
    displayField: 'name',
    valueField: 'value',
    editable: false,
    listeners: {
        'select': function (combo, selection) {
            if (selection && selection[0] && selection[0].data) {
                var selectedValue = selection[0].data.value;

                var parent = combo.findParentByType('fieldRow');
                var textField = parent.query('#textField')[0];
                var dateField = parent.query('dateField')[0];
                if (selectedValue === 'date' && dateField.isVisible()) {
                    return;
                }

                if (selectedValue !== 'date' && textField.isVisible()) {
                    return;
                }

                textField.setVisible(selectedValue !== 'date');
                dateField.setVisible(selectedValue === 'date')

                // var selectedValue = selection[0].data.value;
                //
                // var parent = combo.findParentByType('fieldRow');
                // var textField = parent.query('#textField')[0];
                // var dateField = parent.query('dateField')[0];
                //
                // if (selectedValue === 'date' && dateField) {
                //     return;
                // }
                //
                // if (selectedValue !== 'date' && textField) {
                //     return;
                // }
                //
                // var targetIndex = parent.items.indexOf(textField ? textField : dateField);
                //
                // var createAlias = (selectedValue === 'date') ? 'widget.dateField' : 'textfield';
                // var newField = Ext.create(createAlias);
                // parent.remove(visibleComponent);
                // parent.insert(targetIndex,newField);
            }
        }
    }
});

Ext.define('view.window.FieldRow', {
    extend : 'Ext.Container',
    alias: 'widget.fieldRow',
    height: 30,
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
            xtype: 'customSelect'
        },
        {
            xtype: 'combo',
            name: 'select2',
            emptyText:'And this',
            store:Ext.create('store.PositionsStore'),
            width: 100,
            fieldCls: 'gray-button',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'value',
            editable: false
        },
        {
            xtype: 'textfield',
            itemId: 'textField',
            name: 'typeSymbol',
            emptyText: 'Type symbol',
            width: 210
        },
        {
            xtype: 'dateField',
            hidden: true

        },
        {
            xtype: 'addRowButton'
        },
        {
            xtype: 'deleteRowButton'
        }
    ]
});
