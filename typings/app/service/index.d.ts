// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAddress from '../../../app/service/address';
import ExportBlogs from '../../../app/service/blogs';
import ExportLikes from '../../../app/service/likes';
import ExportMusicLabels from '../../../app/service/musicLabels';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    address: AutoInstanceType<typeof ExportAddress>;
    blogs: AutoInstanceType<typeof ExportBlogs>;
    likes: AutoInstanceType<typeof ExportLikes>;
    musicLabels: AutoInstanceType<typeof ExportMusicLabels>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}
