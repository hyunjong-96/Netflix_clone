import React from 'react'
import NetflixLogo from '../static/images/logo.png'
import ProfileImg from '../static/images/peng.png'
import styled from 'styled-components'
import {RiArrowDownSFill} from 'react-icons/ri'
import {HiSearch} from 'react-icons/hi'
import {AiOutlineGift} from 'react-icons/ai'
import {MdNotifications} from 'react-icons/md'

const MenuNav=styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 3rem;
    padding-top:1rem;
    padding-right:5rem;
`

const MenuMain=styled.div`
    display:flex;
    align-items:center;

    .logo{
        height:2rem;
        width:6rem;
        cursor:pointer;
    }
    /* .menu{
        margin-left:2.5rem;
        color:white;
        font-weight:bold;
        font-size:.8rem;
        display:flex;
        align-items:center;

        .menu_icon{
            font-size:1.2rem;
        }
    } */
`
const MenuList=styled.div`
    margin-left:2.5rem;
    display:flex;
    color:white;

    .menuItemHome{
        font-weight:bold;
    }
`
const MenuItem=styled.div`
    font-size:.9rem;
    cursor:pointer;
    &+&{
        margin-left:1.2rem;
    }
`
const SubNav=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:white;

    .profileImg{
        display:flex;
        align-items:center;
        &:hover{
            .img{
                border:1px solid red;
                //사용자 list모달출력
            }
        }
    }
    .subIcon{
        font-size:1.5rem;
    }
`
const Element = styled.div`
    font-size:1rem;
    font-weight:bold;
    cursor:pointer;
    &+&{
        margin-left:1.5rem;
    }
    .img{
        border:1px solid white;
        border-radius:4px;
        height:2rem;
        width:2rem;
    }
    .profile_icon{
        margin-left:.5rem;
    }
`

function MenuNavigation(){
    return(
        <MenuNav>
            <MenuMain className='navigation_main'>
                <img className='navigation_main logo' src={NetflixLogo}/>
                {/* <div className='navigation_main menu'>메뉴<RiArrowDownSFill className='menu_icon'/></div> */}
                <MenuList className='menu_list'>
                    <MenuItem className='menu_list menuItemHome'>홈</MenuItem>
                    <MenuItem className='menu_list menuItemItem'>TV 프로그램</MenuItem>
                    <MenuItem className='menu_list menuItemItem'>영화</MenuItem>
                    <MenuItem className='menu_list menuItemItem'>NEW! 요즘 대세 콘텐츠</MenuItem>
                    <MenuItem className='menu_list menuItemItem'>내가 찜한 콘텐츠</MenuItem>
                </MenuList>
            </MenuMain>
            <SubNav className='navigation_sub'>
                <Element className='navigation_sub search'><HiSearch className='subIcon'/></Element>
                <Element className='navigation_sub gift'><AiOutlineGift className='subIcon'/></Element>
                <Element className='navigation_sub notification'><MdNotifications className='subIcon'/></Element>
                <Element className='navigation_sub profileImg'><img className='navigation_sub img' src={ProfileImg}/><RiArrowDownSFill className='navigation_sub profile_icon'/></Element>
            </SubNav>
        </MenuNav>
    )
}

export default MenuNavigation