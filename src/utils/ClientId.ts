import Fingerprint2 from 'fingerprintjs2';

/**
 * 获取浏览器指纹
 * @returns {any}
 */
function getClientId() {
  const clientId = window.localStorage.getItem('clientId')
  if (clientId) return clientId
  return new Promise(function (resolve) {
    Fingerprint2.get((result) => {
      let values = result.map(component => component.value)
      window.localStorage.setItem('clientId', Fingerprint2.x64hash128(values.join(''), 31))
      resolve(Fingerprint2.x64hash128(values.join(''), 31))
    })
  });
}

export default getClientId