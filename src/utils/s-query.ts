import db from "../config/database";
export default (sql: any, values: any = null, timeout: any = null) => {
  return new Promise((resolve, reject) => {
    try {
      db.getConnection((err, conn) => {
        if (err) {
          reject({
            status: 500,
            code: "XXX",
            message: "Ocorreu um erro ao buscar os dados.",
          });
          conn.release();
          return;
        }
        conn.query({ sql, timeout, values }, function (e: any, results: any) {
          if (e) {
            reject({
              status: 500,
              code: "XXX",
              message: "Ocorreu um erro ao buscar os dados.",
            });
            conn.release();
            return;
          }
          resolve(JSON.parse(JSON.stringify(results)));
          conn.release();
        });
      });
    } catch (err: any) {
      reject({
        status: err.status || 500,
        code: err.code || "XXX",
        message: err.message,
      });
    }
  });
};
