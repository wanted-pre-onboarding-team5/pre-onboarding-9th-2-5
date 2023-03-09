export function changeCategory({ spaceCategory }) {
  if (spaceCategory === '강원') {
    return 'blue';
  } else if (spaceCategory === '서울') {
    return 'blackAlpha';
  } else if (spaceCategory === '부산') {
    return 'green';
  } else if (spaceCategory === '대구') {
    return 'red';
  } else 'cyan';
}
