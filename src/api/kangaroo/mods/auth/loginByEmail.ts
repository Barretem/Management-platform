import ajax from '@/utils/request';

/**
 * @desc 根据用户邮箱登录
 */
export function request(bodyParams: any, options) {
  const option = Object.assign(
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      data: bodyParams,
    },
    options,
  );
  return ajax('/kangaroo-library-center/auth/loginByEmail', option);
}
