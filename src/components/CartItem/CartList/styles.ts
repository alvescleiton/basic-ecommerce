import styled from 'styled-components'

import breakpoints from 'src/utils/breakpoints'

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  font-size: ${props => props.theme.fontSizes.small};

  @media ${breakpoints.tabletSmall} {
    font-size: ${props => props.theme.fontSizes.medium};
  }

  th {
    padding: 5px;
    line-height: 25px;
    background: ${props => props.theme.colors.white};
  }

  tbody {
    tr td {
      padding: 5px;
      border-top: 1px solid ${props => props.theme.colors.grayExtraLight};
    }

    tr {
      &:nth-child(even) {
        background: ${props => props.theme.colors.white};
      }

      &:last-child {
        font-size: ${props => props.theme.fontSizes.default};
        background: transparent;
        line-height: 40px;
      }
    }
  }
`

export const NoItems = styled.p`
  display: block;
  text-align: center;
  padding: 30px 10px;
`
