

export default async (req: any, res: any, fuc: any) => {
    const resp = await fuc(req);
    res.status(resp.status).send(resp);
}