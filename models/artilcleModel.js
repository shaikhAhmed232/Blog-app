const client = require('../config/dbClient');
const {createConditions} = require('./helper')
// Handle articles related actions
class Articles {
    static async create (title, descriptions) {
        const sql =  `INSERT INTO articles (title, descriptions, created_at) VALUES ($1, $2, $3)`;
        const result = await client.query(sql, [title, descriptions, new Date()])
        return result;
    }
    static async getAll (where) {
        // Creating query conditions for filtering.
        const condtions = createConditions(where)

        let sql = `SELECT id, title, descriptions, created_at FROM articles`;
        if (condtions.length) sql += ` WHERE ${condtions}`
        sql += ` ORDER BY created_at DESC`
        const {rows} = await client.query(sql);
        return rows 
    }

    static async delete(where) {
        // Creating query conditions for delete.
        const condtions = createConditions(where);
        let sql = `DELETE FROM articles WHERE ${condtions}`
        const result = await client.query(sql);
        return result
    }

    static async update (columns, id) {
        let columnValuePair = ''
        // Creating query for changing specified columns.
        let keys = Object.keys(columns) // will return array of key from columns object
        let values = Object.values(columns); // will return array of values from columns object
        keys.forEach((key, indx) => {
            columnValuePair += `${key} = $${indx + 1} ${(indx === keys.length - 1 ? '' : ',' )}`
        })
        const sql = `UPDATE articles SET ${columnValuePair} WHERE id=${id}`
        const result = await client.query(sql, [...values]);
        return result 
    }
}

module.exports = Articles;