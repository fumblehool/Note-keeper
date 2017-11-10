import { fromJS } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = fromJS({
  isFetching: false,
  isFetchingError: false,
  tags: [],
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_TAG:
      const tagsData = state.get('tags').toJSON();
      tagsData.unshift({
        name: action.tagName,
        count: 0,
      })

      return state.merge({
        tags: tagsData,
      });

    
    case types.SAVE_REPO_TAGS:
      let tagList = state.get('tags').toJSON();
      let result = [];
      action.newTags.map((tag)=>{
        let counter = 1;
        tagList.map((i)=> {
          if(i.name === tag){
            counter = 0;
            i.count = i.count +1;
          }
        });
        if(counter){
          let obj = {
            'name': tag,
            'count': 1
          };
          result.push(obj);
        }
      });
      return state.merge({
        tags: tagList.concat(result)
      });

    default:
      return state;
  }
}
