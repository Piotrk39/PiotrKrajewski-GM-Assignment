const { expect } = require("@playwright/test");

export class TestUtil {
  static async generateRandomNumber(size) {
    if (size == null) {
      size = 8;
    }
    const chars = "0123456789";
    let string_length = size;
    let randomNum = '';
    for (let i = 0; i < string_length; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomNum += chars.substring(rnum, rnum + 1);
    }
    return randomNum;
  }

  static async generateRandomString(size) {
    if (size == null) {
      size = 8;
    }
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = size;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
}