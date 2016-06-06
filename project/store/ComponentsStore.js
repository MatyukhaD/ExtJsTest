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
        {"value":"1", "name":"01"},
        {"value":"2", "name":"02"},
        {"value":"3", "name":"03"},
        {"value":"4", "name":"04"},
        {"value":"5", "name":"05"},
        {"value":"6", "name":"06"},
        {"value":"7", "name":"07"},
        {"value":"8", "name":"08"},
        {"value":"9", "name":"09"},
        {"value":"10", "name":"10"},
        {"value":"11", "name":"11"},
        {"value":"12", "name":"12"},
        {"value":"13", "name":"13"},
        {"value":"14", "name":"14"},
        {"value":"15", "name":"15"},
        {"value":"16", "name":"16"},
        {"value":"17", "name":"17"},
        {"value":"18", "name":"18"},
        {"value":"19", "name":"19"},
        {"value":"20", "name":"20"},
        {"value":"21", "name":"21"},
        {"value":"22", "name":"22"},
        {"value":"23", "name":"23"},
        {"value":"24", "name":"24"},
        {"value":"25", "name":"25"},
        {"value":"26", "name":"26"},
        {"value":"27", "name":"27"},
        {"value":"28", "name":"28"},
        {"value":"29", "name":"29"},
        {"value":"30", "name":"30"},
        {"value":"31", "name":"31"}
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
