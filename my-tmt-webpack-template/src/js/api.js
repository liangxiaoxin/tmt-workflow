/**
 * Created by liangyongxin on 2017/9/15.
 */
export const getOpenid=()=> $.ajax({
  url:"/api/openid",
  type:"GET",
});