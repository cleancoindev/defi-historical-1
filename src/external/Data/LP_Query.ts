import gql from "graphql-tag";


export const UNI_TO_GET_ALL_LP_POSITIONS = gql`
query users($id: Bytes!) {
    users (
        where: {
            id: $id
        }) 
    {
        id
        liquidityPositions (where: {
          liquidityTokenBalance_gt: 0
        }) {
          liquidityTokenBalance
          pair{
            id
          }
        }
    }
  }
`

export const UNI_MINT_TXS = gql`
query mints($to: Bytes!) {
    mints (
        where: {
            to: $to
        }) 
    {
        id
        sender
        to
        liquidity
        amountUSD
        pair{
            id
        }
    }
  }
`

export const UNI_BURN_TXS = gql`
query burns($sender: Bytes!) {
    burns (
        where: {
            sender: $sender
        }) 
    {
        id
        sender
        to
        liquidity
    }
  }
`
