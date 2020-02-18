import request from '@/common/request';

/**
 * 查詢景點.
 */
export function fetchAttractionList(data) {
  return request.get('/api/open-api/zh-tw/Attractions/All', data);
}
