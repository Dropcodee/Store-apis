import { Response } from 'express';
export function ResponseHandler(
  res: Response,
  resObj: {
    message: string;
    result: object | object[];
    code: number;
    totalRecords: number;
  }
) {
  if (Array.isArray(resObj.result)) {
    return res.status(resObj.code).json({
      data: resObj.result,
      message: resObj.message,
      totalRecords: resObj.totalRecords,
    });
  }
  return res.status(resObj.code).json({
    ...resObj.result,
    message: resObj.message,
    totalRecords: resObj.totalRecords,
  });
}
