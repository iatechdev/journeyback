import { saltCodes } from '../../config/config';
import crypto from 'crypto';

const generate =  (string) => {
  const hash = crypto.createHmac('sha256', saltCodes)
    .update(string)
    .digest('hex');
  return  hash;
}

module.exports = {
  generate
}