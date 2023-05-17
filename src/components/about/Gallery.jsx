import { useState } from 'react'
import Ratio from 'components/common/Ratio'
import Portal from 'components/common/Portal'

import styled from 'styled-components'

export default function Gallery({ img }) {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState('')

  const dimmedClick = () => {
    setOpen(!open)
  }

  return (
    <GalleryWrapper>
      <div className="gallery">
        {img.map((gallery, index) => {
          return (
            <div
              key={index}
              className="gallery__item"
              onClick={() => {
                setOpen(true)
                setImage(gallery)
              }}
            >
              <Ratio ratio="1_1" src={gallery} />
            </div>
          )
        })}
      </div>
      {open && (
        <Portal dimmed={dimmedClick}>
          <GalleryModal>
            <img src={image} />
          </GalleryModal>
        </Portal>
      )}
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  .gallery {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
    &__item {
      flex: 0 0 25%;
      max-width: 25%;
      padding: 0 10px;
      margin-bottom: 20px;
      ${({ theme }) => theme.sm`
        flex: 0 0 50%;
        max-width: 50%;
      `}
      .ratio__content {
        border-radius: 15rem;
      }
    }
  }
`

const GalleryModal = styled.div`
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 80vw;
    max-height: 100%;
    width: 100%;
    border-radius: 30rem;
    transform: translate(-50%, -50%);
  }
`
