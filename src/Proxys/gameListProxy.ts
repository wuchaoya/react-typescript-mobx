import { toHump ,toLine } from '../utils/Conversion';

export const handler = {
  get: (target: any, key: any, receiver:any) => {
    console.log(key);
    const keyNames = Object.keys(target).map(name => toHump(name))
    return key in target || keyNames.indexOf(key) !== -1?
      Reflect.get(target, toLine(key), receiver): null;
  }
}

export default function gameListProxy (target: any) {
  return new Proxy(target, handler)
}





