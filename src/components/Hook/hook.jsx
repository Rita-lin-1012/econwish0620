import * as React from "react"
import { Main } from "../Layout2";
import { NavbarCustom, NavbarItem } from "../NavbarCustom";
import "./App.css"
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';

import { useState, useEffect } from "react";
import Card from "../Card3";
import { IconButton, cardActionAreaClasses } from '@mui/material';

export default function App() {

    const [data, setData] = useState({});
    const [state, setState] = useState('');
    const [userInfo, setuserInfo] = useState([]);


    // React.js
    // set card as loading div
    // if data returned then render card component again

    console.log(data)

    useEffect(() => {
        setState("loading");

        /* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous */
        async function fetchData() {
          fetch(
                "https://script.google.com/macros/s/AKfycbxbI5-XmdmEbm9H2O5Qz40mt0_omqy4sHJhUzsch3r5IPzENGSXE2eW__GKddNS-kF7/exec"
            ).then(response => response.json())
                .then(response => {
                    setData(response)
                    setState("success")
                    setuserInfo(convertUsersToArrayOfObject(response))

                })
                .catch(() => {
                    console.log("some error happen")
                    setState("error")
                })
        };
        fetchData()

    }, [])

    console.log(userInfo)

    return (<>
        <div className="App">
            <Main>
                {userInfo.map((e, i) => (
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