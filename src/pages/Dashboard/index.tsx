import { findIndex, map } from 'lodash';
import React, { memo, useCallback, useMemo, VFC } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Gallery } from '../../components';
import { useImages } from '../../hooks/use-images';
import ImageDetails from '../ImageDetails';
import { DashboardProps } from './interfaces';
import { DashboardWrapperStyled } from './styles';

const Dashboard: VFC<DashboardProps> = () => {
  const { data, hasMore, loadMore } = useImages();
  const { push } = useHistory();

  const images = useMemo(
    () =>
      map(data, ({ id, cropped_picture }) => ({
        id,
        src: cropped_picture,
      })),
    [data]
  );

  const handleImagePick = useCallback(
    (id: string) => {
      push(`/${id}`);
    },
    [push]
  );

  const handleNext = useCallback(
    async (id: string) => {
      const currentIndex = findIndex(images, ['id', id]);
      if (currentIndex > -1) {
        if (currentIndex === images.length - 1) {
          loadMore();
        }
      }
    },
    [images, loadMore]
  );

  const handlePrev = useCallback(
    (id: string) => {
      console.log('Prev');
      const currentIndex = findIndex(images, ['id', id]);
      if (currentIndex > 0) {
        handleImagePick(images[currentIndex - 1].id);
      }
    },
    [images, handleImagePick]
  );

  return (
    <DashboardWrapperStyled>
      <Gallery onImagePick={handleImagePick} data={images} />
      <Switch>
        <Route path={'/:id'}>
          <ImageDetails onNext={handleNext} onPrev={handlePrev} />
        </Route>
      </Switch>
    </DashboardWrapperStyled>
  );
};

export default memo(Dashboard);
