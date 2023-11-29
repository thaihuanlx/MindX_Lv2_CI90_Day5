import React from 'react'
import Logo from '/Logo.png'
import iconsearch from '/icon-search.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='header-content'>
                <ul>
                    <li>GIỚI THIỆU</li>
                    <li>CÂU LẠC BỘ</li>
                    <li>DỊCH VỤ</li>
                    <li>LEFITACADEMY</li>
                    <li>TIN TỨC</li>
                    <li>LÀM MỚI CUỘC SỐNG</li>
                    <li><button className='btn-search'><img src={iconsearch} alt="" /></button></li>
                    <li><button className='btn-try'>TRẢI NGHIỆM NGAY</button></li>
                </ul>
            </div>


        </div>
    )
}

export default Header