import db from "../config/database";

export default (sql: any, values: any = null, timeout: any = null) => {
  return new Promise((resolve, reject) => {
    try {
      db.query({ sql, timeout, values }, function (err, results) {
        if (err) {
          reject({
            status: 500,
            code: "XXX",
            message: "Ocorreu um erro ao buscar os dados.",
          });
          return;
        }

        resolve(JSON.parse(JSON.stringify(results)));
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
