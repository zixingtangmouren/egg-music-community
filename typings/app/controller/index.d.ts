// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAddress from '../../../app/controller/address';
import ExportBase from '../../../app/controller/base';
import ExportBlogs from '../../../app/controller/blogs';
import ExportHome from '../../../app/controller/home';
import ExportLikes from '../../../app/controller/likes';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    address: ExportAddress;
    base: ExportBase;
    blogs: ExportBlogs;
    home: ExportHome;
    likes: ExportLikes;
    users: ExportUsers;
  }
}
