import to from "await-to-js";
import sQuery from "../../utils/s-query";
export default async (req: any) => {
  try {
    const { page, limit, name } = req.query;
    let $query = `SELECT * FROM product `;

    if (name) {
      $query = $query + `WHERE name LIKE '${name}%' `;
    }
    if (limit) {
      $query = $query + `LIMIT ${limit} `;
    }
    if (page) {
      $query = $query + `OFFSET ${page} `;
    }

    let err, result, count: any;
    [err, result] = await to(sQuery($query));
    if (err) throw err;
    let $count = "SELECT count(1) as total FROM product";
    [err, count] = await to(sQuery($count));
    const total = count[0].total;
    console.log(total / limit);
    if (err) throw err;
    return {
      status: 200,
      message: result,
      page,
      limit,
      total,
    };
  } catch (err) {
    return err
  }
};
