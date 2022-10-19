import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Container className='container-fluid justify-content-center align-items-center'>

            <div className='row' style={{ height: 100 }} >
                <div className='col-10'>

                    <ul className="nav justify-content-around">
                        <Img src='https://webdevproof.com/theme-forest-demo/job/demo-1-en/assets/images/logo/logo.png' />
                        <Item className="nav-item " >
                            <a className="nav-link active" aria-current="page" href="#">Đăng tin tuyển dụng</a>
                        </Item>
                        <Item className="nav-item">
                            <a className="nav-link" href="#">Xem website tuyển dụng</a>
                        </Item>
                        <Item className="nav-item">
                            <a className="nav-link" href="#">Quản lí công việc</a>
                        </Item>
                        <Item className="nav-item">
                            <a className="nav-link" href="#">Quản lí hồ sơ</a>
                        </Item>
                    </ul>
                </div>
                <div className='col-2'>
                    <Avatar src='https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg'/>
                </div>
            </div>

        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 101px;
    border-bottom:1px solid #dee2e6;
 `
const Avatar = styled.img`
    height: 45px;
    width: 45px;
    margin-top: 25px;
   
`
const Img = styled.img`

`
const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
`