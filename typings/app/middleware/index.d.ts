// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCheckToken from '../../../app/middleware/checkToken';
import ExportDeBounce from '../../../app/middleware/deBounce';
import ExportNotFound from '../../../app/middleware/notFound';

declare module 'egg' {
  interface IMiddleware {
    checkToken: typeof ExportCheckToken;
    deBounce: typeof ExportDeBounce;
    notFound: typeof ExportNotFound;
  }
}
