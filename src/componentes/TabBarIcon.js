import React from 'react';
import styled from 'styled-components/native';

const TabBarIcon = styled.View`
    width:200px;
    height:50px;
    justify-content:center;
    align-items:center;
`;
const TabBarImg = styled.Image`
    width:30px;
    height:30px;
`;
const TabBarBadge = styled.View`
    width:30px;
    height:30px;
    border-radius:8px;
    background-color:#FF0000;
    position:absolute;
    justify-content:center;
    align-items:center;
    right:0;
    top:0;
`;
const TabBadgeCount = styled.Text`
    font-size:12px;
    color:#FFF;
`;

export default (props) => {
    let img = null;

    switch(props.route){
        case 'WelcomeTabs':
            img = (props.focused)?
                require('../images/home-action.png'):
                require('../images/home-black.png');
            break;
        case 'LoginTabs':
            img = (props.focused)?
                require('../images/msg-action.jpg'):
                require('../images/msg-black.jpg');
            break;
    }

    return (
        <TabBarIcon>
            <TabBarImg source={img} />
            {props.badge > 0 &&
                <TabBarBadge>
                    <TabBadgeCount>{props.badge}</TabBadgeCount>
                </TabBarBadge>
            }
        </TabBarIcon>
    );
}