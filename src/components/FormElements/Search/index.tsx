import React, { memo, VFC } from 'react';
import { SearchProps } from './interfaces';
import { SearchStyled, SearchWrapperStyled } from './styles';

const Search: VFC<SearchProps> = ({ className, ...otherProps }) => {
  return (
    <SearchWrapperStyled className={className}>
      <SearchStyled {...otherProps} />
    </SearchWrapperStyled>
  );
};

export default memo(Search);
