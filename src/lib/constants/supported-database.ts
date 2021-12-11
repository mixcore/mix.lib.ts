export type Database = 
'SqlServer' | 
'MySql' |
'PostgreSQL' |
'SqlLite'

export const SUPPORTED_DATABASE: Record<Database, {value: string, label: string}> = {
    SqlServer: {
        value: 'SQLSERVER',
        label: 'Microsoft SQL Server'
    },
    MySql: {
        value: 'MySQL',
        label: 'MySQL Database'
    },
    PostgreSQL: {
        value: 'PostgreSQL',
        label: 'PostgreSQL Database'
    },
    SqlLite: {
        value: 'SQLITE',
        label: 'SQLite Database'
    }
}