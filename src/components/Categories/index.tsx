import { includes, map } from 'lodash';
import React, { memo, useCallback, VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '..';
import { Category } from '../../interfaces/category';
import { State } from '../../store';
import { selectCategory } from '../../store/features/market';
import { TextType } from '../../styles';
import { CategoriesProps } from './interfaces';
import {
  BadgeStyled,
  CategoriesListWrapperStyled,
  CategoriesTitleWrapperStyled,
  CategoriesWrapperStyled,
} from './styles';

const Categories: VFC<CategoriesProps> = () => {
  const categories = useSelector<State, Category[]>(
    (state) => state.market.categories
  );

  const selectedCategoriesIds = useSelector<State, string[]>((state) =>
    map(state.market.selectedCategories, 'id')
  );

  const dispatch = useDispatch();

  const handleSelectBadge = useCallback(
    (id: string) => () => {
      dispatch(selectCategory(id));
    },
    [dispatch]
  );

  return (
    <CategoriesWrapperStyled direction={'column'}>
      <CategoriesTitleWrapperStyled>
        <Text type={TextType.CONTENT} bold>
          Shop by category
        </Text>
      </CategoriesTitleWrapperStyled>
      <CategoriesListWrapperStyled>
        {categories.map(({ value, id }) => (
          <BadgeStyled
            selected={includes(selectedCategoriesIds, id)}
            onSelect={handleSelectBadge(id)}
            key={id}
          >
            {value}
          </BadgeStyled>
        ))}
      </CategoriesListWrapperStyled>
    </CategoriesWrapperStyled>
  );
};

export default memo(Categories);
