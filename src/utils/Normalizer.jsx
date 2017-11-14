import _ from 'lodash';

export function tagsListNormalizer(reposList) {
  const tagList = _.flatten(_.map(reposList, 'tags'));
  const tags = _.uniq(tagList);
  const result = [];
  tags.map((tag) => {
    let count = 0;
    tagList.map((item) => {
      if (item === tag) {
        count += 1;
      }
    });
    const obj = {
      name: tag,
      count,
    };
    result.push(obj);
  });
  return result;
}
