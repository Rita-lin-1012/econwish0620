import * as React from "react"
import { Main } from "../Layout2";
import { NavbarCustom, NavbarItem } from "../NavbarCustom";
import "./App.css"
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';

import { useState, useEffect } from "react";
import Card from "../Card3";
import { IconButton } from '@mui/material';
import dataJson from "./data.json"
export default function App() {

    const users = convertUsersToArrayOfObject(dataJson)


    return (<>
        <div className="App">
            <Main>
                {users.map((e, i) => (
                    <Card user={e} key={i} />
                ))}
            </Main>
            <NavbarCustom>
                <NavbarItem>
                    <IconButton>
                        <PreviousIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    {/* <PlayIcon/> */}
                    <IconButton>
                        <PlayIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    <IconButton>
                        <NextIcon />
                    </IconButton>
                </NavbarItem>
            </NavbarCustom>

        </div>
    </>)

    function convertUsersToArrayOfObject(users) {
        const pos = getUserPositionIndex(users[0])

        const usersArrayOfObject = users.map(
            (user) => {
                return getUser(user, pos)
            }
        )
        usersArrayOfObject.shift()
        return usersArrayOfObject
    }

    function getUser(targetUser, pos) {
        return (
            {
                name: targetUser[pos.name],
                grade: targetUser[pos.grade],
                imgSrc: targetUser[pos.imgSrc],
                wish: targetUser[pos.wish]
            }
        )
    }
    function getUserPositionIndex(user0) {
        var pos = Object()
        user0.map(
            (e, i) => {
                pos[e] = i
            }
        )
        pos.imgSrc = pos.ThumbnailLink
        pos.name = pos.Name
        pos.grade = pos.Grade
        pos.wish = pos.Wish
        return pos
    }

    function test() {
        user0 = ['Timestamp', 'Email Address', 'Name', 'Photo', 'Grade', 'Wish', 'ThumbnailLink']
        var pos = Object()
        user0.map(
            (e, i) => {
                pos[e] = i
            }
        )
        pos.imgSrc = pos.ThumbnailLink
        pos.name = pos.Name
        pos.grade = pos.Grade
        pos.wish = pos.Wish
        return pos
    }

}