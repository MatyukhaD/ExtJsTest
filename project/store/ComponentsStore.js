Ext.define('store.ComponentsStore', {
    extend    : 'Ext.data.Store',
    fields: ['abbr', 'name'],
    data : [
        {"value":"title", "name":"Title"},
        {"value":"text", "name":"Text"},
        {"value":"author", "name":"Author"}
    ]
});

Ext.define('store.PositionsStore', {
    extend    : 'Ext.data.Store',
    fields: ['abbr', 'name'],
    data : [
        {"value":"begin", "name":"Starts with"},
        {"value":"end", "name":"Ends with"},
        {"value":"contains", "name":"Contains"}
    ]
});