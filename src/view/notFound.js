import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.scss';
const NotFound = () => {
    let navigate = useNavigate();
    const handleClickGoToHome = () => {
        navigate('/');
    }
    return (
        <div className='not-found'>
            <img class="hu5pjgll" height="112" src="https://static.xx.fbcdn.net/rsrc.php/y7/r/s_LXY1yMsCT.svg" width="112" alt=""></img>
            <h4 className='not-found-heading'>Trang này không hiển thị</h4>
            <p className='not-found-description'>Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</p>
            <button 
            onClick={handleClickGoToHome}
            className='btn btn-primary'>Đi tới Home</button>
        </div>
    )
}


export default NotFound;