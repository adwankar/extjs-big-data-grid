/*
 * File: app/view/BigDataGrid.js
 *
 * This file was generated by Sencha Architect version 4.1.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Modern library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Modern. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BigData.view.BigDataGrid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.bigdatagrid',

    requires: [
        'BigData.view.BigDataGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Check',
        'Ext.grid.plugin.Editable',
        'Ext.grid.column.Date',
        'Ext.grid.HeaderGroup',
        'Ext.grid.plugin.ViewOptions',
        'Ext.grid.plugin.SummaryRow',
        'Ext.grid.plugin.ColumnResizing',
        'Ext.grid.plugin.RowExpander',
        'Ext.grid.plugin.PagingToolbar',
        'Ext.TitleBar',
        'Ext.Label',
        'Ext.Button'
    ],

    viewModel: {
        type: 'bigdatagrid'
    },
    height: '100%',
    shadow: true,
    width: '100%',
    itemConfig: {
        body: {
            tpl: '<img src="{avatar}" height="100px" style="float:left;margin:0 10px 5px 0"><b>{name}<br></b>{dob:date}'
        }
    },
    store: 'DataGridStore',
    grouped: true,
    rowLines: true,

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            xtype: 'numbercolumn',
            minWidth: 100,
            dataIndex: 'employeeNo',
            text: 'Id'
        },
        {
            xtype: 'gridcolumn',
            width: 120,
            dataIndex: 'surname',
            text: 'Name'
        },
        {
            xtype: 'checkcolumn',
            width: 100,
            dataIndex: 'verified',
            text: 'Verified'
        },
        {
            xtype: 'datecolumn',
            width: 120,
            dataIndex: 'dob',
            text: 'Date of Birth',
            format: 'd-m-Y'
        },
        {
            xtype: 'gridcolumn',
            width: 100,
            align: 'center',
            cell: {
                xtype: 'widgetcell',
                widget: {
                    xtype: 'button',
                    bind: 'Verify',
                    ui: 'action',
                    width: 80,
                    height: 20,
                    handler: function(btn){
                        var cell = btn.getParent(),
                        record = cell.getRecord();
                
                        record.set('verified', true);
                        Ext.Msg.alert('Verify', 'Verify ' + record.get('forename') + ' ' + record.get('surname'));
                                    }
                }
            },
            text: 'Verify'
        },
        {
            xtype: 'datecolumn',
            width: 120,
            dataIndex: 'joinDate',
            editable: true,
            text: 'Join Date',
            format: 'd-m-Y'
        },
        {
            xtype: 'headergroup',
            text: 'Absences',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    align: 'center',
                    dataIndex: 'sickDays',
                    summaryType: 'sum',
                    text: 'Illness'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    align: 'center',
                    dataIndex: 'holidayDays',
                    summaryType: 'sum',
                    text: 'Holidays'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    align: 'center',
                    dataIndex: 'holidayAllowance',
                    formatter: 'number("0.00")',
                    summaryFormatter: 'number("0.00")',
                    summaryType: 'sum',
                    text: 'Holiday Allowance'
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            width: 100,
            dataIndex: 'noticePeriod',
            text: 'Notice Period'
        },
        {
            xtype: 'gridcolumn',
            width: 200,
            dataIndex: 'email',
            editable: true,
            editor: {
                xtpye: 'emailfield'
            },
            text: 'Email'
        },
        {
            xtype: 'headergroup',
            text: 'Ratings',
            columns: [
                {
                    xtype: 'numbercolumn',
                    width: 75,
                    dataIndex: 'averageRating',
                    text: 'Avg'
                },
                {
                    xtype: 'gridcolumn',
                    width: 80,
                    cell: {
                        xtype: 'widgetcell',
                        forceWidth: true,
                        widget: {
                            xtype: 'sparklineline'
                        }
                    },
                    dataIndex: 'rating',
                    text: 'All'
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            summaryRenderer: function(value) {
                return Ext.util.Format.usMoney(value);
            },
            renderer: function(value, record, dataIndex, cell, column) {
                return Ext.util.Format.usMoney(value);
            },
            width: 100,
            dataIndex: 'salary',
            editable: true,
            summaryType: 'sum',
            text: 'Salary'
        }
    ],
    plugins: [
        {
            type: 'grideditable'
        },
        {
            type: 'gridviewoptions'
        },
        {
            type: 'gridsummaryrow'
        },
        {
            type: 'gridcolumnresizing'
        },
        {
            type: 'rowexpander'
        },
        {
            type: 'gridpagingtoolbar'
        }
    ],
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            items: [
                {
                    xtype: 'label',
                    width: 119,
                    html: 'Big Data Grid'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    text: 'EXPORT TO...'
                }
            ]
        }
    ]

});