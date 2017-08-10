/**
 * 有效的ipv4正在表达式:
 * 1. 数字和点符号之间可以有空格
 * 2. 数字之间不能有空格
 * 3. 不能以空格开头和结尾
 *
 * 注：这是一个较好的实现，但这不是一个好的题目，不要在生产环境上使用。。。
 */
const validRegex = /^\b(( *\d{1,3} *(?!\d))(\.|$)){4}\b/;


/**
 * @module toInt
 * @param ipv4
 * @description Convert an IPv4 address in the format of null-terminated C string into a 32-bit integer.
 * @date 2017-08-11
 * @author https://github.com/starzou/
 * @licence http://www.wtfpl.net/
 **/

function toInt(ipv4) {

  if (!validRegex.test(ipv4)) {
    throw new Error('Hey, brother! You want to kill the server?');
  }

  let octets = ipv4.split('.');

  return (+octets[0] * 16777216) + (+octets[1] * 65536) + (+octets[2] * 256) + (+octets[3]);

}


module.exports = toInt;
