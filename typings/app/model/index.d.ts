// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/model/address';
import ExportAreas from '../../../app/model/areas';
import ExportBlogs from '../../../app/model/blogs';
import ExportCitys from '../../../app/model/citys';
import ExportLikes from '../../../app/model/likes';
import ExportMusicLabels from '../../../app/model/musicLabels';
import ExportProvinces from '../../../app/model/provinces';
import ExportUsers from '../../../app/model/users';

declare module 'egg' {
  interface IModel {
    Address: ReturnType<typeof ExportAddress>;
    Areas: ReturnType<typeof ExportAreas>;
    Blogs: ReturnType<typeof ExportBlogs>;
    Citys: ReturnType<typeof ExportCitys>;
    Likes: ReturnType<typeof ExportLikes>;
    MusicLabels: ReturnType<typeof ExportMusicLabels>;
    Provinces: ReturnType<typeof ExportProvinces>;
    Users: ReturnType<typeof ExportUsers>;
  }
}
