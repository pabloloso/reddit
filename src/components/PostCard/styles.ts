import styled from 'styled-components'

export const PostCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  margin: 30px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;

  &:hover {
    border: 1px solid #898989;
  }
`

export const ImageContainer = styled.div`
  grid-area: 1 / 1 / 5 / 3;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 100% 0 0 0;
  position: relative;
  width: 100%;
`

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Date = styled.div`
  grid-area: 1 / 5 / 2 / 7;

  color: #787C7E;

  display: flex;
  justify-content: flex-end;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`

export const Title = styled.h3`
  grid-area: 2 / 3 / 3 / 7;

  color: #222222;

  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`

export const Author = styled.div`
  grid-area: 3 / 3 / 5 / 5;

  color: #787C7E;

  display: flex;
  align-items: flex-end;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`

export const Score = styled.div`
  grid-area: 3 / 5 / 5 / 6;

  color: #787C7E;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`

export const Comments = styled.div`
  grid-area: 3 / 6 / 5 / 7;

  color: #787C7E;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`
