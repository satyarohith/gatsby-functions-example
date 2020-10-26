import {format} from 'date-fns';

export const handler = async event => {
  return {
    statusCode: 200,
    body: {
      message: 'Hello Gatsby!',
      day: format(new Date(), "'Today is' iiii")
    }
  };
};
