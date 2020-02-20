import request from '@/common/request';

/**
 * 查詢景點.
 */
export function fetchAttractionList(data) {
  // return request.get('/api/open-api/zh-tw/Attractions/All', data);
  return request.get('//raw.githubusercontent.com/javaok1987/hello-taipei/master/src/data/Attractions.json', data);
}
