
export function sanitizeTagsOld(arr, clean = ['']) {
  let cIndex = 0;
  let aIndex = 0;
  const reg =  /[a-zA-Z0-9\/:+_.-]/;
  if (arr == undefined) {return undefined}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ',') {
      if (clean[cIndex] != '') {
        clean.push('');
        cIndex++;
      }
    }
    if (reg.exec(arr[i])) {
      clean[cIndex] = clean[cIndex] + arr[i];
    }
    continue;
  }
  if(clean[cIndex] == '') {
    clean.pop();
  }
  return clean;
}

export function sanitizeTags(arr) {
  var clean = [];
  if (arr == undefined || arr == null) {return undefined}
  for (var i = 0; i < arr.length; i++){
    clean.push(arr[i].replace(/[^a-zA-Z ]/g, ""))
  }
  return clean
}
