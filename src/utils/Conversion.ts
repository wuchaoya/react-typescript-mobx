
// 下划线转换驼峰
export function toHump(name: string) {
  return name.replace(/_(\w)/g, function(all, letter){
    return letter.toUpperCase();
  });
}
// 驼峰转换下划线
export function toLine(name: string) {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}