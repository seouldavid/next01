"use client"
import { Avatar, Button, FormControl, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

function Page(props) {
    const LOCAL_API_BASE_URL = process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL
    const API_URL = `${LOCAL_API_BASE_URL}/members/join`;
    const [uvo, setUvo] = useState({
        m_id: "",
        m_pw: "",
        m_name: "",
        m_age: "",
    });
    // 모든 입력 필드가 비어있지 않아야 true => 버튼이 활성화
    const isBtnChk = !uvo.m_id || !uvo.m_pw || !uvo.m_name || !uvo.m_age;

    // function changeUvo(e) {
    //     setUvo({
    //       ...uvo,
    //       [e.target.name]: e.target.value
    //     });
    //   };

    function changeUvo(e) {
        const { name, value } = e.target;
        setUvo(prev => ({
            ...prev, [name]: value
        }));
    }

    function goServer(params) {
        axios.post(API_URL, uvo)
            .then(data => {
                if (data.data.success) {
                    // console.log(data.message);
                    alert(data.data.message);
                } else {
                    alert(data.data.message);
                    return;
                }
            });
    }
    return (
        <div>
            <FormControl>
                {/* 수직정렬 */}
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar />
                    <TextField type='text' label='아이디' name='m_id' onChange={changeUvo} />
                    <TextField type='password' label='패스워드' name='m_pw' onChange={changeUvo} />
                    <TextField type='text' label='이 름' name='m_name' onChange={changeUvo} />
                    <TextField type='number' label='나 이' name='m_age' onChange={changeUvo} />
                    <Button fullWidth variant='contained' disabled={isBtnChk} onClick={goServer}>JOIN</Button>
                </Stack>
            </FormControl>
        </div>
    );
}

export default Page;