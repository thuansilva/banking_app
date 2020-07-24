import styles from 'styled-components/native';

export const Header = styles.View`
align-items:center
flex-direction: row
justify-content: space-between
padding: 30px 30px 0px 30px
`;

export const Carrousel = styles.View`
`;

export const Scroll = styles.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingLeft: 50, paddingRight: 5 }
})`
margin-top: 50px
`;

export const Card = styles.View`
width: 190px
height: 230px
margin-right: 20px
justify-content: space-between
padding: 10px
`;
export const Itemheader = styles.View`
justify-content: space-between
flex-direction: row

`;

export const Cash = styles.View`
margin-bottom: 0.2px
align-content:center
`;
export const Value = styles.Text`
font-family: Roboto-medium
font-size: 28px;
color: ${props => props.colortextsecundary ? '#030710' : '#ffffff'}
`;

export const CardType = styles.Text`
font-family: Roboto-thin
font-size: 17px;
color: ${props => props.colortextterciary ? '#6F8099' : '#fff'}
`;

export const Footer = styles.View`
justify-content: space-between
flex-direction: row
align-items:center
`;

export const TextData = styles.Text`
font-family: Roboto-thin
font-size: 12px;
opacity: 0.6;
color: #6F8099
`;
export const Text = styles.Text`
color: ${props => props.colortextprimary ? '#081C81' : '#fff'}
font-family: Roboto-thin
font-size: 17px;
`

export const CardCredit = styles(Card)` 
background-color:#ffff
border-radius: 10px
`;