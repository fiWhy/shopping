import React, { memo, useCallback, VFC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Modal from 'react-modal';

import { useImageDetails } from '../../hooks/use-image-details';
import { RoutesParams } from '../../router';
import { ImageDetailsProps } from './interfaces';
import {
  ImageDetailsWrapperStyled,
  PopupInnerWrapperStyled,
  PopupInnerImageStyled,
  PopupInnerInfoStyled,
  AuthorBlockStyled,
  MainBlockStyled,
  FooterBlockStyled,
} from './styles';
import { customModalStyles } from './constants';

const ImageDetails: VFC<ImageDetailsProps> = ({ onNext, onPrev }) => {
  const { id } = useParams<RoutesParams['imageDetails']>();
  const { push } = useHistory();
  const { data } = useImageDetails(id);

  const handleCloseModal = useCallback(() => {
    push('/');
  }, [push]);

  const handleNext = useCallback(() => {
    onNext(id);
  }, [id, onNext]);

  const handlePrev = useCallback(() => {
    onPrev(id);
  }, [id, onPrev]);

  return (
    <ImageDetailsWrapperStyled>
      <Modal
        style={customModalStyles}
        ariaHideApp={false}
        isOpen={true}
        onRequestClose={handleCloseModal}
      >
        {data && (
          <PopupInnerWrapperStyled direction={'column'}>
            <PopupInnerImageStyled src={data.full_picture} alt={data.author} />
            <PopupInnerInfoStyled direction={'column'}>
              <AuthorBlockStyled align={'center'}>
                {data.author} ({data.camera}) {data.tags}
              </AuthorBlockStyled>
              <MainBlockStyled flex={1}></MainBlockStyled>
              <FooterBlockStyled align={'center'}>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
              </FooterBlockStyled>
            </PopupInnerInfoStyled>
          </PopupInnerWrapperStyled>
        )}
      </Modal>
    </ImageDetailsWrapperStyled>
  );
};

export default memo(ImageDetails);
