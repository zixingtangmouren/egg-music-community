/**
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:26:22
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-04-06 16:13:53
 * @Description: file content
 */

import { Controller } from 'egg'

class BaseModel {
  public code: number
  public data: any
  public msg: string | null
  constructor(code: number, data: any, msg: string | null) {
    this.code = code
    this.data = data
    this.msg = msg
  }
}

export class Success extends BaseModel {
  constructor(data: any) {
    super(0, data, null)
  }
}

export class Fail extends BaseModel {
  constructor(msg: string) {
    super(-1, null, msg)
  }
}

export interface E extends Error {
  errors?: ValidateError[];
}

export const errorHandle = (err: string | E) => {
  let msg
  if (typeof err === 'string') {
    msg = err
  } else {
    if (err.errors) {
      msg = err.errors[0].message
    } else {
      msg = err.message
    }
  }
  return new Fail(msg)
}

export default class BaseController extends Controller {
  protected success(data: any) {
    this.ctx.body = new Success(data)

  }

  protected fail(err: string | E) {
    let msg
    if (typeof err === 'string') {
      msg = err
    } else {
      if (err.errors) {
        msg = err.errors[0].message
      } else {
        msg = err.message
      }
    }
    this.ctx.body = new Fail(msg)
  }
}
