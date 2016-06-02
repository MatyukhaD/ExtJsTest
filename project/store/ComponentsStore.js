Ext.define('store.ComponentsStore', {
    extend    : 'Ext.data.Store',
    fields: ['value', 'name'],
    data : [
        {"value":"title", "name":"Title"},
        {"value":"text", "name":"Text"},
        {"value":"author", "name":"Author"},
        {"value":"date", "name":"Date"}
    ]
});

Ext.define('store.PositionsStore', {
    extend    : 'Ext.data.Store',
    fields: ['value', 'name'],
    data : [
        {"value":"begin", "name":"Starts with"},
        {"value":"end", "name":"Ends with"},
        {"value":"contains", "name":"Contains"}
    ]
});

Ext.define('store.DaysStore', {
    extend    : 'Ext.data.Store',
    fields: ['value', 'name'],
    data : [
        {"value":"1", "name":"1"},
        {"value":"2", "name":"2"},
        {"value":"3", "name":"3"},
        {"value":"4", "name":"4"}
    ]
});

Ext.define('store.MonthStore', {
    extend    : 'Ext.data.Store',
    fields: ['value', 'name'],
    data : [
        {"value":"1", "name":"1"},
        {"value":"2", "name":"2"},
        {"value":"3", "name":"3"},
        {"value":"4", "name":"4"},
        {"value":"5", "name":"5"},
        {"value":"6", "name":"6"},
        {"value":"7", "name":"7"},
        {"value":"8", "name":"8"},
        {"value":"9", "name":"9"},
        {"value":"10", "name":"10"},
        {"value":"11", "name":"11"},
        {"value":"12", "name":"12"}
    ]
});

Ext.define('store.YearsStore', {
    extend    : 'Ext.data.Store',
    fields: ['value', 'name'],
    data : [
        {"value":"2010", "name":"2010"},
        {"value":"2011", "name":"2011"},
        {"value":"2012", "name":"2012"},
        {"value":"2013", "name":"2013"},
        {"value":"2014", "name":"2014"},
        {"value":"2015", "name":"2015"},
        {"value":"2016", "name":"2016"}
    ]
});
