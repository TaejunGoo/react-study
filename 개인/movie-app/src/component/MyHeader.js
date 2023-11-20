const MyHeader = () => {
    return <div className='MyHeader'>
        <p className='app_name'>MOVIE APP</p>
        {
            // <button type='button'>로그인</button>
            <div className='user'>
                <span className='user_img' style={{'backgroundImage': `url(https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516_960_720.jpg)`}}></span>
                <strong>닉네에에임</strong>님
            </div>
        }
    </div>
}

export default MyHeader;