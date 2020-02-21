import request from '@/common/request';

/**
 * 查詢景點.
 */
export function fetchAttractionList(data) {
  // return request.get('/api/open-api/zh-tw/Attractions/All', data);
  return request.get(
    `//script.google.com/macros/s/AKfycbwmm6b303YGJvvNXtRR_TP5ErCiX60Y9HOpj9t27l_LFHXYE5o/exec?url=https://www.travel.taipei/open-api/zh-tw/Attractions/All&categoryIds=${data.categoryIds}&page=${data.page}`
  );
}
